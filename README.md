# 龙猫云机场 — 小火箭 Shadowrocket 下载、Apple ID 与共享账号完整指南

> **龙猫云机场**旗下知识站点，专注于 Shadowrocket（小火箭）下载安装、Apple 美区 ID 注册使用、小火箭共享账号与独享账号等实用教程。所有内容以知识分享为目的，帮助用户顺利完成下载、安装和配置流程。

<p align="center">
  <img src="img/banner-shadowrocket.webp" alt="龙猫云机场 - Shadowrocket 小火箭下载与 Apple ID 使用指南" width="100%" />
</p>

<p align="center">
  <a href="https://longmaoyun.github.io/"><img src="https://img.shields.io/badge/站点-龙猫云机场-6366f1?style=flat-square" alt="龙猫云机场"></a>
  <a href="https://longmaoyun.github.io/download.html"><img src="https://img.shields.io/badge/下载-Shadowrocket-22c55e?style=flat-square" alt="Shadowrocket下载"></a>
  <a href="https://longmaoyun.github.io/tutorial.html"><img src="https://img.shields.io/badge/教程-新手入门-f59e0b?style=flat-square" alt="小火箭教程"></a>
  <a href="https://longmaoyun.github.io/faq.html"><img src="https://img.shields.io/badge/帮助-常见问题-ef4444?style=flat-square" alt="常见问题"></a>
</p>

---

## 📑 目录

