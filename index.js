/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import '~/locales/index'

AppRegistry.registerComponent(appName, () => App)
