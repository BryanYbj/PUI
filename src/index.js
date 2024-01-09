const {version,name} = require('../package.json');
export * from '../packages'
import * as Components from '../packages'
const install = (app) => {
  Object.keys(Components)?.forEach(key =>app.use(Components[key]))
}
export default {
  version,
  name,
  install,
  ...Components
}