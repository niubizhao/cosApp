# Vue3-Vite-Vant3 移动端H5框架方案

基于Vue3 + Vite + Vant + Sass+ viewport适配方案 + Axios封装，构建手机端模板脚手架

[参考1](https://juejin.cn/post/7012946831877341191)

[参考2](https://github.com/buqiyuan/vite-vue3-h5)

目录说明
```
vue3-vant3-vite-h5
 ├── REANDME.md
 ├── package-lock.json
 ├── package.json
 ├── .eslintrc.js           # 定义eslint规则
 ├── .eslintignore          # 忽略eslint检查的目录或文件
 ├── .prettierrc.js         # 定义perttier规则
 ├── vite.config.js
 ├── index.html
 └── src
     ├── main.js
     ├── store              # VueX
     │   └── index.js
     ├── utils
     │   ├── Storage.js     # 统一操作储存、cookie
     │   └── http
     │       └── index.js
     ├── views
     │   ├── Home.vue
     │   └── 404.vue
     ├── router             # Vue Router
     │   └── index.js
     └── App.vue
```

## 引入eslint提高代码质量
配置见 .eslintrc.js

## prettier统一代码风格
配置见 .preitterrc.js

## autoprefixer
样式自动加前缀

## 关于自适应方案
本项目采用的是 vw + rem  

html 的 font-size 使用 vw 单位，css 使用 rem 单位，文本大小可选择使用 px

> 为什么不采用纯`vw`方案(`postcss-px-to-viewport`)  
> 因为`postcss-px-to-viewport`目前无法限制px转换vm时参考的最大值、最小值  
> https://github.com/evrone/postcss-px-to-viewport/issues/64

- 如果实际项目是跟随屏幕大小变化则可以采用纯`vw`方案
- 如果实际项目在屏幕变大时body有一个最大宽度，则无法使用纯`vw`方案,因为`font-size`会变得非常大

> 详细知识指路：[掘金：自适应布局方案](https://juejin.cn/post/6867874227832225805#heading-8)

设置缩放最大最小宽度等：  
`/vue3-vant3-vite-h5/src/styles/vw-rem/_util.scss`

开发过程中如有自适应需求，可使用工具函数将px转为rem, 例：
```
img {
  display: block;
  width: 100%;
  height: px2rem(480);
  padding: 30px 60px;
  pointer-events: none;
  background-color: #fff;
  box-sizing: border-box;
}
```
