import PContainer from './Container.vue'

//全局注册组件--可以单独引入
PContainer.install = (app) => {
  app.component(PContainer.name,PContainer)
}

export const Container = PContainer
export default PContainer