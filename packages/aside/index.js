import PAside from './Aside.vue'

//全局注册组件--可以单独引入
PAside.install = (app) => {
  app.component(PAside.name,PAside)
}

export const Aside = PAside
export default PAside