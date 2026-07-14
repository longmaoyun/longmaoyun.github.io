// Alpine.js store initialization for 龙猫云机场
document.addEventListener('alpine:init', () => {
  Alpine.store('app', {
    // Dark mode
    darkMode: localStorage.getItem('darkMode') === 'true' ||
      (localStorage.getItem('darkMode') === null &&
        window.matchMedia('(prefers-color-scheme: dark)').matches),

    init() {
      this.$watch('darkMode', (val) => {
        localStorage.setItem('darkMode', val);
        document.documentElement.classList.toggle('dark', val);
      });
      // Apply on load
      document.documentElement.classList.toggle('dark', this.darkMode);
    },

    // Mobile menu
    mobileOpen: false,

    toggleMobile() {
      this.mobileOpen = !this.mobileOpen;
      document.body.style.overflow = this.mobileOpen ? 'hidden' : '';
    },

    // Announcement bar
    announcementHidden: localStorage.getItem('announcementHidden') === 'true',
    hideAnnouncement() {
      this.announcementHidden = true;
      localStorage.setItem('announcementHidden', 'true');
    },

    // Cookie consent
    cookieAccepted: localStorage.getItem('cookieAccepted') === 'true',
    acceptCookies() {
      this.cookieAccepted = true;
      localStorage.setItem('cookieAccepted', 'true');
    },

    // FAQ accordion
    activeFaq: null,
    toggleFaq(id) {
      this.activeFaq = this.activeFaq === id ? null : id;
    }
  });
});
