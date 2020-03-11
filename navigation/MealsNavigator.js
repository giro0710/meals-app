import React from 'react';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}

export default MealsNavigator;