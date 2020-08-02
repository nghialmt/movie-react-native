import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Auth from './auth';
import Main from './main';
import { Loading } from '../screens';

const nav = createSwitchNavigator({
    auth: Auth,
    main: Main,
    loading: Loading,
}, {
    initialRouteName: 'loading',
})

export default createAppContainer(nav)