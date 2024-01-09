import PMain from './Main.vue'

//全局注册组件--可以单独引入
PMain.install = (app) => {
  app.component(PMain.name,PMain)
}

export const Main = PMain
export default PMain