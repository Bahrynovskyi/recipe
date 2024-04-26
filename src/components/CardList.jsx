/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import Card from "./Card";

// export const recipes = [
//   {
//     id: 1,
//     name: "Poky Bowls",
//     image:
//       "https://somuchfoodblog.com/wp-content/uploads/2021/06/rainbow-poke3-1365x2048.jpg",
//     tag: "Poky Bowl",
//     numberOfMinutes: 50,
//   },
//   {
//     id: 2,
//     name: "Chocolate Banana Cake",
//     image:
//       "https://bakerbynature.com/wp-content/uploads/2021/02/Chocolate-Banana-Cake-with-Espresso-Fudge-Frosting-1-of-1.jpg",
//     tag: "Sweet Tooth",
//     numberOfMinutes: 150,
//   },
//   {
//     id: 3,
//     name: "Shawarma",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCp9ypHZCBooEiEO0judtDfejlKo-7j6pRx9d47U-FA&s",
//     tag: "Chicken",
//     numberOfMinutes: 50,
//   },
//   {
//     id: 4,
//     name: "Kanafeh",
//     image:
//       "https://i.pinimg.com/736x/1c/49/f1/1c49f13151a7b25cb1fd8bab1ddb105d.jpg",
//     tag: "Romantic Dinner",
//     numberOfMinutes: 30,
//   },
// ];

const CardList = ({ recipes }) => {
  return (
    <section className="cards">
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
};

export default CardList;
