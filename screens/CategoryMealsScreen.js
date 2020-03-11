import React from 'react';
import { View, Text, Button, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = props => {
  const catId = props.route.params.categoryId;

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button title="See Details" onPress={() => {
        props.navigation.navigate("MealDetail")
      }} />
      <Button title="Go Back" onPress={() => {
        props.navigation.pop()
      }} />
    </View>
  )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.route.params.categoryId;

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default CategoryMealsScreen;