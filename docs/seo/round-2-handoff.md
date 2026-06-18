# 交接文档 #2 — 第二轮 · 策略主场(信任优先 · 滴灌)

> 站点:**openreplace.com**(OpenAlt,开源/自托管平替目录站)
> 完成日期:2026-06-17 · 状态:**已落地并线上验证通过**
> 唯一成败指标:90 天后 GSC 曝光是否上升。本轮只用真实独家数据,不碰任何会降权的黑帽。

---

## 0. 本轮定调:一次主动的方向修正

第二轮深挖完竞品与 SERP 后,我把原方案"一口气铺 50–75 个程序化页"**主动改成了"信任优先 · 滴灌验证"**(已经你确认)。理由(详见对话中的五点洞察):

- **新站批量程序化页 = 内容农场信号**。3 天、零外链的站突然上几十页,即使有独家数据,也会触发 Google 的 scaled-content 怀疑。新站瓶颈是信任,不是内容量。
- **本站护城河(难度评分 + 诚实差距)是"被引用资产",不是"流量入口"**。对应的是低量高转化、高 AI 引用的长尾 → **GEO 优先于抢蓝链**。
- **数据会自动腐烂**:标榜"新鲜度/死项目"的站,自己数据半年不更新就自我打脸。**保鲜比加页面重要**。

所以本轮 = **3 件地基 + 2 块最高确定性内容 + 1 个正确性修复**,其余扩张内容暂缓(见 §5),滴灌上线后看 GSC 再决定是否扩。

---

## 1. 已落地清单(全部线上验证通过)

### 地基

| # | 项 | 落地 | 验证 |
|---|---|---|---|
| 1 | **数据保鲜引擎** | `scripts/refresh-listings.mjs` 用 GitHub API 刷新 stars/last-commit/archived(不依赖 DB/Claude)+ 每周 Action `refresh-data.yml` 自动 commit | 首次全量跑:**158 项更新、stars Δ +312,076**(旧快照严重过时)、**MinIO 检测到已归档** |
| 2 | **方法论信任页(E-E-A-T)** | `/methodology`:公开 1–5 评分 rubric、数据来源、每周刷新机制、诚实局限声明、纠错入口、affiliate 透明声明。用实时数据自证(项目数/有差距%/已归档数/难度分布) | 线上 200 ✓ |
| 3 | **GEO 结构化** | `<Tldr>` 组件(一句话直答 + 来源 + 最后更新),AI 最易摘取。已用于方法论/PaaS/one-click/对决页 | TL;DR + FAQPage schema 线上 ✓ |

### 内容(滴灌:最高确定性两块)

| # | 项 | 落地 | 验证 |
|---|---|---|---|
| 4 | **PaaS/Heroku 缺口** | `/self-hosted-paas`(最肥缝隙:SERP 全是利益冲突厂商软文)+ 3 个 PaaS 对决页(coolify-vs-dokploy / caprover-vs-coolify / caprover-vs-dokku) | 4 页线上 200 + FAQPage ✓ |
| 5 | **难度排序榜单** | `/one-click-self-host`(26 个真实 One-Click 项目,碾压纯文字 listicle)+ 给 `/easiest-self-hosted-apps` 补 Tldr | 线上 200 ✓ |
| 6 | **对决页升级** | `[slug]` 的 OSS-vs-OSS `CompareView` 从简单对比表 → 数据驱动对决:TL;DR + featureGap 并排 + bottom line + FAQ schema(全部从两项目真实字段计算,非模板) | 对决页 "falls short" + FAQPage 线上 ✓ |

### 正确性修复

| # | 项 | 落地 |
|---|---|---|
| 7 | **archived 详情页即时正确** | archived 项目(如刚标记的 MinIO)详情页现在**静态生成并立即显示 Archived 警告**(原先 ISR 要 1 天才更新);sitemap 仍只收 live,不主推死项目。死项目预警卖点完整 |

**构建**:439 页(较上轮 +11 为 archived 详情页 + 3 新 hub + 3 对决),typecheck 干净,质量门子代理评审 ✅ 通过(无编造/事实错误/促销腔)。

---

