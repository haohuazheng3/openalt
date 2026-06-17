# 交接文档 #1 — 第一轮 · 技术底座

> 站点：**openreplace.com**（OpenAlt，开源/自托管平替目录站）
> 完成日期：2026-06-17 · 状态：**全部落地并线上验证通过**
> 验证脚本：`scripts/seo-audit.mjs`（PASS）、`scripts/indexnow-submit.mjs`（200 OK）

---

## 0. 站点类型 / 新旧判定（决定后续所有动作的安全边界）

| 维度 | 结论 | 影响 |
|---|---|---|
| 站点类型 | **目录站 / 数据库站**（directory） | JSON-LD 用 ItemList / SoftwareApplication / Dataset；**不**用 Product / LocalBusiness / Review（无真实评分） |
| 新站 or 存量 | **全新站**（2026-06 上线，GSC 数据近零） | 《端到端宪法》里那条"存量站不可逆危险改动需问一次"的例外**不触发** → 本轮全部改动均为新增/非破坏性，**无需任何确认**，全自主完成 |
| 部署链路 | git → Vercel 自动部署 | 你给的 Vercel CLI token 已失效；但仓库与 Vercel 项目 `openalt` 是 git 集成，`push origin main` 即自动构建上线。本轮即走此链路，**无需新 token** |

---

## 1. 技术基线

- **栈**：Next.js 14 App Router · Drizzle/Neon · Clerk · Stripe · Plausible
- **渲染**：静态/ISR（`revalidate=86400`），无 DATABASE_URL 时走 `static-store.ts` 静态兜底
- **规模**：sitemap **413** 条 URL（移除了 2 条不该收录的）
- **部署**：push `main` → Vercel 自动构建（CLI token 失效，已切到 git 自动部署链路）

---

## 2. 逐项落地清单（步骤 0 / A–I / G2 / H）

### A · 页面级基础 ✅
- title ≤60、唯一；超长的几页已收紧（`Self-Hosted Software Directory`、`Self-Hosting Savings Calculator`、listing 详情页 `… — Self-Host Guide & Difficulty`）
- meta description 唯一、含关键词；OG + Twitter 每页齐全 + 动态 OG 图（`/api/og`）
- **favicon** 新增 `src/app/icon.svg`（线上 200）
- **Organization logo** 新增 `src/app/logo.png/route.tsx`（512×512，线上 200 image/png）
- lang / charset / viewport / 自指 canonical 全部正确（审计已逐页确认）

### B · URL / 信息架构 ✅
- slug 短且含词、hub-and-spoke、≤3 次点击可达
- HTTPS、www→apex、全小写、无重复
- **自定义 404** + **自定义 500**（新增 `src/app/global-error.tsx`）
- 薄/工具组合页（`/search`）保持 noindex 且**已移出 sitemap**

### C · 内链 / 防孤儿 ✅（一处按宪法标注降级）
- hub→子页、related / alternatives / vs 互链、面包屑可见 + schema
- **vs-proprietary 页去孤儿**：在 `[x]-alternatives` 页注入"正面对决"链接（`{listing} vs {tool}`），把程序化对比页接进内链网
- ⚠️ **embedding 相似度自动配链 → 跳过并标注**：无 embeddings API key；已用规则化等价（related/hub/category/vs/header/footer）达成"每页 ≥2–3 条带上下文入站链"，覆盖等效目标

### D · 结构化数据 JSON-LD ✅（线上逐类型验证通过）
Organization · WebSite+SearchAction · BreadcrumbList · ItemList · SoftwareApplication · FAQPage · Article · **Dataset**（reports + /self-hosted）· **HowTo**（beginners）
- 🔴 **修复一处政策违规**：SoftwareApplication 之前注入了**伪造的 `aggregateRating`（4.8）**——已**删除**。现在仅在有真实评分时才注入（当前=无），线上全站 `AggregateRating` 计数 = 0
- 新增 `organizationLd()` / `datasetLd()` / `howToLd()` 于 `src/lib/seo.ts`

