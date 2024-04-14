import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Components/home-screen';
import Login from '../Components/sign-in';
import Register from '../Components/register';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
