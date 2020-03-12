import React from 'react';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories" screenOptions={{
      gestureEnabled: true, headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
    }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={CategoriesScreen.navigationOptions}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={CategoryMealsScreen.navigationOptions}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={MealDetailScreen.navigationOptions}
      />
    </Stack.Navigator>
  );
}

const FavoritesNavitor = () => {
  return (
    <Stack.Navigator initialRouteName="Categories" screenOptions={{
      gestureEnabled: true, headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.secondary : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.secondary
    }}
    >
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={FavoritesScreen.navigationOptions}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={MealDetailScreen.navigationOptions}
      />
    </Stack.Navigator>
  );
}

const Tab = Platform.OS === "android" ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const TabNavigator = props => {
  let navigator =
    <Tab.Navigator
      initialRouteName="Meals"
      tabBarOptions={{
        activeTintColor: Colors.secondary
      }}
    >
      {props.children}
    </Tab.Navigator>

  if (Platform.OS === "android") {
    navigator =
      <Tab.Navigator
        initialRouteName="Meals"
        shifting={true}
        barStyle={{
          backgroundColor: Colors.primary
        }}
      >
        {props.children}
      </Tab.Navigator>
  }
  return navigator
}

const MealsFavTabNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator>
        <Tab.Screen
          name="Meals"
          component={MealsNavigator}
          options={{
            tabBarIcon: (tabInfo) => {
              return <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
            },
            tabBarColor: Colors.primary
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesNavitor}
          options={{
            tabBarIcon: (tabInfo) => {
              return <Ionicons name="ios-star" size={25} color={tabInfo.color} />
            },
            tabBarColor: Colors.secondary
          }}
        />
      </TabNavigator>
    </NavigationContainer>
  )
}

export default MealsFavTabNavigator;