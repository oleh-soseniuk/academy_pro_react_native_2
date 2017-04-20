import { TabNavigator } from 'react-navigation';
import  Calculations from './Calculations';
import  History  from './History';

const Tabs = TabNavigator({
    Calculations: {
      screen: Calculations
    },
    History: {
      screen: History
    },
  }, {
    tabBarOptions: {
      activeTintColor: '#000', 
    }
  },{
      initialRouteName: 'History'
});

export default Tabs;