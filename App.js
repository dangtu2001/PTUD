import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginScreen from './screens/login/LoginScreen';
import SignUpScreen from './screens/login/SignUpScreen';
import ListHome from './screens/createHome/ListHome';
import Step1 from './screens/createHome/Step1';
import Step2 from './screens/createHome/Step2';
import Step3 from './screens/createHome/Step3';
import Step4 from './screens/createHome/Step4';
import Home from './screens/home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }} >
        <Stack.Group>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="signUp" component={SignUpScreen} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="listHome" component={ListHome} key='listHome' />
          <Stack.Screen name="step1" component={Step1} />
          <Stack.Screen name="step2" component={Step2} />
          <Stack.Screen name="step3" component={Step3} />
          <Stack.Screen name="step4" component={Step4} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="home" component={Home} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
});
