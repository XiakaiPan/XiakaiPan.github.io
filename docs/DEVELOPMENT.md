# 本地开发与内容维护

## 添加页面

在 content 下添加 Markdown 文件，开头填写 YAML：

```yaml
---
title: "Page title"
permalink: /research/example/
description: "Brief description"
draft: true
---
```

`permalink` 使用小写字母、数字和连字符，目录式 URL 以 / 结尾；每页唯一。删除 `draft: true` 后页面才进入构建。Markdown 支持表格、代码块和普通链接；不支持 JSX、LaTeX 渲染或任意 Jekyll Liquid。

页面正文是可信的作者内容，可写 HTML；不要把未经审查的第三方 HTML 当作页面直接导入。顶层标题推荐仅一个 H1。站点模板自动添加导航，不必在每页复制。

站内链接写成 `/research/ssg/`；生成器自动加入配置中的 basePath。标题锚点由小写标题生成，去除标点，将空格变成连字符；重复标题追加 -1、-2。运行 npm run check 检查失效链接。

## 论文与版本

1. 编辑对应研究页的 Current status、Manuscripts and artifacts、Version history。
2. 若要发布 PDF，将文件放入 `assets/papers/ssg/v0.1/paper.pdf`。
3. 在研究页使用 `[PDF v0.1](/assets/papers/ssg/v0.1/paper.pdf)`。
4. 同时记录真实日期、作者、版本号、摘要、重要变动，以及可用的代码 commit。
5. 已公开的 PDF 路径保持不可变，新版本使用新路径。
6. 在 publications.md 链接该研究页；只有真正录用或发表后才改变发表状态。

研究主页可持续更新；具体论文版本应有单独记录，后续有正式论文题名、作者与公开 PDF 后再加入学术搜索元数据。

## 配置与运行

- `site.config.json`：站名、说明、导航、url、basePath、indexable。
- `url`：未来正式站点 origin，例如 https://example.org，末尾不要带路径；未确定时留空。
- `basePath`：个人根域名网站留空；子目录托管可设 /research-site。
- `indexable`：正式允许搜索抓取后才设 true。
- `PORT=5000 npm run dev`：macOS/Linux 调整端口。
- 开发服务器默认仅监听 127.0.0.1。确需局域网访问才显式设置 HOST。
- content/assets/config 修改后自动重建，需手动刷新；构建错误显示在终端，修正后再次保存即可。
- 调整构建脚本后重新启动 npm run dev。

## 提交前

运行 `npm ci && npm run check`。检查浏览器桌面和手机宽度，确认长标题、表格、导航、CV 下载和实际 PDF。这里的检查器不验证外部链接、论文事实或学术元数据，不提供自动截图测试。

旧首页、旧 Jekyll 配置与历史文章保存在 legacy/，不会进入 dist。



## 公开资源白名单（2026-11 新增）

站点构建不再递归公开 assets。新增图片或 PDF 后，必须同时更新 site.config.json 中的 publicAssets 白名单，确认页面引用，并运行 npm run check。默认保留在私有 Git 源码的附件不会进入 dist。

白名单并不构成保密、知识产权或后续投稿策略的许可；发布前应审核 PDF 全文与图示。原 Agent-SSG 独立页面已设置 draft: true，后续不再作为现行研究页发布，相关方向统一收回 SSG。

Research Statement 位于 content/statement.md；Industry Resume 位于 content/resume.md。两者面向 PhD 和 Research 岗位，须与 Publications 的真实状态一致。
