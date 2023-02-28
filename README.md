# Vue 3 + TypeScript + Vite

### 初始化项目 
- vite 官网 npm create vite  vue vue-ts
- 安装依赖
```
npm i
npm i vue-router@next vuex@next axios 
```
### 启动项目
配置 package.json
```js
"scripts": {
    "dev": "vite --host",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview"
  },
```
npm run dev

### 项目准备
- 新建一个用户片段 -> 设置 -> User Snippets -> vue.json
```
"vue3.0 for Vue": {
    "prefix": "vue3",
    "body": [
        "<template>",
        "    <div class=\"$1$TM_FILENAME_BASE-container\">",
        "        $TM_FILENAME_BASE",
        "    </div>",
        "</template>",
        "",
        "<script lang='ts' setup></script>",
        "",
        "<style lang='less' scoped>",
        "    .clu-$TM_FILENAME_BASE-container {",
        "        color: purple;",
        "    }",
        "",
        "</style>",
        "",
    ],
    "description": "BaseTemp for Vue3.0"
}
```

- 清空 App.vue 使用 vue3 用户片段创建新的
- 安装 less npm i less  这里不需要 less-loader  因为不是使用 webpack 直接刷新页面
- 引入 element plus 去官网 npm install element-plus --save
    - 使用 官方推荐的自动导入 npm install -D unplugin-vue-components unplugin-auto-import
    - 直接 在 App.vue 中 测试使用

### 配置路由






