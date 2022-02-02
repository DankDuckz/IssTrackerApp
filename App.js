import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Home'
import IssTracker from './screens/IssTracker'
import MeteorScreen from './screens/MeteorScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "IssTracker" screenOptions = {{headerShown:true}}>
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "IssTracker" component = {IssTracker}/>
        <Stack.Screen name = "Meteor" component = {MeteorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
