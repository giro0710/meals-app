import React from 'react';
import MealList from "../components/MealList";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = props => {

  const catId = props.route.params.categoryId;

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

  // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return (
    <MealList listData={displayedMeals} navigation={props.navigation} />
  )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.route.params.categoryId;

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  }
}

export default CategoryMealsScreen;