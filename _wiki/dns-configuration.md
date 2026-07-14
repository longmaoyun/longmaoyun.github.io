---
layout: wiki
title: "DNS 配置最佳实践与防泄漏指南"
description: "DNS 是代理服务中容易被忽视的重要环节。本文介绍如何正确配置 DNS 以防止 DNS 泄漏，提升安全性和访问速度。"
category: "高级教程"
author: "龙猫云团队"
date: 2025-06-05
tags: [DNS, 防泄漏, 安全, 高级配置, 优化]
---

## DNS 配置最佳实践与防泄漏指南

DNS（域名系统）是互联网的基础设施，负责将人类可读的域名（如 google.com）转换为机器可读的 IP 地址。在使用代理服务时，如果 DNS 配置不当，可能会导致 DNS 泄漏——即您的 DNS 查询请求没有通过代理隧道传输，而是直接发送到了您的 ISP（互联网服务提供商）的 DNS 服务器。这不仅会暴露您正在访问的网站信息，还可能使代理失去意义。

### 什么是 DNS 泄漏？

DNS 泄漏是指在使用代理或 VPN 时，设备的 DNS 查询请求绕过了加密隧道，直接通过本地网络发送到了 ISP 的 DNS 服务器。DNS 泄漏的危害在于：

- **隐私暴露**：您的 ISP 可以记录您访问的所有域名，即使您使用了代理。
- **访问限制**：DNS 查询可能被污染或劫持，导致无法正常访问目标网站。
- **速度影响**：使用 ISP 提供的 DNS 服务器可能速度较慢，且容易出现解析错误。

### 如何检测 DNS 泄漏

在配置 DNS 之前，您可以先检测当前是否存在 DNS 泄漏：

1. 断开代理连接状态，访问 [ipleak.net](https://ipleak.net) 或 [dnsleaktest.com](https://dnsleaktest.com)。
2. 点击测试按钮，记录显示的 DNS 服务器信息（通常显示为您的 ISP 提供的 DNS 地址）。
3. 然后连接上龙猫云机场的代理节点，再次访问上述网站进行测试。
4. 如果测试结果显示的 DNS 服务器地址仍然是您 ISP 的地址，说明存在 DNS 泄漏。
5. 如果测试结果显示 DNS 服务器地址已变为其他地址（如 8.8.8.8 或 1.1.1.1），说明 DNS 配置正确。

### 客户端 DNS 配置方法

#### v2rayN (Windows)

1. 打开 v2rayN 主界面，点击「设置」->「参数设置」。
2. 切换到「Core 设置」选项卡。
3. 在「DNS」栏中输入 DNS 服务器地址，推荐使用 `8.8.8.8`、`1.1.1.1` 或 `https://doh.dns.sb/dns-query`（DoH）。
4. 勾选「开启 DNS 策略」和「DNS 防泄漏」选项。
5. 点击「确定」保存设置。

#### Clash Verge (Windows/macOS)

1. 打开 Clash Verge 客户端，进入「设置」页面。
2. 在「DNS 设置」区域，将 DNS 模式设置为「Redir-Host」或「Fake-IP」。
3. 在「NameServer」中添加可靠的 DNS 服务器，如 `8.8.8.8`、`1.1.1.1`。
4. 在「Fallback」中添加国内 DNS 服务器，如 `223.5.5.5`（阿里 DNS）、`119.29.29.29`（腾讯 DNS）。
5. 设置 `fallback-filter.geoip: true`，确保国内域名使用国内 DNS 解析，海外域名使用加密 DNS 解析。

#### Shadowrocket (iOS)

1. 在 Shadowrocket 主界面，点击底部的「设置」标签。
2. 找到「DNS」选项，启用「覆盖 DNS」开关。
3. 在「DNS 服务器」输入框中输入 `8.8.8.8` 或 `1.1.1.1`。
4. 开启「DNS 防泄漏」开关，确保所有 DNS 查询通过代理隧道传输。
5. 返回主界面，重新连接节点使配置生效。

### 使用加密 DNS（DoH / DoT）

除了在客户端中设置 DNS 外，强烈建议使用加密 DNS（DNS over HTTPS 或 DNS over TLS）替代传统的 UDP DNS 查询。加密 DNS 的优势在于：

- **查询内容加密**：ISP 无法查看您正在查询的域名。
- **防止劫持**：加密传输防止中间人攻击和 DNS 劫持。
- **高速稳定**：优质的公共 DoH/DoT 服务器通常具有较高的可用性和响应速度。

推荐的加密 DNS 服务器：

| 服务商 | DoH 地址 | DoT 地址 |
|--------|----------|----------|
| Cloudflare | `https://cloudflare-dns.com/dns-query` | `1.1.1.1` |
| Google | `https://dns.google/dns-query` | `8.8.8.8` |
| AdGuard | `https://dns.adguard-dns.com/dns-query` | `94.140.14.14` |
| Quad9 | `https://dns.quad9.net/dns-query` | `9.9.9.9` |

### Fake-IP 模式说明

Fake-IP 是 Clash 系列客户端中一种先进的 DNS 处理模式。当启用 Fake-IP 模式后，客户端会为所有 DNS 查询返回一个假的本地 IP 地址，并在本地维护域名与假 IP 的映射关系。当实际请求发生时，客户端根据映射关系查找真实的域名，然后使用真实域名进行代理请求。这种方法可以有效避免 DNS 泄漏，同时提高解析速度。

### 路由器级别的 DNS 配置

如果您使用 OpenWRT 路由器配合 PassWall 等插件，建议在路由器层面完成 DNS 配置：

1. 在 OpenWRT 管理后台，进入「网络」->「DHCP/DNS」。
2. 在「DNS 转发」中输入 `127.0.0.1#7913`（指向 PassWall 的 DNS 服务）。
3. 在「Resolver 设置」中取消勾选「作为默认 DNS 服务器使用」。
4. 在 PassWall 的「高级设置」中，开启「DNS 防泄漏」和「自定义 DNS」选项。
5. 设置上游 DNS 服务器为 `8.8.8.8` 和 `1.1.1.1`。

### 验证配置是否生效

完成以上配置后，再次访问 [dnsleaktest.com](https://dnsleaktest.com) 进行检测。如果测试结果显示的 DNS 服务器地址不再是您的 ISP 地址，说明 DNS 防泄漏配置成功。建议配置完成后多次测试，确保所有 DNS 查询都已正确路由。

### 常见问题

**Q：配置 DoH 后某些网站反而打不开？**
A：某些公共 DoH 服务器可能被国内网络屏蔽或限速，导致解析超时。建议同时配置多个 DNS 服务器作为备用，或使用国内可靠的 DNS 服务器。

**Q：Fake-IP 模式下部分应用无法正常使用？**
A：Fake-IP 模式兼容性非常好，但极少数应用可能不兼容。如果遇到问题，可以尝试切换回 Redir-Host 模式。

**Q：DNS 配置后速度变慢了怎么办？**
A：可以尝试更换延迟更低的 DNS 服务器，或者使用国内的 DNS 服务器作为主要解析器，仅对海外域名使用加密 DNS。

如需更多帮助，请访问我们的 [FAQ 页面](/faq/) 或 [联系我们](/contact/)。
