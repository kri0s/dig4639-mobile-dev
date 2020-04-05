import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./components/HomeScreen";
import OrderScreen from "./components/OrderScreen";
import LoginScreen from "./components/LoginScreen";

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Order: {screen: OrderScreen},
  Login: {screen: LoginScreen}
});

const App = createAppContainer(MainNavigator);

export default App;
