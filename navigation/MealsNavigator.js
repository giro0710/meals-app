import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen name="Categories" component={CategoriesScreen} options={CategoriesScreen.navigationOptions} />
        <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} options={CategoryMealsScreen.navigationOptions} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} options={MealDetailScreen.navigationOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MealsNavigator;