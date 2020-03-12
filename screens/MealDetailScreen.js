import React from 'react';
import { View, Text, Button, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = props => {
  const mealId = props.route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button title="Go Back to Categories" onPress={() => {
        props.navigation.popToTop();
      }} />
    </View>
  )
}

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      < HeaderButtons HeaderButtonComponent={HeaderButton} >
        <Item title="Favorite" iconName="ios-star" onPress={() => {
          console.log("Mark as favorite!");
        }} />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default MealDetailsScreen;