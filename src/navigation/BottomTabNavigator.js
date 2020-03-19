import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import DailyScreen from '../screens/DailyScreen';
import CareScreen from '../screens/CareScreen';
import NewspaperScreen from '../screens/NewspaperScreen';

import Colors from '../constants/Colors'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerShown: false });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}   tabBarOptions={{
      activeTintColor: Colors.tabIconSelected,
      inactiveTintColor: Colors.tabIconDefault,
      style: {
        backgroundColor: Colors.tintColor,
        paddingTop: 10,
      },
      keyboardHidesTabBar: true,
    }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Contagio',
          
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-stats" />,
        }}
      />
     
      <BottomTab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: 'Mapa',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-map" />,
        }}
      />
      <BottomTab.Screen
        name="NewspaperScreen"
        component={NewspaperScreen}
        options={{
          title: 'Noticias',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-megaphone" />,
        }}
      />
       <BottomTab.Screen
        name="Daily"
        component={DailyScreen}
        options={{
          title: 'Linha do Tempo',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-clock" />,
        }}
      />
      <BottomTab.Screen
        name="CareScreen"
        component={CareScreen}
        options={{
          title: 'Cuidados',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-medkit" />,
        }}
      />
    </BottomTab.Navigator>
  );
}


