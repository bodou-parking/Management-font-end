## 必看

监控停车位的后台管理系统的前端，框架已经搞定。
后续需求和需要的接口俺还不知道后端写了啥，不过俺后面随时待命，第一时间就改出来
react版本更新到18，把库的版本调整了一下,剔除了原有的一些过时和冲突的东西
暂时没有太多全局数据进行管理，俺的想法是全局状态主要去管理登录信息，然后进行调接口什么的

### 版本要求
node版本低于17即可

### 技术栈

`React@18 + React-Router@5.1.1 + Redux@4.0.4 + Antd@3.1.1 + Axios@0.19.0`

> `Create React App`    脚手架工具快速搭建项目结构

> `react-loadable@5.5.0`    路由懒加载

> `react-redux@7.1.1`     配合 `Redux` 更舒心

> `animate.css@3.7.2`     页面动画展示

> `braft-editor@2.3.8`    富文本插件

> `echarts@4.4.0`   数据可视化

> `nprogress@0.2.0`     顶部加载条

> `screenfull@5.0.0`    全屏插件

> `prettier@1.18.2`    代码风格统一

### 基本功能

停车场，车位，收支管理，用户管理

### 项目结构

```
├── public                   # 不参与编译的资源文件
├── src                      # 主程序目录
│   ├── api                     # axios 封装
│   ├── assets                  # 资源文件
│   │   ├── font                    # 字体文件
│   │   └── images                  # 图片资源
│   ├── components              # 全局公共组件
│   │   ├── CustomBreadcrumb        # 面包屑导航
│   │   └── CustomMenu              # menu 菜单
│   ├── contatiners             # 页面结构组件
│   ├── routes                  # 路由目录
│   ├── store                   # redux 配置
│   ├── style                   # 样式目录
│   ├── utils                   # 工具类
│   ├── views                   # UI 页面
│   ├── APP.js                  # App.js
│   └── index.js                # index.js
├── .prettierrc.js           # 代码规范
├── config-overrides.js      # antd 样式按需加载
```

### 使用方法

```npm
// 安装依赖
yarn

// 启动
yarn start

// 打包
yarn build

```

