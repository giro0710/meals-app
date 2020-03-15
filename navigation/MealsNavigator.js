import React from "react";
import { Text, Platform } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FilterScreen from "../screens/FiltersScreen";

const defaultStackNavigationOptions = {
  gestureEnabled: true,
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : ""
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold"
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans"
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
};

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={defaultStackNavigationOptions}
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
};

const FavoritesNavitor = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerStyle: {
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
};

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const TabNavigator = props => {
  let navigator = (
    <Tab.Navigator
      initialRouteName="Meals"
      tabBarOptions={{
        labelStyle: {
          fontFamily: "open-sans"
        },
        activeTintColor: Colors.secondary
      }}
    >
      {props.children}
    </Tab.Navigator>
  );

  if (Platform.OS === "android") {
    navigator = (
      <Tab.Navigator
        initialRouteName="Meals"
        shifting={true}
        barStyle={{
          backgroundColor: Colors.primary
        }}
      >
        {props.children}
      </Tab.Navigator>
    );
  }
  return navigator;
};

const MealsFavTabNavigator = () => {
  return (
    <TabNavigator>
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarIcon: tabInfo => {
            return (
              <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
            );
          },
          tabBarColor: Colors.primary,
          tabBarLabel:
            Platform.OS === "android" ? (
              <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
            ) : (
              "Meals"
            )
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesNavitor}
        options={{
          tabBarIcon: tabInfo => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.color} />;
          },
          tabBarColor: Colors.secondary,
          tabBarLabel:
            Platform.OS === "android" ? (
              <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
            ) : (
              "Favorites"
            )
        }}
      />
    </TabNavigator>
  );
};

const FiltersNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavigationOptions}>
      <Stack.Screen
        name="Filters"
        component={FilterScreen}
        options={FilterScreen.navigationOptions}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const MaiNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: Colors.secondary,
          labelStyle: {
            fontFamily: "open-sans-bold"
          }
        }}
      >
        <Drawer.Screen
          name="MealsFav"
          component={MealsFavTabNavigator}
          options={{
            drawerLabel: "Meals"
          }}
        />
        <Drawer.Screen
          name="Filters"
          component={FiltersNavigator}
          options={{
            drawerLabel: "Filters"
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MaiNavigator;