## 2. 新增文件/资产清单
- `scripts/refresh-listings.mjs` — GitHub API 保鲜(核心)
- `.github/workflows/refresh-data.yml` — 每周自动保鲜 + commit
- `scripts/dedupe.mjs` — 本地 n-gram 近重复检测(缺 OpenAI key 时的 embedding 去重替代;自测通过,供下一批批量内容把关)
- `src/components/tldr.tsx` — GEO 直答组件
- `src/data/featured-comparisons.ts` — 精选对决配对(目前 3 个 PaaS,可扩)
- `src/app/methodology/`、`src/app/self-hosted-paas/`、`src/app/one-click-self-host/` — 3 个新页
- 改动:`[slug]/page.tsx`(对决升级 + archived 静态化)、`easiest-self-hosted-apps`(Tldr)、`sitemap.ts`(注册新页)、`seed-listings.ts`(数据刷新)

---

## 3. 质量门遵守情况
- ✅ 每页 ≥3 个竞品没有的真实维度(难度+部署+featureGap+新鲜度,天然满足)+ 独特正文(子代理核对:对决页"几乎零写死,数据驱动")
- ✅ **发布前 LLM 评审**:用子代理(harness 模型,不依赖空的 ANTHROPIC key)完成,通过
- ⚠️ **embedding 去重**:无 OpenAI key → `scripts/dedupe.mjs` 本地 n-gram 替代(本轮 6 页主题正交无需去重,工具为下一批就位)
- ✅ 外发/徽章 nofollow + 中性锚,canonical 自指;**affiliate 透明声明写进方法论页**
- 🚫 红线全守:无 PBN/隐藏文字/cloaking/门页/批量灌水/堆砌

---

## 4.《人类待办清单》(机器替不了)

### 必做(决定成败的两件)
1. **外链 / 站外分发**(SEO 不能只靠站内):
   - 把**难度徽章** PR 进项目 README(尤其难度 1–2 的项目,"易部署"是卖点,维护者乐意挂)→ `/api/badge/[slug]`,已有嵌入代码在每个 listing 页
   - 在 **r/selfhosted + Hacker News** 发数据帖:如"我们刷新了 159 个自托管项目,发现这些已经死了"(MinIO 等)或"自托管难度指数"
   - 借 **Heroku 'sustaining engineering'** 热度,在相关讨论分享 `/self-hosted-paas`
2. **内容终审**:人眼抽查 methodology / PaaS / 对决页"是否真有独特价值"(子代理已初审,但终审是人的判断)

### 可选(非阻塞)
3. **Cloudflare Analytics token**(Round 1 遗留):给一个带 `Zone Analytics:Read` 的 token 即可开启真实爬虫监控(`scripts/cf-bot-crawl.mjs` 已就绪)
4. 若要开"**社区实测难度**"(奇招3):需一个轻量 KV(Upstash / Vercel KV)的 key 存投票

---

## 5. 下一批候选(暂缓,**看 GSC 数据再上**)

这些是第二轮研究里确认有价值、但按"滴灌"暂缓的扩张内容。等 §1 的页面在 GSC 拿到正反馈(曝光/收录上升)后再上,届时用 `dedupe.mjs` 把关、子代理评审:

- **迁移引擎** `/migrate/[saas]`(奇招1,清单外):用 featureGap+难度生成"搬家会丢什么+怎么搬",最高转化下游意图
- **逃离/锁定分** `/leave/[saas]`(奇招2,清单外):给专有 SaaS 打锁定分,截留留存焦虑大流量
- **许可证健康度** `/open-source-license-changes`(奇招5):吃 Redis/Elastic/Sentry/n8n 改协议焦虑
- **批量扩对决页**:`FEATURED_VS` 扩到 baserow-vs-nocodb-vs-teable、plausible-vs-umami-vs-matomo 等(架构已就位,加配对即可)
- **more best-X-for-Y**:raspberry-pi / homelab / 各语言榜单

---

## 6. 成败指标 & 观察窗口
- **唯一指标**:GSC 曝光趋势(90 天)。
- **本轮逻辑**:先把"数据保鲜 + 可信 + 被 AI 引用"的地基铺平,少量高确定性内容滴灌探路——而非一次赌满。
- **1–3 天可观察**:GSC「页面/Sitemap」显示新页被发现;6 个新页 + archived 修复进索引。
- **决策点**:2–4 周后看新页(尤其 `/self-hosted-paas`、`/one-click-self-host`)的曝光/展现位置 → 决定 §5 哪些扩、怎么扩。
- **持续**:每周一保鲜 Action 自动刷新数据并触发重新部署,GSC 持续收到 fresh 信号。
