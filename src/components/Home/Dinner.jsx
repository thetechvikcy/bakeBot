import React from "react";

const dinnerRecipes = [
  {
    name: "Spaghetti Bolognese",
    ingredients: "Spaghetti, Ground Beef, Tomato Sauce",
    steps: "Boil pasta and cook meat sauce.",
    image:
      //   "https://www.allrecipes.com/thmb/J8KvERHZi-NlfEUMicI96IkZKqE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21353-spaghetti-sauce-with-ground-beef-mfs_004-1b4a1e4df30e42fda04d2f82df0c16fa.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfPQm7rQl6CZgtacDlZ6_E9XW8Y8Cc9Kg3Q&s",
  },
  {
    name: "Grilled Salmon",
    ingredients: "Salmon, Lemon, Garlic",
    steps: "Grill salmon with seasonings.",
    image:
      //   "https://www.allrecipes.com/thmb/dTxM40G-mTiFLxgDsG2Pl9qlFTc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/12720-grilled-salmon-DDMFS-4x3-01-7f934ff05fdf4d2d835a20e650f499e1.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/how-to-grill-salmon-recipe1-1655870645.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
  },
  {
    name: "Stir-Fried Tofu & Veggies",
    ingredients: "Tofu, Bell Peppers, Soy Sauce",
    steps: "Stir-fry with sauces and serve hot.",
    image:
      //   "https://www.allrecipes.com/thmb/PGsDxReNYsN3LqenEK5aPR2xzX4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229960-TofuStirFry-mfs-3X4-0518-07487544bc4d43fa9a98aa269278e441.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpnHf_CbqUXbDtB9puaQRaiQYQN3LTggvC6w&s",
  },
];

export default function Dinner() {
  return (
    <section>
      <h2>🍽️ Dinner</h2>
      {dinnerRecipes.map((item, idx) => (
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
