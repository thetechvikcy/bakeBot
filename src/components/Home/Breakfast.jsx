import React from "react";

const breakfastRecipes = [
  {
    name: "Pancakes",
    ingredients: "Flour, Milk, Eggs",
    steps: "Mix and fry.",
    image:
      "https://www.allrecipes.com/thmb/FE0PiuuR0Uh06uVh1c2AsKjRGbc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_002-0e249c95678f446291ebc9408ae64c05.jpg",
  },
  {
    name: "Avocado Toast",
    ingredients: "Bread, Avocado",
    steps: "Toast and spread.",
    image:
      "https://www.allrecipes.com/thmb/H1mSgOExKFdto3PWLfC9aTgJmlI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11699506-avocado-toast-4x3-ea45b882fb0c454a9ca31647d4fd3c01.jpg",
  },
  {
    name: "Oatmeal",
    ingredients: "Oats, Milk, Fruits",
    steps: "Boil and serve.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhSNVMjtYpbFY8PeetR_-Xm345WCWGkIbkQ&s",
  },
];

export default function Breakfast() {
  return (
    <section>
      <h2>🍳 Breakfast</h2>
      {breakfastRecipes.map((item, idx) => (
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
