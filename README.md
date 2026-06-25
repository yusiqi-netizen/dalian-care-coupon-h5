# 大连市养老服务消费补贴 H5

Vue 2.0 H5 预览项目，包含：

- `user.html`：用户端指引视频页
- `org.html`：机构端指引视频页

## 代码结构

- `user.html` / `org.html`：页面入口，保留原有访问地址，内部由 Vue 2 挂载渲染
- `src/config/pages.js`：用户端、机构端页面文案、视频列表、视频资源配置
- `src/components/h5-page.js`：H5 页面公共结构
- `src/components/video-card.js`：视频播放器组件，保留微信 WebView 兼容属性
- `src/main.js`：根据入口页的 `data-page` 加载对应页面配置
- `vendor/vue/vue.min.js`：本地 Vue 2.7.16 运行文件，避免手机预览依赖外部 CDN

## 部署

项目使用 GitHub + Vercel 工作流。后续修改提交到同一个 GitHub Repository 后，由同一个 Vercel 项目自动重新部署。

## 视频说明

原始视频 `assets/user-guide.mp4` 体积超过 GitHub 普通仓库单文件限制，暂不提交到仓库。正式部署时建议使用压缩后的 Web 版本视频，或将视频放到 Vercel Blob / OSS / CDN 后在页面中引用 HTTPS 地址。
