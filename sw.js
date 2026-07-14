const CACHE_VERSION = 'v1.0.0';
const STATIC_CACHE = `longmaoyun-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `longmaoyun-dynamic-${CACHE_VERSION}`;
const IMMUTABLE_CACHE = `longmaoyun-immutable-${CACHE_VERSION}`;

const STATIC_ASSETS = [
  '/',
  '/assets/css/main.css',
  '/assets/js/main.js',
  '/assets/js/alpine-init.js',
  '/manifest.json',
  '/offline/'
];

const IMMUTABLE_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css',
  'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js',
  'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return caches.open(IMMUTABLE_CACHE)
          .then((cache) => {
            console.log('[SW] Caching immutable assets');
            return cache.addAll(IMMUTABLE_ASSETS);
          });
      })
      .then(() => {
        console.log('[SW] Installation complete');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Installation failed:', error);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName.startsWith('longmaoyun-') &&
                     !cacheName.includes(CACHE_VERSION);
            })
            .map((cacheName) => {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('[SW] Activation complete, controlling clients');
        return self.clients.claim();
      })
  );
});

const isNavigationRequest = (request) => {
  return request.mode === 'navigate' ||
         (request.method === 'GET' && request.headers.get('accept').includes('text/html'));
};

const isAssetRequest = (request) => {
  const url = new URL(request.url);
  const ext = url.pathname.split('.').pop().toLowerCase();
  return ['css', 'js', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'ico', 'woff', 'woff2', 'ttf'].includes(ext);
};

const isAPIRequest = (request) => {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/');
};

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  if (isAPIRequest(request)) {
    event.respondWith(networkOnly(request));
    return;
  }

  if (IMMUTABLE_ASSETS.some(asset => request.url.includes(asset))) {
    event.respondWith(cacheFirst(request, IMMUTABLE_CACHE));
    return;
  }

  if (isAssetRequest(request)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  if (isNavigationRequest(request)) {
    event.respondWith(networkFirstWithFallback(request));
    return;
  }

  event.respondWith(networkFirst(request));
});

async function cacheFirst(request, cacheName) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetchAndCache(request, cacheName);
    return networkResponse;
  } catch (error) {
    console.error('[SW] Cache-first fetch failed:', request.url, error);
    return new Response('', { status: 408, statusText: 'Request Timeout' });
  }
}

async function networkFirst(request) {
  try {
    const networkResponse = await fetchAndCache(request, DYNAMIC_CACHE);
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    console.error('[SW] Network-first fetch failed:', request.url, error);
    return new Response('', { status: 408, statusText: 'Request Timeout' });
  }
}

async function networkFirstWithFallback(request) {
  try {
    const networkResponse = await fetchWithTimeout(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
    throw new Error('Network response not OK');
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    const fallbackResponse = await caches.match('/');
    if (fallbackResponse) {
      return fallbackResponse;
    }
    console.error('[SW] All fallbacks failed for:', request.url);
    return new Response('Network unavailable', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: new Headers({ 'Content-Type': 'text/plain' })
    });
  }
}

async function networkOnly(request) {
  try {
    return await fetchWithTimeout(request);
  } catch (error) {
    console.error('[SW] Network-only fetch failed:', request.url, error);
    return new Response(JSON.stringify({ error: 'Network unavailable' }), {
      status: 503,
      statusText: 'Service Unavailable',
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
  }
}

async function fetchWithTimeout(request, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(request, { signal: controller.signal });
    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function fetchAndCache(request, cacheName) {
  const response = await fetchWithTimeout(request);
  if (response.ok && response.type === 'basic') {
    const cache = await caches.open(cacheName);
    cache.put(request, response.clone());
  }
  return response;
}

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CLEAR_CACHES') {
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name.startsWith('longmaoyun-'))
          .map((name) => caches.delete(name))
      );
    }).then(() => {
      event.source.postMessage({ type: 'CACHES_CLEARED' });
    });
  }
});

self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'update-cache') {
    event.waitUntil(updateStaticCache());
  }
});

async function updateStaticCache() {
  const cache = await caches.open(STATIC_CACHE);
  return Promise.all(
    STATIC_ASSETS.map((asset) => {
      return fetch(asset).then((response) => {
        if (response.ok) {
          cache.put(asset, response);
        }
      }).catch(() => {});
    })
  );
}

console.log('[SW] Service worker registered. Version:', CACHE_VERSION);
