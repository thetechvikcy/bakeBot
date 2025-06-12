// src/utils/filterRecipes.js

export function filterRecipes(user, recipes) {
  return recipes.filter((recipe) => {
    // Match meal type (breakfast, lunch, dinner)
    if (
      !recipe.meal ||
      !["breakfast", "lunch", "dinner"].includes(recipe.meal.toLowerCase())
    ) {
      return false;
    }

    // Match diet preference
    if (
      user.diet &&
      recipe.diet &&
      recipe.diet.toLowerCase() !== user.diet.toLowerCase()
    ) {
      return false;
    }

    // Filter out recipes with ingredients the user is allergic to
    if (user.allergies && user.allergies.length > 0) {
      const allergyList = user.allergies.map((a) => a.toLowerCase());
      if (
        recipe.ingredients &&
        recipe.ingredients.some((ing) =>
          allergyList.includes(ing.toLowerCase())
        )
      ) {
        return false;
      }
    }

    // Filter based on medical conditions (optional)
    if (user.medicalConditions && recipe.unsuitableFor) {
      for (let condition of Object.keys(user.medicalConditions)) {
        if (
          user.medicalConditions[condition] &&
          recipe.unsuitableFor.includes(condition.toLowerCase())
        ) {
          return false;
        }
      }
    }

    return true;
  });
}
