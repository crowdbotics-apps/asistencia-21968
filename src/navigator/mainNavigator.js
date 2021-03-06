import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile161990Navigator from '../features/UserProfile161990/navigator';
import Maps161971Navigator from '../features/Maps161971/navigator';
import Settings161949Navigator from '../features/Settings161949/navigator';
import Settings161934Navigator from '../features/Settings161934/navigator';
import NotificationList161933Navigator from '../features/NotificationList161933/navigator';
import Maps161932Navigator from '../features/Maps161932/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile161990: { screen: UserProfile161990Navigator },
Maps161971: { screen: Maps161971Navigator },
Settings161949: { screen: Settings161949Navigator },
Settings161934: { screen: Settings161934Navigator },
NotificationList161933: { screen: NotificationList161933Navigator },
Maps161932: { screen: Maps161932Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
