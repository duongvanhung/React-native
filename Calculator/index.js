/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Calculator from './src/component/calculator';

AppRegistry.registerComponent(appName, () => Calculator);
