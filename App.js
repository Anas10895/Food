import { createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SerachScreen from './src/Screens/SerachScreen'

const navigator = createStackNavigator({

  Serach: SerachScreen
},
{
  initailRouteName:'Search',
  defaultNavigationOptions:{
    tilte: 'BusinessSearch'
  }
}
);
export default createAppContainer(navigator)