import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import PaymentScreen from './screens/PaymentScreen';

const App = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  CheckoutScreen: {screen: CheckoutScreen},
  PaymentScreen: {screen: PaymentScreen}
});

export default App;
