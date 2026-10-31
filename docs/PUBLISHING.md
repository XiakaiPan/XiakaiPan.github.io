# 构建与未来发布

当前没有部署配置，也不需要注册托管账号。保持仓库私有，不合并草稿 PR 即可继续开发。

## 构建契约

- 安装命令：`npm ci`
- 校验命令：`npm run check`
- 构建命令：`npm run build`
- 发布目录：`dist`
- Node：22+
- 框架：普通静态文件
- 环境密钥：无

dist 内包含所有页面与样式，托管端不需要 Node。生成器不会把 docs、legacy、源码配置或 node_modules 复制到发布目录。

可将同一 dist 分别交给不同静态托管服务。使用自定义域名前，设置 site.config.json 的 url；子路径托管时设置 basePath 并运行检查。当前默认禁止索引，正式允许公开检索后再修改 indexable。

若将来使用 GitHub Pages，需要配置能够构建并发布 dist 的部署工作流。现有 check.yml 仅校验，不负责 Pages，也不会变更仓库权限。

## 研究版本记录格式

每个研究页为长期入口。实际有可公开的论文后，可以增加独立的版本页面：

```markdown
---
title: "Actual paper title — v0.1"
permalink: /research/ssg/versions/v0-1/
---
# Actual paper title

Authors: 填真实作者与顺序
Released: 填真实日期
Status: Working paper / Accepted / Published，按事实填写

[PDF](/assets/papers/ssg/v0.1/paper.pdf)

## Abstract

填当前版本摘要。

## Changes

填本次变化与对应代码 commit。
```

该模板只用于新建内容，不参与构建；未有真实成果时不生成空论文或占位 PDF。

发布前沿用仓库现有的 REVIEW_BEFORE_PUBLISH.md 逐项审查。浏览器显示与网络可达性需要在实际托管环境检验；本地成功不代表大陆访问速度已验证。

