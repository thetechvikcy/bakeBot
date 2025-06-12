import React from "react";

const lunchRecipes = [
  {
    name: "Grilled Cheese Sandwich",
    ingredients: "Bread, Cheese, Butter",
    steps: "Grill until golden brown.",
    image:
      //   "https://www.allrecipes.com/thmb/8C9rQsPtflOTFQH8vWPaDdZ3fgg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23891-GrilledCheeseSandwich-mfs_002-3x4-59d778f39e4c4603a76c81cfcb40e6e0.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFA37blaD-uRY6QUHO7FzkBvtKTVNbdFVT9g&s",
  },
  {
    name: "Chicken Caesar Salad",
    ingredients: "Chicken, Lettuce, Caesar Dressing",
    steps: "Toss together and serve chilled.",
    image:
      //   "https://www.allrecipes.com/thmb/tRG7AG5Za_XPgEOBXQk5YcLJ1Ow=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2461063-9d37924de2c640b490e8bece0418c3a1.jpg",
      "https://healthyfitnessmeals.com/wp-content/uploads/2020/05/instagram-In-Stream_Square___Low-carb-Caesar-salad-4.jpg",
  },
  {
    name: "Veggie Wrap",
    ingredients: "Tortilla, Hummus, Mixed Vegetables",
    steps: "Wrap ingredients and serve.",
    image:
      //   "https://www.allrecipes.com/thmb/jKIlE3nEVvRgqqRYsAnJ-oFIk1s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229156-Veggie-Wraps-DDMFS-4x3-1-536b1f116c9e4d13ab56ad357b1f134b.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJ8xTCpVqmAgJjmhe_4E0wkSoewZxs1g8zA&s",
  },
];

export default function Lunch() {
  return (
    <section>
      <h2>🍔 Lunch</h2>
      {lunchRecipes.map((item, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "1rem",
            padding: "1rem",
            border: "1px solid #eee",
            borderRadius: "10px",
            marginBottom: "1.5rem",
            backgroundColor: "#fdfdfd",
          }}
        >
          <div style={{ flex: 1 }}>
            <h3>{item.name}</h3>
            <p>
              <strong>Ingredients:</strong> {item.ingredients}
            </p>
            <p>
              <strong>Steps:</strong> {item.steps}
            </p>
          </div>
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "150px",
              height: "auto",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </section>
  );
}
