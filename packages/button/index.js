import PButton from './Button.vue'

//全局注册组件--可以单独引入
PButton.install = (app) => {
  app.component(PButton.name,PButton)
}

export const Button = PButton
export default PButton