- [什么是 Shadowrocket（小火箭）](#什么是-shadowrocket小火箭)
- [如何下载 Shadowrocket](#如何下载-shadowrocket)
- [Apple 美区 ID 是什么](#apple-美区-id-是什么)
- [小火箭共享账号](#小火箭共享账号)
- [小火箭独享账号](#小火箭独享账号)
- [常见问题 FAQ](#常见问题-faq)
- [推荐阅读](#推荐阅读)
- [热门搜索](#热门搜索)
- [网站导航](#网站导航)
- [更新日志](#更新日志)

---

## 什么是 Shadowrocket（小火箭）

Shadowrocket 是一款在 iOS 平台运行的网络工具，因为图标是一枚火箭，很多用户习惯叫它"小火箭"。在 App Store 上架以来，Shadowrocket 已经积累了相当数量的用户，尤其是在需要访问海外服务的场景下，小火箭几乎是 iPhone 用户绕不开的一个应用。

<p align="center">
  <img src="img/shadowrocket-intro.webp" alt="Shadowrocket 小火箭应用界面介绍" width="80%" />
</p>

*Shadowrocket 的主界面设计简洁直观，连接状态、延迟数据、流量统计一目了然。对于刚接触的用户来说，上手难度不高，但需要正确配置才能发挥作用。*

### Shadowrocket 到底能做什么

简单来说，Shadowrocket 是一个代理客户端。它本身不提供网络服务，而是作为一个"中间层"，把你设备上的网络请求按照你设定的规则转发出去。打个比方：Shadowrocket 像一个智能快递分拣员，不同的包裹（网络请求）按照不同的路线（规则）送达目的地。

Shadowrocket 的核心能力包括：

- **规则分流**：你可以设定哪些网站走代理、哪些直连。比如国内网站直连更快，海外网站走代理更稳定，Shadowrocket 能自动判断
- **多协议支持**：支持 Shadowsocks、V2Ray、Trojan 等主流协议，兼容性相当广泛
- **按需连接**：可以设置只有在特定情况下才开启代理，省电也省流量
- **DNS 管理**：内置 DNS 配置功能，可以防止 DNS 泄露和污染
- **流量监控**：实时显示每个请求的走向，方便排查问题

### 为什么需要 Apple ID 来下载

Shadowrocket 是 iOS 独占应用，只在 App Store 上架。这就意味着你必须有一个 Apple ID 才能下载。问题在于，因为某些原因，Shadowrocket 在部分地区的 App Store 中搜索不到。所以很多用户发现自己明明知道这个应用，但就是搜不到。

这时候就需要一个其他地区的 Apple ID —— 通常是美区 Apple ID 或者海外 Apple ID。因为 Shadowrocket 在美国区的 App Store 是可以正常下载的。这也是为什么在龙猫云机场的教程中，Apple 美区 ID 是一个绕不开的话题。

> **Tip**：如果你已经有一个非中国区的 Apple ID，可以直接在 App Store 搜索 "Shadowrocket" 下载。如果搜不到，说明你的 Apple ID 所在地区不支持该应用，需要切换地区或注册新账号。

### 新手最容易踩的坑

从实际经验来看，刚接触 Shadowrocket 的用户通常会在以下环节卡住：

1. **搜不到应用**：第一时间想到的就是去网上搜安装包，结果下载了来源不明的版本，不仅可能用不了，还存在安全风险
2. **不知道需要配置**：下载完以为打开就能用，实际上 Shadowrocket 需要导入配置或手动添加服务器信息才能工作
3. **Apple ID 切换不当**：在 App Store 登录其他 Apple ID 下载应用后，忘记切换回自己的账号，导致 iCloud 数据混乱
4. **规则不生效**：导入了配置但规则没开，或者规则文件本身有问题，导致所有流量都走了代理或都没走

这些问题的解决方案，在后面的章节中都会详细展开。

---

## 如何下载 Shadowrocket

下载 Shadowrocket 本身并不难，难的是"在正确的地区找到它"。这一章会覆盖从搜索到安装的完整流程，以及常见问题的处理方法。

<p align="center">
  <img src="img/shadowrocket-download.webp" alt="Shadowrocket 小火箭 App Store 下载页面" width="80%" />
</p>

*在美区 App Store 中搜索 "Shadowrocket"，第一个结果一般就是。注意辨别，开发者是 Shadowrocket（或显示为 Shadow Launch Technology Limited），价格通常在 $2.99 左右。*

### 第一步：确认你的 Apple ID 地区

打开 App Store，点击右上角头像，查看你的 Apple ID。如果显示的是中国大陆区，那 Shadowrocket 是搜不到的。你需要一个美区 Apple ID 或海外 Apple ID。

如果你还不确定自己是否需要换区，可以先访问 [龙猫云机场下载页面](https://longmaoyun.github.io/download.html) 对照一下详细的下载指引。

### 第二步：获取合适的 Apple ID

有几种方式可以获取美区 Apple ID：

- **自己注册**：在 Apple 官网选择美国作为地区，用邮箱注册。不需要美国信用卡，付款方式可以选择 "None"。但需要填写一个美国地址，可以找一个真实的免税州地址（如俄勒冈州）
- **使用共享账号**：适合只想下载一次应用的用户，优点是方便快捷，缺点是安全性不如自有账号。关于共享账号的详细说明，可以参考 [小火箭共享账号](#小火箭共享账号) 章节
- **购买独享账号**：适合长期使用、需要绑卡或订阅服务的用户，账号完全由自己控制

### 第三步：在 App Store 登录并下载

拿到美区 Apple ID 后，在 App Store 中退出当前账号，登录美区账号。搜索 "Shadowrocket"，点击购买（或获取）即可开始下载。

> **Warning**：一定只在 App Store 中登录，不要进入 iCloud 设置中登录！如果误在 iCloud 中登录了别人的 Apple ID，你的设备可能会被锁定。这是很多新手容易犯的错误，务必注意。

### 第四步：下载后的操作

Shadowrocket 下载完成后，建议立即在 App Store 中切换回你自己的 Apple ID。因为 App Store 的登录和 iCloud 是不同的，切换 App Store 账号不会影响 iCloud 数据。

下载完成后，你还需要导入配置。Shadowrocket 支持多种方式导入：

- 从 URL 导入（点击配置链接自动跳转）
- 扫描二维码导入
- 手动添加服务器信息
- 从剪贴板导入

如果你还没有配置，可以访问 [龙猫云机场教程页面](https://longmaoyun.github.io/tutorial.html) 查看 Shadowrocket 配置教程。

### 常见下载问题

| 问题 | 原因 | 解决方法 |
|------|------|----------|
| 搜不到 Shadowrocket | Apple ID 是中国区 | 换用美区 Apple ID |
| 下载时提示需要验证 | 账号设置了双重认证 | 需要输入验证码，共享账号可能无法通过 |
| 付款方式被拒绝 | Apple ID 没有绑定支付方式 | 注册时选择 "None" 付款方式 |
| 已购项目中找不到 | 下载时用的不是自己的账号 | 在 App Store 账号的已购项目中查看 |

---

## Apple 美区 ID 是什么

Apple 美区 ID 就是注册地区为美国的 Apple ID。苹果的 App Store 在不同国家/地区上架的应用是不同的，有些应用只能在特定地区的 App Store 找到。Shadowrocket 就是其中之一 —— 它在美区 App Store 正常上架，但在中国区 App Store 中无法搜索到。

<p align="center">
  <img src="img/apple-us-id.webp" alt="Apple 美区 ID 注册和使用示意图" width="80%" />
</p>

*Apple 美区 ID 的注册流程并不复杂，关键是选择正确的地区、填写有效的美国地址，以及付款方式选择 "None"。注册完成后可以在 App Store 中正常使用。*

### 为什么需要美区 Apple ID

除了下载 Shadowrocket 之外，美区 Apple ID 还有很多实用场景：

- **下载地区限定应用**：很多应用只在美区上架，比如部分社交应用、游戏、工具类应用
- **体验完整功能**：有些应用在美区版本的功能更完整，更新也更及时
- **订阅海外服务**：部分服务的订阅需要美区 Apple ID 才能完成
- **获取最新版本**：美区 App Store 通常最先收到应用更新

可以说，Apple 美区 ID 对于 iPhone 用户来说是一个非常有用的工具。不管你是想下载 Shadowrocket，还是想体验更多应用，Apple 美区 ID 都值得拥有。

### Apple ID 共享是怎么回事

在讨论 Apple 美区 ID 的时候，经常会涉及"Apple ID 共享"这个概念。简单来说，就是一个 Apple ID 被多个人使用。这在 Shadowrocket 下载场景中很常见 —— 因为很多人只是需要下载一次应用，不需要长期持有美区账号。

关于 Apple ID 共享，有几点需要了解：

- 共享的 Apple ID 只能在 App Store 中使用，不要在 iCloud 中登录
- 共享账号的密码可能会被修改，使用时需要注意
- 如果共享账号开启了双重认证，需要联系账号提供者获取验证码
- 下载完应用后建议立即切换回自己的 Apple ID

### 注册美区 Apple ID 的注意事项

如果你想自己注册一个美区 Apple ID，需要注意以下几点：

1. **选择正确的地区**：在注册页面地区选择 "United States"
2. **付款方式选 None**：注册时付款方式可以选择 "None"，这样就不需要绑卡
3. **填写真实地址**：不需要是美国地址生成器生成的假地址，找一个真实的商业地址，比如 Apple Store 门店地址
4. **验证邮箱**：Apple 会发送验证码到你的注册邮箱，需要在 24 小时内完成验证
5. **不要频繁切换**：频繁在不同 Apple ID 之间切换可能触发安全验证

---

## 小火箭共享账号

小火箭共享账号是指多人共用一个已购买 Shadowrocket 的 Apple ID。这种方式的优势是成本低、使用方便，适合只需要下载一次应用的用户。

<p align="center">
  <img src="img/share-account.webp" alt="小火箭共享账号使用说明" width="80%" />
</p>

*小火箭共享账号的使用流程很简单：在 App Store 登录共享账号 → 搜索 Shadowrocket → 下载 → 切换回自己的 Apple ID。整个过程只需要几分钟。*

### 什么是共享账号

共享账号本质上就是一个普通的 Apple ID，只不过购买了 Shadowrocket 之后，把这个账号分享给其他人使用。因为 Apple 的购买机制是：一个 Apple ID 购买过的应用，在同一账号登录的任何设备上都可以免费下载。

所以，只要有一个账号购买了 Shadowrocket，其他人用这个账号登录 App Store 就能直接下载，不需要再付一次钱。这就是小火箭共享账号的基本原理。

### 适合哪些用户

小火箭共享账号特别适合以下场景：

- **只需要下载一次**：你只是想下载 Shadowrocket 安装到自己的手机上，之后不会再需要这个美区账号
- **不想折腾注册**：注册美区 Apple ID 需要填写地址、选择付款方式，有些用户觉得麻烦
- **临时使用**：你可能只是想试试 Shadowrocket 好不好用，不想花时间去注册美区账号
- **设备不多**：如果只有一两台设备需要安装，共享账号完全够用

### 使用时的注意事项

使用小火箭共享账号并不是完全没有风险的，以下几点需要特别注意：

- **只在 App Store 登录**：这个是最重要的。千万不要在"设置 → iCloud"中登录共享账号，只应该在 App Store 中登录。如果误在 iCloud 登录，可能导致你的设备被锁定
- **下载完立即退出**：安装完成后，第一时间在 App Store 中退出共享账号，登录回你自己的 Apple ID
- **不要开启双重认证**：如果共享账号开启了双重认证，每次登录都需要验证码，基本就没法用了
- **更新时可能需要重新登录**：Shadowrocket 有新版本时，需要重新登录共享账号才能更新。不过 Shadowrocket 的更新频率不高，这个问题不算严重

### 常见误区

关于小火箭共享账号，有几个常见的误解：

- **"共享账号不安全"**：只要正确使用（只在 App Store 登录，不登录 iCloud），共享账号不会对你的设备安全造成影响
- **"共享账号下载的应用会消失"**：不会。下载到本地的应用与登录的 Apple ID 无关，切换账号后应用仍然可以正常使用
- **"共享账号需要收费"**：不一定。有些共享账号是免费的，有些是付费的。付费的一般稳定性更好，免费的可能随时被改密码

对于共享账号和独享账号的区别，可以继续阅读 [小火箭独享账号](#小火箭独享账号) 章节了解更多。

---

## 小火箭独享账号

小火箭独享账号就是你自己注册或购买的、只有你一个人使用的 Apple 美区 ID。与共享账号最大的区别是：独享账号的密码只有你自己知道，不会被别人修改或停用。

<p align="center">
  <img src="img/private-account.webp" alt="小火箭独享账号与共享账号对比" width="80%" />
</p>

*独享账号的优势在于完全自主控制。你可以随时登录、随时下载、随时更新，不用担心账号被其他人修改密码或开启双重认证。*

### 独享账号与共享账号的区别

| 对比维度 | 共享账号 | 独享账号 |
|----------|----------|----------|
| 账号控制权 | 多人在用，密码可能随时被改 | 完全由自己控制 |
| 安全性 | 只在 App Store 使用，基本安全 | 安全性最高 |
| 便利性 | 拿来就用，不需要注册 | 需要自己注册或购买 |
| 更新应用 | 需要重新登录账号 | 随时更新 |
| 长期使用 | 不适合长期使用 | 适合长期持有 |
| 成本 | 低或免费 | 一次性注册免费，或购买几十元 |

### 哪些用户更适合独享账号

以下情况建议选择小火箭独享账号：

- **需要长期使用 Shadowrocket**：如果你需要定期更新应用，独享账号更方便
- **有多台设备**：独享账号可以在多台设备上登录，自由下载
- **需要绑定支付方式**：如果你打算在美区 App Store 订阅其他服务，必须使用自己的独享账号
- **注重隐私和安全**：独享账号只有你自己用，不会出现密码被改、账号被锁的情况

### 如何获取独享账号

获取独享账号的方式主要有两种：

1. **自己注册**：按照 [Apple 美区 ID 注册教程](#apple-美区-id-是什么) 中的步骤，自己注册一个美区 Apple ID。注册免费，但需要填写美国地址
2. **购买成品账号**：有些服务商提供注册好的美区 Apple ID，带上 Shadowrocket 购买记录。优点是省事，缺点是需要付费

无论哪种方式，独享账号到手后第一件事就是修改密码和密保问题，确保账号完全由你掌控。

---

## 常见问题 FAQ

以下是关于 Shadowrocket 下载、小火箭 Apple ID、美区账号等话题的常见问题，每个问题都尽量给出了详细的解答。

<details>
<summary><strong>Shadowrocket 为什么搜索不到？</strong></summary>

如果你在 App Store 中搜索 "Shadowrocket" 找不到结果，原因通常只有一个：你的 Apple ID 是中国区的。Shadowrocket 没有在中国区 App Store 上架，所以中国区账号搜不到。

解决办法是换用一个美区 Apple ID 或海外 Apple ID。在 App Store 中退出当前账号，登录美区账号后再搜索，就能找到 Shadowrocket 了。如果你还没有美区 Apple ID，可以参考本站的 Apple 美区 ID 注册教程，或者了解小火箭共享账号的使用方式。

</details>

<details>
<summary><strong>小火箭怎么下载？</strong></summary>

小火箭的下载流程很简单：首先需要一个美区 Apple ID（或海外 Apple ID），然后在 App Store 中登录这个账号，搜索 "Shadowrocket"，点击获取即可下载。下载完成后，建议立即切换回你自己的 Apple ID。

详细的下载步骤和截图指引，可以访问 [龙猫云机场下载页面](https://longmaoyun.github.io/download.html) 查看完整教程。

</details>

<details>
<summary><strong>Apple 美区 ID 可以长期使用吗？</strong></summary>

可以的。只要是你自己注册的 Apple 美区 ID，并且妥善保管密码和密保信息，就可以长期使用。注册时付款方式选择 "None" 的账号，在不需要购买付费应用的情况下是完全够用的。

需要注意的是，如果你长期不登录美区账号，Apple 可能会要求你重新验证身份。建议每隔几个月登录一次，保持账号活跃。另外，不要把美区 Apple ID 的密码和其他账号设成一样，防止安全问题。

</details>

<details>
<summary><strong>小火箭共享账号安全吗？</strong></summary>

从技术角度来说，只要正确使用，小火箭共享账号是安全的。关键在于：只在 App Store 中登录共享账号，绝对不要在 iCloud 设置中登录。App Store 的登录不会影响你设备上的 iCloud 数据、照片、通讯录等。

最大的风险是误操作 —— 不小心在 iCloud 中登录了共享账号，可能导致设备被锁定。所以使用共享账号时一定要集中注意力，下载完立刻退出。如果你对安全性要求很高，建议选择小火箭独享账号。

</details>

<details>
<summary><strong>Shadowrocket 更新不了怎么办？</strong></summary>

Shadowrocket 显示有更新但无法更新，通常是因为你下载时使用的 Apple ID 与你当前登录的 Apple ID 不一致。App Store 的更新机制要求：下载应用时用的哪个账号，更新时也必须用同一个账号。

解决办法：先确认你是在哪个 Apple ID 下下载的 Shadowrocket，然后在 App Store 中登录那个账号，就能正常更新了。更新完成后可以继续切换回自己的账号。

</details>

<details>
<summary><strong>更换 Apple ID 会影响已安装应用吗？</strong></summary>

不会。App Store 切换账号只影响应用的下载和更新权限，不影响已经安装到本地的应用。你通过美区账号下载的 Shadowrocket，在切换回中国区账号后仍然可以正常打开和使用。

但是，该应用的更新会受到影响 —— 更新时必须用原来的美区账号。另外，如果应用内使用了 iCloud 同步功能，切换 iCloud 账号可能会影响数据同步，但 App Store 账号切换不会。

</details>

<details>
<summary><strong>如何切换 Apple ID？</strong></summary>

在 App Store 中切换 Apple ID 的步骤：

1. 打开 App Store
2. 点击右上角的头像
3. 往下滑到底部，点击"退出登录"
4. 输入你要登录的 Apple ID 和密码
5. 如果提示输入验证码，说明该账号开启了双重认证

注意：在"设置"应用的顶部也可以切换 Apple ID，但那里切换的是 iCloud 账号，会影响你的照片、通讯录、备份等数据。只在 App Store 中切换就可以了。

</details>

<details>
<summary><strong>小火箭独享账号适合哪些人？</strong></summary>

小火箭独享账号适合以下几类用户：

- 需要长期使用 Shadowrocket、定期更新的用户
- 有多台苹果设备（iPhone、iPad 等）需要安装的用户
- 打算在美区 App Store 订阅其他付费服务的用户
- 对账号安全有较高要求的用户
- 不想每次更新都要找共享账号的用户

如果你只是偶尔用一次，或者只是先试试看，共享账号可能更合适。如果你确定要长期使用，独享账号是更好的选择。

</details>

<details>
<summary><strong>为什么下载 Shadowrocket 需要付费？</strong></summary>

Shadowrocket 在 App Store 中是付费应用，美区价格通常为 $2.99。这是开发者收取的一次性购买费用，付一次就可以永久使用（包括后续更新）。

如果你使用小火箭共享账号，因为共享账号已经购买过，所以登录后可以直接下载，不需要再次付费。但是，共享账号本身可能是有偿提供的，这取决于共享账号的来源。

</details>

<details>
<summary><strong>美区 Apple ID 注册一定要美国地址吗？</strong></summary>

是的，注册美区 Apple ID 时，Apple 会要求填写一个美国地址。这个地址不需要是你的真实住址，但必须是一个有效的美国地址。建议使用以下方法：

- 找一个真实的美国商业地址，比如 Apple Store 门店地址
- 选择一个免税州（如俄勒冈州、特拉华州、蒙大拿州）的地址，避免产生消费税
- 地址格式要规范，包括街道、城市、州、邮编

</details>

<details>
<summary><strong>Shadowrocket 下载后需要配置什么？</strong></summary>

Shadowrocket 下载后是一个空壳，需要导入配置才能使用。配置包括服务器地址、端口、加密方式、密码等信息。导入方式有：

- 从 URL 导入（点击配置链接）
- 扫描二维码
- 手动添加
- 从剪贴板导入

如果你还没有配置信息，可以访问 [龙猫云机场教程页面](https://longmaoyun.github.io/tutorial.html) 了解详细配置步骤。

</details>

<details>
<summary><strong>如何使用小火箭苹果 ID？</strong></summary>

小火箭苹果 ID 本质上就是一个美区 Apple ID，使用方法和其他 Apple ID 一样。在 App Store 中登录后，搜索 Shadowrocket 下载即可。关键点：

- 只在 App Store 中使用，不要登录 iCloud
- 下载完成后及时退出
- 如果需要更新应用，重新登录该账号

</details>

<details>
<summary><strong>Apple ID 共享和独享有什么区别？</strong></summary>

Apple ID 共享是指多人共用一个账号，独享是指账号只有一个人使用。在 Shadowrocket 下载场景中：

- 共享账号：方便快捷，但密码可能被改，不适合长期使用
- 独享账号：完全由自己控制，安全稳定，适合长期持有

具体选择哪种，取决于你的使用频率和对安全性的要求。如果你只是偶尔用一次，共享账号就足够了。

</details>

<details>
<summary><strong>Shadowrocket 在 iOS 什么版本能用？</strong></summary>

Shadowrocket 要求 iOS 12.0 或更高版本。目前主流的 iPhone 型号（iPhone 8 及以上）都能满足这个要求。如果你的手机系统版本比较低，可以升级到最新版 iOS 再安装。

</details>

<details>
<summary><strong>为什么有些人叫它小火箭？</strong></summary>

"小火箭"是 Shadowrocket 的昵称，因为应用图标是一枚火箭，而且 "Shadowrocket" 直译过来就是"影子火箭"。在中文用户群体中，"小火箭" 这个叫法比 "Shadowrocket" 更顺口，所以慢慢就成了约定俗成的称呼。

你可以把这两个名字理解为同一个应用：Shadowrocket 是官方名称，小火箭是中文用户群体的习惯叫法。

</details>

<details>
<summary><strong>Shadowrocket 在安卓上能用吗？</strong></summary>

Shadowrocket 是 iOS 独占应用，没有安卓版本。如果你使用的是安卓手机，需要寻找其他替代方案。安卓平台上有许多类似的代理客户端，功能也很丰富，但具体选择需要根据你的需求来判断。

</details>

<details>
<summary><strong>如何判断 Shadowrocket 是不是正版？</strong></summary>

判断 Shadowrocket 是否正版有几个方法：

- **来源**：只有从 App Store 下载的才是正版。任何从网页、第三方商店下载的都不是正版
- **开发者**：在 App Store 中查看应用详情，开发者是 Shadowrocket（Shadow Launch Technology Limited）
- **价格**：正版 Shadowrocket 是付费应用（$2.99），免费的都不是正版

</details>

<details>
<summary><strong>美区 Apple ID 充值方法有哪些？</strong></summary>

如果你需要在美区 App Store 购买付费应用或订阅服务，需要给美区 Apple ID 充值。常见方法：

- 购买美区 App Store 礼品卡（Gift Card），在 App Store 中兑换
- 绑定美国信用卡或借记卡（需要美国发卡行）
- 使用 PayPal 绑定（需要美国 PayPal 账户）

对于大多数国内用户来说，购买礼品卡是最方便的方式。

</details>

<details>
<summary><strong>小火箭共享账号可以多台设备同时用吗？</strong></summary>

理论上可以。一个 Apple ID 可以在多台设备上登录 App Store 并下载已购买的应用。但需要注意的是：

- 如果共享账号开启了双重认证，每台设备登录都需要验证码
- 登录设备过多可能触发 Apple 的安全机制，需要额外验证
- 共享账号的密码如果被修改，所有设备都会受到影响

</details>

<details>
<summary><strong>下载 Shadowrocket 需要科学上网吗？</strong></summary>

下载 Shadowrocket 本身不需要。你只需要能正常访问 App Store 即可。因为 Shadowrocket 在美区 App Store 上架，你只需要一个美区 Apple ID 就能搜索和下载，App Store 的访问不需要额外的网络工具。

</details>

<details>
<summary><strong>为什么有的 Shadowrocket 是免费的？</strong></summary>

正版 Shadowrocket 在 App Store 是付费的（$2.99）。如果你看到"免费 Shadowrocket"的说法，通常指的是：

- 使用共享账号下载（共享账号已购买过，所以下载免费）
- 非正版或破解版本（不推荐，存在安全风险）
- 其他类似的免费应用（不是真正的 Shadowrocket）

建议从 App Store 下载正版，安全可靠。

</details>

<details>
<summary><strong>Apple 美区 ID 被锁了怎么办？</strong></summary>

如果美区 Apple ID 被锁定，可以尝试以下方法：

- 访问 iforgot.apple.com 使用注册邮箱重置密码
- 如果绑定了手机号，使用短信验证码解锁
- 如果以上方法都不行，联系 Apple 客服（需要提供账号注册信息）

预防措施：设置强密码、绑定可用的救援邮箱、定期登录保持活跃。

</details>

<details>
<summary><strong>Shadowrocket 的配置会过期吗？</strong></summary>

Shadowrocket 本身不会过期，但配置中的服务器信息可能会过期。配置是否可用取决于你使用的服务提供商。如果服务器地址变更、端口更换或服务到期，原有的配置就会失效。需要获取新的配置信息并重新导入。

</details>

<details>
<summary><strong>小火箭苹果 ID 和其他苹果 ID 有冲突吗？</strong></summary>

不会有冲突。App Store 可以随时切换不同的 Apple ID，不会影响设备上已有的数据。但需要注意：

- 不要同时在 iCloud 设置中登录多个账号
- 不同 Apple ID 下载的应用，更新时需要切换到对应的账号
- 已安装的应用不会因为切换 Apple ID 而消失

</details>

<details>
<summary><strong>如何安全地使用小火箭共享账号？</strong></summary>

使用小火箭共享账号的安全要点：

1. **只在 App Store 登录**，绝对不登录 iCloud
2. **下载完成立即退出**，不保持登录状态
3. **不要保存共享账号密码**到钥匙串
4. **使用后检查**：确认自己已退出共享账号，登录回自己的账号
5. **不要共享个人 Apple ID**：只使用别人提供的共享账号，不要把自己的账号给别人

</details>

---

## 推荐阅读

以下文章涵盖了 Shadowrocket 使用、Apple ID 管理、网络配置等主题，建议根据你的需求选择性阅读：

- 📖 [Shadowrocket 下载与安装完整教程](https://longmaoyun.github.io/download.html) — 从零开始，手把手教你下载和安装小火箭
- 📖 [小火箭新手入门指南](https://longmaoyun.github.io/tutorial.html) — 下载后如何配置、如何导入规则、常见问题排查
- 📖 [Apple 美区 ID 注册教程](https://longmaoyun.github.io/wiki.html) — 不需要信用卡，免费注册美区 Apple ID
- 📖 [小火箭共享账号使用指南](https://longmaoyun.github.io/faq.html) — 共享账号的正确使用方式、注意事项
- 📖 [小火箭独享账号对比分析](https://longmaoyun.github.io/blog.html) — 共享 vs 独享，哪种更适合你
- 📖 [网络节点选择与优化](https://longmaoyun.github.io/nodes.html) — 如何选择适合的节点，提高连接速度
- 📖 [Shadowrocket 规则配置详解](https://longmaoyun.github.io/tutorial.html) — 规则分流原理、自定义规则编写
- 📖 [常见问题与故障排查](https://longmaoyun.github.io/faq.html) — 连接不上、速度慢、规则不生效等问题的解决方案

---

## 热门搜索

很多用户在搜索"龙猫云机场"之后，还会继续搜索**小火箭苹果 ID**、**小火箭共享账号**、**Shadowrocket 下载**、**Shadowrocket 教程**、**Apple 美区 ID**等相关内容。这类搜索通常意味着用户已经了解到 Shadowrocket 的存在，但卡在了下载这一步。

从搜索习惯来看，国内用户更倾向于用"小火箭"这个简称，比如"小火箭怎么下载""小火箭苹果 ID""小火箭共享账号"等。而海外用户或英文使用者则更习惯搜索 "Shadowrocket download" 或 "Shadowrocket Apple ID"。这些搜索词虽然不同，但指向的需求是一致的：想下载 Shadowrocket，但遇到了地区限制或者不知道如何获取。

除了下载之外，配置相关的搜索也很常见。比如"Shadowrocket 配置教程""小火箭规则怎么导入""小火箭连接不上怎么办"。这部分用户已经下载了应用，但不太清楚下一步该做什么。如果你是这种情况，建议访问 [龙猫云机场教程页面](https://longmaoyun.github.io/tutorial.html)，里面有从配置到使用的完整流程。

另外，还有一些用户搜索的是与 Apple ID 相关的问题，比如"Apple 美区 ID 怎么注册""美国 Apple ID 共享""海外 Apple ID 下载应用"。这些用户可能还没有 Shadowrocket，但已经意识到需要一个海外 Apple ID。对于这类需求，可以先去 [龙猫云机场的 Wiki 页面](https://longmaoyun.github.io/wiki.html) 查看 Apple ID 注册教程。

值得一提的是，有些用户会搜索"小火箭独享账号"和"小火箭共享账号"的对比。这说明用户在选择账号类型时比较谨慎，希望了解两者的区别后再做决定。如果你也在纠结这个问题，可以参考本站关于小火箭独享账号和共享账号的对比分析。

总的来说，不管你的搜索词是什么，核心需求通常只有两个：下载 Shadowrocket 和配置使用。这两个步骤都离不开 Apple 美区 ID，所以 Apple 美区 ID 的知识也是必不可少的。龙猫云机场的站点内容围绕这几个核心需求展开，希望能帮你顺利完成每一步。

---

## 网站导航

| 页面 | 链接 | 说明 |
|------|------|------|
| 🏠 首页 | [longmaoyun.github.io](https://longmaoyun.github.io/) | 龙猫云机场首页 |
| 📥 下载 | [下载页面](https://longmaoyun.github.io/download.html) | Shadowrocket 下载教程 |
| 📚 教程 | [教程页面](https://longmaoyun.github.io/tutorial.html) | 使用教程与配置指南 |
| ❓ 常见问题 | [FAQ 页面](https://longmaoyun.github.io/faq.html) | 常见问题解答 |
| 📖 Wiki | [Wiki 页面](https://longmaoyun.github.io/wiki.html) | 知识库与深度文章 |
| 📝 博客 | [博客页面](https://longmaoyun.github.io/blog.html) | 最新文章与更新 |
| 🌐 节点 | [节点页面](https://longmaoyun.github.io/nodes.html) | 节点信息与选择 |
| 💰 套餐 | [套餐页面](https://longmaoyun.github.io/pricing.html) | 服务套餐与价格 |
| 📢 公告 | [公告页面](https://longmaoyun.github.io/announcement.html) | 站点公告与通知 |
| 📧 联系 | [联系页面](https://longmaoyun.github.io/contact.html) | 联系方式与反馈 |

---

## 更新日志

<details>
<summary><strong>2026年8月 — 站点内容更新</strong></summary>

- 更新了 Shadowrocket 下载教程，增加了最新的安装步骤截图
- 完善了 Apple 美区 ID 注册指南，更新了地址填写注意事项
- 新增了小火箭共享账号与独享账号的对比分析
- 扩展了 FAQ 板块，从 15 个问题增加到 25+ 个
- 优化了站内链接结构，提升了页面间的导航体验
- 修复了移动端部分页面的显示问题

</details>

<details>
<summary><strong>2026年7月 — 站点上线</strong></summary>

- 龙猫云机场知识站点正式上线
- 搭建了 Jekyll 静态站点框架
- 创建了下载、教程、FAQ、Wiki、博客等核心页面
- 完成了 SEO 基础配置（TDK、结构化数据、站内链接）

</details>

---

<p align="center">
  <img src="img/end.webp" alt="龙猫云机场 - 感谢访问" width="60%" />
</p>

<p align="center">
  <em>龙猫云机场 — 专注 Shadowrocket 下载、Apple ID 使用与小火箭账号知识分享</em>
</p>

<p align="center">
  <a href="#">⬆ 返回顶部</a>
</p>