# 构建与公开发布边界

本分支为 Private 草稿，面向 PhD 和 Research 岗位申请材料。本轮更新不会合并 PR、部署站点或更改仓库权限。

## 构建

Node.js 22+。安装：npm ci；校验：npm run check；生成：npm run build；本地预览：npm run dev，访问 http://127.0.0.1:4321 。静态输出目录为 dist。

## 公开资产白名单

scripts/build.mjs 只复制 site.config.json 的 publicAssets 和必需的 CSS/favicon，不再递归复制整个 assets/。旧版 Agent-SSG PDF、TSG 源码 tar.gz、TLI/Workbench 历史稿和其他 Private 文件留在源仓库中，不能通过发布站点访问。

**当前白名单中的 SSG/TSG PDF 与图示只是公开候选，尚未完成 IP/保密审查。** 必须检查真实的每一份 PDF、图片、作者信息、实验材料来源及后续投稿策略。若某附件不批准公开，需同时删除白名单条目及页面中指向该文件的所有链接，再运行检查。

npm run check 可验证内部链接、锚点和静态文件集合。它不能验证学术事实、版权保密或浏览器显示。具体见 [发布前审查](../REVIEW_BEFORE_PUBLISH.md)。

## 部署策略

现有 CI 仅检查，不发布。确认公开内容后，从 Private 源仓库构建并**仅部署 dist** 到支持的静态托管。site.config.json 的 url/basePath 在启用正式域名时填写；indexable 暂时为 false，获准搜索索引后再调整。noindex 不是访问控制。