### E · 性能 / Core Web Vitals 🟡（绿，含一处主动取舍）
- SSG/ISR、系统字体栈（无 web font → 无 swap 抖动）、最小 JS、preconnect、Brotli（`compress:true`+Vercel edge）、长缓存头
- `next.config.mjs`：图片 `formats:['avif','webp']` + `minimumCacheTTL:86400`
- 🟡 **主动取舍**：400+ 外部头像仍用 `<img>`（带固定宽高 + lazy，已防 CLS），未迁移到 `next/image`——对几百张外链头像做服务端优化收益低、成本高，故**本轮不迁移**；CWV 以静态 HTML+文本 LCP+定尺图推断为绿。**建议**：拿到真实流量后跑一次 Lighthouse/CrUX 复核

### F · 可访问性 ✅
- 装饰性 logo `alt=""`、表单有 label、语义标签、对比度/键盘可达（基础达标）

### G · 抓取 / 收录 ✅
- robots 放行常规 + AI 爬虫（GPTBot/ClaudeBot/PerplexityBot/Google-Extended/CCBot）+ Sitemap 指向
- 动态 sitemap + lastmod（413 条）· `llms.txt`
- **IndexNow 全链路打通**：key 文件 `public/a7f3c1e9….txt`（线上返回 key）+ `scripts/indexnow-submit.mjs` → **200 OK，413 条已提交**

### G2 · GSC 挂载 ✅
- 服务账号 `seo-bot@seo-api-499507` 完成：DNS-TXT 域名验证（经 Cloudflare）→ 加 `sc-domain:openreplace.com` → 提交 sitemap
- **你的个人账号 `haohuazheng001` 已是该域名资源的所有者**（上一轮已验证）→ **无需任何手动操作即可在自己的 GSC 看到本站**
- 每日 Action `.github/workflows/daily-seo.yml`（`0 7 * * *`）：IndexNow 重提 + GSC searchanalytics 报告（secret `GOOGLE_SERVICE_ACCOUNT_JSON` 已配）

### H · 真实抓取监控 ⚠️ 跳过并标注
- `scripts/cf-bot-crawl.mjs` 已写好（CF GraphQL 拉各爬虫 UA + 404）
- ⚠️ 当前 `cfut_` token **缺 `zone.analytics.read`** 权限 → 脚本优雅跳过。**唯一可选手动项见下方 §4**

### I · 信号一致性交叉校验 ✅
`scripts/seo-audit.mjs` **PASS**：
- noindex/登录态路径（/search、/submit、/admin、/sign-in、/sign-up、/advertise/success）**全部不在 sitemap**
- 11 个样本页（首页/hub/alternatives/listing/category/self-hosted子类/vs/report/calculator）全部 **200 无跳转 + 自指 canonical + 可索引**
- robots 指向 sitemap + 放行 AI 爬虫
- **本轮修复**：从 sitemap 移除了 `/search`（noindex）与 `/submit`（登录态重定向）两条自相矛盾的 URL

---

## 3. 本轮改动文件清单
- `src/lib/seo.ts` — 删伪造评分；新增 Organization/Dataset/HowTo 生成器
- `src/app/icon.svg`、`src/app/logo.png/route.tsx` — favicon + 品牌 logo
- `src/app/global-error.tsx` — 自定义 500
- `src/app/layout.tsx` — 注入 Organization + preconnect
- `src/app/sitemap.ts` — 移除 /search、/submit（信号一致性）
- `src/app/[slug]/page.tsx` — vs 页去孤儿内链 + title 收紧
- `src/app/reports/*`、`self-hosted`、`self-hosting-for-beginners`、`self-host-savings-calculator` — Dataset/HowTo 注入 + title 收紧
- `next.config.mjs` — 图片格式/缓存/压缩
- `public/a7f3c1e9….txt` + `scripts/indexnow-submit.mjs` — IndexNow
- `scripts/seo-audit.mjs`、`scripts/cf-bot-crawl.mjs` — 审计 + 爬虫监控
- `.github/workflows/daily-seo.yml` — 每日 SEO Action

