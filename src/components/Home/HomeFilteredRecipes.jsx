// src/components/Home/HomeFilteredRecipes.jsx
import React, { useEffect, useState } from "react";
// import { filterRecipes } from "../../Utils/filterRecipes";
import { filterRecipes } from "../Utils/filterRecipes";
import { recipes } from "../Data/recipes";


 

export default function HomeFilteredRecipes() {
  const [user, setUser] = useState(null);
  const [filtered, setFiltered] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
  });

  useEffect(() => {
    // Get user data from localStorage
    const userData = JSON.parse(localStorage.getItem("healthUser"));

    if (userData) {
      setUser(userData);

      // Filter recipes
      const filteredList = filterRecipes(userData, recipes);

      // Group by meal type
      const grouped = {
        breakfast: filteredList
          .filter((r) => r.meal === "breakfast")
          .slice(0, 3),
        lunch: filteredList.filter((r) => r.meal === "lunch").slice(0, 3),
        dinner: filteredList.filter((r) => r.meal === "dinner").slice(0, 3),
      };

      setFiltered(grouped);
    }
  }, []);

  if (!user)
    return (
      <p style={{ textAlign: "center" }}>
        Please fill the health form to get personalized recipes.
      </p>
    );

  return (
    <div style={{ padding: "2rem" }}>
      <section>
        <h2>🍳 Breakfast</h2>
        {filtered.breakfast.map((item, idx) => (
          <div
            key={idx}
            style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}
          >
            <div style={{ flex: 1 }}>
              <h3>{item.name}</h3>
              <p>
                <strong>Ingredients:</strong> {item.ingredients.join(", ")}
              </p>
              <p>
                <strong>Steps:</strong> {item.steps}
              </p>
            </div>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "150px", height: "auto", borderRadius: "8px" }}
            />
          </div>
        ))}
      </section>

      <section>
        <h2>🍱 Lunch</h2>
        {filtered.lunch.map((item, idx) => (
          <div
            key={idx}
            style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}
          >
            <div style={{ flex: 1 }}>
              <h3>{item.name}</h3>
              <p>
                <strong>Ingredients:</strong> {item.ingredients.join(", ")}
              </p>
              <p>
                <strong>Steps:</strong> {item.steps}
              </p>
            </div>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "150px", height: "auto", borderRadius: "8px" }}
            />
          </div>
        ))}
      </section>

      <section>
        <h2>🍽️ Dinner</h2>
        {filtered.dinner.map((item, idx) => (
          <div
            key={idx}
            style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}
          >
            <div style={{ flex: 1 }}>
              <h3>{item.name}</h3>
              <p>
                <strong>Ingredients:</strong> {item.ingredients.join(", ")}
              </p>
              <p>
                <strong>Steps:</strong> {item.steps}
              </p>
            </div>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "150px", height: "auto", borderRadius: "8px" }}
            />
          </div>
        ))}
      </section>
    </div>
  );
}
