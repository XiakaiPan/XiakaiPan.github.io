# Xiakai Pan — Research Website

Markdown 驱动的个人研究网站。Three Models 是方法论入口；SSG 与 TSG 为平行研究系列。本分支供本地开发，仓库保持私有，未配置自动部署。

## 本地启动

需要 Node.js 22 或更新版本、npm、Git。macOS 可通过现有 Node 管理器安装；如果使用 nvm，先运行 `nvm install && nvm use`。

```bash
git clone --branch draft/research-site-2026-10 https://github.com/XiakaiPan/XiakaiPan.github.io.git
cd XiakaiPan.github.io
npm ci
npm run dev
```

私有仓库需要本机已登录自己的 GitHub 账号（SSH 或 HTTPS 凭据均可）。不需要在项目内保存 token。

打开 http://127.0.0.1:4321 。修改 content、assets 或 site.config.json 会自动重新构建，刷新浏览器即可看到结果；修改 scripts 后重新启动。停止：Ctrl+C。

```bash
npm run check
npm run build
```

`check` 会构建并检查内部链接、锚点和静态资源；`build` 生成可独立托管的 `dist/`。不需要数据库、API key 或 Ruby/Jekyll。构建和运行阶段不访问外部字体或脚本 CDN；首次安装依赖需要访问 npm。

## 目录

| 路径 | 用途 |
| --- | --- |
| `content/index.md` | 首页 |
| `content/research.md` | 研究全景 |
| `content/research/*.md` | 独立研究主页 |
| `content/publications.md` | 成果与工作稿索引 |
| `content/cv.md` | 简历正文，同时生成 Markdown 下载 |
| `content/writing.md` | 写作入口 |
| `assets/` | 本地 CSS、图标及未来的版本化论文 PDF |
| `site.config.json` | 导航、域名、路径与搜索索引设置 |
| `scripts/` | 构建、预览和链接检查 |
| `docs/` | 内容维护、版本发布说明 |
| `legacy/` | 旧站源码备份，不参与构建 |
| `dist/` | 生成产物，不提交 Git |

新增页面、论文版本与部署说明见 [开发说明](docs/DEVELOPMENT.md) 和 [发布说明](docs/PUBLISHING.md)。

## 当前边界

研究页已经提供论文与版本历史的位置，但没有上传或虚构论文 PDF、实验数据和代码成果。原有 CV 与研究描述沿用草稿内容，后续直接编辑 Markdown 即可。

默认 `indexable: false`，输出 robots/noindex；这只是搜索引擎提示，**不是访问控制**。内容目前依靠私有仓库与仅绑定 127.0.0.1 的开发服务器保持私有。

GitHub Actions 仅安装、构建和检查，不上传产物、不部署。根目录不保留旧 Jekyll 配置；未来部署时应以 `dist/` 为发布目录，不能直接把 Markdown 源码分支当作构建结果。

原仓库 LICENSE 保留；其既有许可文本没有被重新解释为对论文、第三方材料或所有新增内容的授权。

