# 我们的文档就写这里吧

基于 React、Amaze UI 组件、Webpack（with 'React Hot Loader'）、react-router、Facebook官方Flux实现等开源前端技术开发。

**目前只包含WebApp客户端代码**。

## 目录结构

项目文件放在 `app` 目录下：

```
./app                 // Web App的主目录
  ├── /css            // 三方库的CSS文件
  ├── /fonts          // 三方库的CSS中用到的图标字体文件
  ├── /images         // 三方库的图片，也可以放项目的图片图标
  ├── /js             // 编译后的js文件，自动生成的
  ├── /vender         // 三方库，react等
  ├── dev.html        // 开发环境访问的入口页面
  ├── index.html      // 生产和测试环境访问的入口页面
  └── robots.txt      // 用于搜索引擎SEO，暂时空着先
./src                 // **开发工作目录**
  ├── /components     // App里面公用的组件库都在这里放
  ├── /css            // App里面公用的样式库都放在本目录下的app.css中
  ├── /ctls           // 所有的View Controller都放在这个目录下
  ├── /pages          // react的jsx文件都放在这里，可以细分目录
  ├── /stores         // 放store的目录
  └── main.jsx        // App的主入口文件，所有的入口文件都放到src根目录下
./appconfig.js        // App配置文件，多入口文件和Alias等，给Webpack使用
./index.html          // 开发期测试引导页
./package.json        // NPM management
./README.md           // This file you are reading
./server.js           // 基于Nodejs的开发服务器
./webpack.config.dev.js // Webpack开发期配置文件
./webpack.config.js   // Webpack发布配置文件
```

## 使用说明

**首先你得有装nodejs在你的Mac上，自行脑补使用brew安装nodejs的知识，如果已经安装过了，请先执行**
```
brew doctor
```
**来检查你的brew环境是否正确，如果有warning，请参照warning内容自行调整环境。
之后请执行**
```
brew update
brew upgrade
```
**来更新你的环境到最新版本。**

### 安装依赖：

```
npm install
```
### 启动实时调试：

```
npm start
```

### 静态打包和编译混淆
```
npm run build
```
之后可以启动服务：
```
npm start
```
进入<http://localhost:3000>可以看到两个连接，根据自己需要进入。

***自动更新服务开启不需要先编译，别浪费你的时间！！！***

***

## 开发期资源导航
1. [图标库](http://fontawesome.io/icons/)
2. [React(英文)）](https://facebook.github.io/react/)
3. [React(中文)](http://reactjs.cn/react/docs/getting-started.html)
4. [React Router](https://github.com/reactjs/react-router)
5. [妹子UI](http://amazeui.org/react/components)
6. [If else等控制标签的使用说明](https://www.npmjs.com/package/jsx-control-statements)
7. [superagent(ajax)库使用教程（中文）](https://cnodejs.org/topic/5378720ed6e2d16149fa16bd)
8. [N多React系列组件](https://js.coach/)
