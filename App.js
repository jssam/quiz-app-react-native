import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import home from './src/screen/home';
import quiz from './src/screen/quiz';
import announcement from './src/screen/announcement';
import exam from './src/screen/exam';
import ques from './src/screen/ques';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const TTab = createMaterialTopTabNavigator();
  function Home() {
    return (<>
    <View style={{backgroundColor:"red",alignContent:"center"}}>

<Text style={{textAlign:"center",fontSize:20,marginTop:10,marginBottom:10,fontWeight:"bold",}}>
TRENDING NEWS</Text>
</View>
       
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            India: 'home',
            Profile: 'account',
          };
    
          return (
            <MaterialCommunityIcons
              name={icons[route.name]}
              color={color}
              size={size}
            />
          );
        },
      })}
    >
      <TTab.Screen name="India" component={home} />
      <TTab.Screen name="Subject knowledge" component={quiz} />
      <TTab.Screen name="Tech" component={quiz} />
      <TTab.Screen name="Challenges" component={quiz} />
      <TTab.Screen name="Hello" component={quiz} />

    </Tab.Navigator>
    </>);
  }
  function Exam() {
    return (<>
       
<Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="Home" component={exam} />
    <Stack.Screen name="Ques" component={ques} />
  </Stack.Navigator>
    </>);
  }
  return (

    <NavigationContainer>
 

    <Tab.Navigator   initialRouteName="home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
        
           <Tab.Screen name="Quiz" component={Exam} options={{
          tabBarLabel: 'Exam',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="News" component={Home}
      options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>
         

   
          <Tab.Screen name="Announcemen" component={announcement} options={{
          tabBarLabel: 'Announcement',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="volume-high" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  

  </NavigationContainer>
  );
}