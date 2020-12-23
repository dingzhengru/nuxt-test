# nuxt-test

## SEO 方案

參考: https://segmentfault.com/a/1190000019623624

其中兩種方案可於 nuxt 執行

### SSR (伺服器渲染)

- 環境和部署要求更高，需要設置一個 node.js server 來即時渲染頁面，配合 nginx 也只能反代理過去 node.js server 上
- 伺服器負擔較大，高流量的情況下，請準備相應的服務器負載，並明智地採用緩存策略
- 因前後端有共用的代碼，開發過程的坑較多

### Jamstack (靜態化)

會在打包時就 render 好所有靜態路徑、指定的動態路徑

優點:

- 純靜態文件，訪問速度超快
- 對比 SSR，不涉及到服務器負載方面問題
- 靜態網頁不宜遭到黑客攻擊，安全性更高

缺點:

- 如果動態路由參數多的話不適用 (拍賣、商城)

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# build for production and launch server
npm run build
npm run start

# generate static project
npm run generate
```

## layout

等同於原本的 App.vue

## plugin

執行於實例化 vue 應用程序之前，所要執行的 js 檔案
主要就是用於 main.js 的替代物，本來在 main.js 的內容，都改寫在各個 plugin 中

## middleware

呈現一個頁面或一組頁面之前運行的自定義功能，可以於各自的頁面引入
或是於 nuxt.config.js 引入全局的，就會於進入每個頁面前調用(通常用於驗證頁面)

## router

### meta

於 pages 各個 .vue 中添加

```js
export default {
  meta: {
    auth: true,
  },
};
```

### beforeEach、afterEach

可以使用 middleware 實現 (實現頁面前執行)

nuxt.config.js

```js
export default {
  router: {
    middleware: 'router-permission',
  },
};
```

middleware/router-permission.js

```js
export default ({ route, redirect }) => {
  //* route.matched 取不到 meta
  console.log('[middleware][router-permission]', route.meta);

  const isLoggedIn = false;
  const auth = route.meta[0].auth;

  if (auth === true && !isLoggedIn) {
    redirect({ name: 'index' });
  } else if (auth === true && isLoggedIn) {
    redirect({ name: 'index' });
  }
};
```

## scss

下載指定套件就好，參考: https://zh.nuxtjs.org/docs/2.x/configuration-glossary/configuration-css/

`npm install --save-dev sass sass-loader fibers`

## nuxt.config.js

### proxy

參考: https://zh.nuxtjs.org/faq/http-proxy/

### asyncData

參考: https://nuxtjs.org/docs/2.x/features/data-fetching
參考: https://ithelp.ithome.com.tw/articles/10206412

是一個 hook，asyncData 在執行順序中，排在頁面渲染(render)前，回傳值會被塞回 data
