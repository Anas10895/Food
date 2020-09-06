import { createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SerachScreen from './src/Screens/SerachScreen'
import ResultsShowScreen from './src/Screens/ResultesShowScreen'
const navigator = createStackNavigator({

  Serach: SerachScreen,
  ResultsShow: ResultsShowScreen
},
{
  initailRouteName:'Search',
  defaultNavigationOptions:{
    tilte: 'BusinessSearch'
  }
}
);
export default createAppContainer(navigator)