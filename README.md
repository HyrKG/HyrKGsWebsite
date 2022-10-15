# 简介
我个人的前端零基础学习项目，任务驱动学习！不定期更新，平常有工作和学习要做。

> #### ☞ 预览(preview):  <http://hyrkg.cn>

### 欢迎[右上角↗️STAR⭐](https://github.com/HyrKG/HyrKGsWebsite)我的项目，让我们共同学习进步！

# 📃 我的计划 To-do List:
- [ ] 让我的卡片效果也支持夜间模式（还在研究学习scss）
- [ ] vuex，感觉还是要先学学
- [ ] 👾大计划！圆桌(share-table)，通过编号进入同一张圆桌，并实时共享文件，不用下网盘了。
- [x] ~~卡片删除会删到其他卡片，太奇怪了。~~

# 📗 已完成！ Checked List:
- [x] (vue-TransitionGroup) 让我的[🔮playground](http://hyrkg.cn/playground)有炫酷动画
- [x] (vue、js)让组件可以无限增加或自我删除。列表加载组件，而不是直接写到html内！
- [x] (vue、css) 我自己的flex容器组件！
- [x] 🤔有一页用来专门进行学习与玩耍多好。[🔮playground](http://hyrkg.cn/playground)诞生！
- [x] (vue-router) 个人主页不要导航栏，想要单页效果。使用<router-view>配合routes中children实现单页(singleton)与通用页面功能
- [x] (vue-router) 实现导航功能，让导航栏有点真正的用处！
- [x] (vue、js) 尝试点击按钮就增加元素（响应式列表、计算属性、监听组件实现）。现已搬迁到[🔮playground](http://hyrkg.cn/playground)
- [x] (vue) 将我的卡片[VUE组件化](https://cn.vuejs.org/guide/components/registration.html)！
- [x] (css) 优化卡片动画效果，鼠标放上去会悬浮！
- [x] (css) 爆改[element-plus的导航栏](https://element-plus.gitee.io/zh-CN/component/menu.html)成自己的！
- [x] (css) 制作属于我自己的~~flex~~(早期其实是grid，后期才发现)风格样式
- [x] (vue) 兼容夜间模式的logo
- [x] (nginx) 上架到我的服务器！
- [x] 使用vite+vue+element-ui([element-plus-vite-starter](https://github.com/element-plus/element-plus-vite-starter))建立自己的vue项目

# 🏷️ 已覆盖知识点 Covered knowledges:
我没有任何前端开发经验，均是在我实践过程中百度谷歌或者看文档学习。以下都存在于我的网站之中，根据学习路径先后排序，可以参考学习。
### VUE
> 我是直接学的组合式API，熟话说学新不学旧！组件库用的阿里的 [element-plus](https://element-plus.gitee.io/zh-CN/component/menu.html)
> - 💡【响应式基础】reactive(这个我不常用，我直接ref万物)、ref(被ref的对象就变成响应式了)、v-bind(常用)、{{}}
> - 
> - 💡【语法基础】v-if(常用)、v-for(常用)、v-on(常用)、v-model
> - 
> - 💡【计算属性】computed
> - 
> - 💡【组件化】props(常用)、插槽(name、temple。常用)、事件回传[$emit]、透传attributes
> - 
> - 💡【路由管理】vue-router的基础配置(path、redirect、alias、children、component)
> - 
> - 💡【动画】Transition、TransitionGroup
### JavaScript / TypeScript
> - 💡【变量】var、let、const(常用)
> - 
> - 💡【对象基础】array[]、对象{}(我当map用)、万物皆对象(到这就了解为什么ref出来的要value才能用了)
> - 
> - 💡【方法、传参、复用】 import、function(结合万物皆对象可以了解computed原理了)

### CSS / SCSS:
> - 💡【样式基础】
> - - 字体样式： color、font-size、font-family(字体，我直接copy别人的)
> - - 容器样式： background-color、border-radius(圆角)、box-shadow(边框阴影)、border(边框绘制，我通常设计布局时都会打开)
> - 
> - 💡【布局基础】padding(容器内距离调整)、margin(容器外距离调整)、width/height(100%可以自动填满，不然很丑)、max-width/max-height
> - 
> - 💡【响应式(flex)布局，可以让页面兼容手机】display:flex、flex-direction、flex-wrap、justify-content、flex-grow(常用)
> - 
> - 💡【动画基础】transition、transform、伪类(如:hover)
> - 
> - 💡【样式优先级】!import(我的坏习惯：遇事不决就!import)
### HTML
> 好像没啥特别知识点，就是各类标签，基本需要就百度。
> - 会用div划分就行了，div套标签、套语法基本解决大部分事情了。
> - 小技巧！vue的 temple 标签不影响样式！