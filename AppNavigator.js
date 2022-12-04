import { createStackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Second from './screens/SecondScreen';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Friends: { screen: Second},
});

export default AppNavigator;