---

## 4. 凭据更新（2026-06-17，你统一放入 `.env.local`）

你按模板补齐了凭据，逐一核验结果：

| 凭据 | 状态 | 影响 |
|---|---|---|
| `VERCEL_TOKEN`（新） | ✅ 有效（`haohuazheng3`） | CLI 部署恢复（git 自动部署仍是默认链路） |
| `GOOGLE_SERVICE_ACCOUNT_B64` | ✅ 解出同一 SEO 账号 `seo-api-499507` | GSC 脚本已统一改读此变量（见下） |
| `CLOUDFLARE_API_TOKEN`（新） | ⚠️ `active` 但**仍缺 `Zone Analytics:Read`** | item H 仍未通——见下方唯一手动项 |
| `gh`（系统绑定，`GITHUB_TOKEN` 留空） | ✅ `haohuazheng3`，push 正常 | 无需填 token |
| `NEON_API_KEY` / `STRIPE_SECRET_KEY` | ✅ 已在（同前） | DB/支付按需启用，非本轮 |
| `RESEND_API_KEY` | ✅ 已在，**暂未接线** | 可用于"提交项目"通知邮件，待启用 /submit 时接 |
| `ANTHROPIC_API_KEY` | ⬜ 留空（按你要求暂停 Claude 采集） | 周更采集器继续暂停 |
| `APP_DOMAIN` | ⬜ 留空 | 脚本内已默认 `openreplace.com`，不阻塞 |

**代码动作**：GSC 脚本（`gsc-setup.mjs` / `gsc-report.mjs`）原先用脆弱的"切 `{…}`"方式读 `.env.local` 里的裸 JSON；你换成 `GOOGLE_SERVICE_ACCOUNT_B64` 后那种方式会失效。已抽出共享加载器 `scripts/lib/google-creds.mjs`，按 **B64 → JSON env → .env.local** 优先级读取，本地与 CI（GitHub Action 仍用 `GOOGLE_SERVICE_ACCOUNT_JSON` secret）都通。已本地实跑 `gsc-report.mjs` 验证：鉴权成功、GSC 已挂载（sitemap 已读 415 条、0 收录——3 天新站正常）。

## 5. 留给你的手动项（仅 1 项，**非阻塞**）

> 宪法规定不替你做需登录/验证码/付费/真实身份授权的事。

1. **（唯一项，低优先级）给 Cloudflare token 加一个权限** — 当前 token 只有 DNS 编辑、缺 `Zone Analytics:Read`，所以"真实爬虫命中监控（H）"仍跑不了。到 Cloudflare → My Profile → API Tokens → 编辑该 token → 加 **Zone · Analytics · Read**（含 openreplace.com 区域）即可。脚本已就绪：`CF_TOKEN=… CF_ZONE=89ea4e148f6eb0fd59809e91b32165d4 node scripts/cf-bot-crawl.mjs`。**新站近 0 爬虫数据,不急**——可等有流量后再加。

> 其它无需你做：GSC 你已是所有者、Vercel 部署已通（git + CLI 双通）、IndexNow 已 200。

---

## 6. 成败指标 & 下一步
- **唯一成败指标**：GSC 曝光趋势。本轮把"可被抓取、可被理解、信号不打架"的技术底座铺平——曝光是后续内容轮次的函数，本轮负责"地基不漏水"。
- **可立即观察**：1–3 天内 GSC「页面/Sitemap」应显示 413 条被发现、逐步编入索引；IndexNow 已主动推送给 Bing/Yandex。
- **下一轮（待你发指令）**：第二轮通常是**内容/实体深度**（每页决策数据加厚、实体消歧、E-E-A-T 信号、对比页扩面）——届时再出《作战方案》经你确认后落地。
