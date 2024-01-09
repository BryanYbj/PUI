import PHeader from './Header.vue'

//全局注册组件--可以单独引入
PHeader.install = (app) => {
  app.component(PHeader.name,PHeader)
}

export const Header = PHeader
export default PHeader