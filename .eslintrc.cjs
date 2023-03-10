module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'standard',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        'vue',
        '@typescript-eslint',
    ],
    rules: {
        indent: [2, 4], // js 4个空格缩进
        'vue/html-indent': [2, 4], // html 4个空格缩进
        'vue/multi-word-component-names': 0,
        'comma-dangle': [2, 'always-multiline'], // 对象 数据 分行显示的 结尾必须加 ','
    },
}
