# 交接文档 #3 — 第三轮 · 内容扩张(翻倍/三倍)

> 站点:**openreplace.com** · 完成日期:2026-06-18 · 状态:**已上线并线上验证通过**
> 成果:目录从 **159 → 402 个真实自托管项目(2.5×)**

---

## 1. 成果与线上验证

| 指标 | 结果 |
|---|---|
| 项目总数 | **402**(+243),16 → **22 品类** |
| sitemap URL | **752**(从 418) |
| 新项目详情页 | Jellyfin/Ollama/Navidrome/Immich/Gitea… 全部线上 200 ✓ |
| 新品类页 | `/category/media-server` 等含真实项目(Jellyfin)✓ |
| 新 alternatives 页 | `/chatgpt-alternatives` 正确列出 Ollama 等 ✓ |
| 诚实 featureGap | `/ollama` 显示"需配 Open-WebUI"等 ✓;402/402 有具体 gap |
| build | 773 页,typecheck 干净 |

## 2. 怎么做的(pipeline)

1. **发现**:`git clone` **awesome-selfhosted-data**(1325 个结构化 YAML,含 repo/描述/协议/语言/标签/stars/archived)。
2. **过滤+去重**:排除已有 159、映射到本站品类、stars≥1500、非 archived → 243 候选(脚本 `/tmp/asd-discover.cjs`、`asd-filter.cjs`)。
3. **生成独家字段**:**18 个并行 sonnet 子代理**,每个读一批候选 + 品类→SaaS 参考,生成 SeedListing 完整字段(难度1-5 / 部署矩阵 / 官方托管 / 诚实 featureGap / replaces 映射 / tagline / tags),写出 JSON。
4. **校验+去重**:`/tmp/asd-merge.cjs` 严格校验(slug 唯一、难度 1-5、部署合法、replaces 指向有效 SaaS、品类有效、featureGap≥20 字)+ 字符 n-gram 相似度去重 → **243/243 通过,0 丢弃**。
5. **写入 + 保鲜**:合并进 `seed-listings.ts`,`refresh-listings.mjs` 用 GitHub API 统一刷新真实 stars/新鲜度。
6. **seed DB + 部署**(见 §4)。

## 3. 新增品类与 SaaS
- **6 新品类**(都是高搜索量自托管核心类目):media-server、photos、blog-cms、read-later-feeds、ai-llm、finance-budget。
- **19 新专有 SaaS**(供 replaces 与 alternatives 页):Plex/Spotify/Netflix、Google Photos/iCloud、WordPress/Medium/Substack/Squarespace/Contentful、Feedly/Pocket/Instapaper/Raindrop、ChatGPT/OpenAI、Mint/YNAB/QuickBooks。
- 顶级项目入库:Ollama(★174k)、Open-WebUI(★142k)、Immich(★104k)、Stirling-PDF(★81k)、Jellyfin、Ghost、Gitea、Actual、Firefly III…

## 4. ⚠️ 重大架构发现(贯穿三轮的根因)

诊断第三轮"新数据不上线"时发现:**生产环境 3 天前配了 `DATABASE_URL`(Neon,Vercel 集成自动注入)**。代码逻辑是 `有 DB 就读 DB,否则读静态文件`——所以**生产一直读 Neon DB,从不读静态 `seed-listings.ts`**。

后果:此前**所有 seed 数据更新都没在生产生效**,包括:
- Round 1 删除的伪造 `aggregateRating`(代码删了,但 DB 数据可能仍含——已随本次 re-seed 修正)
- Round 2 的 MinIO archived 标记(我当时误判为"CDN 缓存",**真凶是 DB**)
- 每周 stars 刷新、第三轮 402 扩张

**修复**:用 `setup-http.ts`(Neon HTTP 驱动,绕过本地 5432 防火墙)把 402 项目 + 22 品类 + 78 SaaS **非破坏 upsert** 进 Neon(按 slug 更新内容、新增缺失,**不删除、不覆盖 featured/status/affiliate**),再强制全新部署(build 时 `generateStaticParams` 查 DB 得 402 → 预渲染)。已验证 402 上线。

## 5. 🔧 需要你拍板:长期数据源架构(双源问题)

现状:**数据维护全在静态文件**(seed-listings.ts + 周更脚本 + 子代理扩张),但**生产真相源是 DB**。这是双源,需要一个长期方案:

- **方案 A(保留 DB)**:让每周保鲜 Action 在更新静态文件后**也 re-seed DB**(需把 `DATABASE_URL` 加为 GitHub repo secret)。保留 submissions / click 统计 / Stripe featuring 等 DB 功能。代价:凭据扩散到 GitHub + 流程稍复杂。
- **方案 B(移除 DB)**:删掉生产 `DATABASE_URL`,让静态 `seed-listings.ts` 成为唯一真相源。所有更新(扩张、周更、修正)**即时生效**,架构自洽、最简单。代价:弃用 submissions/click/Stripe featuring(当前无流量、未启用)。

> 我的倾向:当前阶段重心是 SEO/内容,DB 功能未启用 → **方案 B 更简洁**;但若你近期要做"提交项目/featured 变现",则选 **A**。这关系到你 3 天前配的 Neon,留给你定。

## 6. SEO 风险(诚实说明)

一次性 +243 真实项目页 + 大量 alternatives/category/vs 页,对一个 ~5 天新站是**激进**的(Google scaled-content 视角)。缓解:
- 这些**不是灌水**——每页有真实 GitHub 数据 + 难度/部署矩阵 + 诚实 featureGap,信息增益高。
- **建议密切监控 GSC「页面 → 已发现-尚未编入索引」**:若大量新页长期"已发现未索引",说明 Google 在观望,应放缓后续扩张、加强外链与信任信号(方法论页、徽章外链、数据帖)。
- 与 Round 2 的"信任优先·滴灌"有张力——本轮按你"double/triple now"的明确要求执行;后续节奏建议回到数据驱动(看 GSC 再决定是否继续扩)。

## 7. 人类待办
1. **拍板 §5 的架构选择**(A 保 DB / B 静态唯一源)。
2. **外链/站外分发**(同前):难度徽章 PR、r/selfhosted+HN 数据帖、借势热点。
3. **内容终审**:抽查新项目的 featureGap/replaces 是否准确(子代理 sonnet 生成 + 已自动校验,但人眼终审更稳)。

## 8. 下一批候选(看 GSC 反馈再上)
- 装机预算器(/what-can-i-self-host,你已选的功能)
- 迁移引擎 / 逃离分 / 许可证健康度(Round 2 暂缓项)
- 继续扩品类(git-code、ecommerce、search、dev-tools)或加深现有品类

> pipeline 脚本目前在 `/tmp`(asd-discover/filter/prep/merge.cjs)。值得固化进 `scripts/`(发现+过滤部分)供下次扩张复用;生成步骤靠子代理,无法纯脚本化。
