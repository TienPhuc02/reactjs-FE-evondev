import React from "react";
import "./App.css";
const App = () => {
  const reviews = [
    {
      name: "Evondev",
      image: "",
      stars: 5,
      premiumUser: true,
      date: "05/09/2022",
    },
    {
      name: "CharkaUI",
      image: "",
      stars: 4,
      premiumUser: false,
      date: "03/08/2022",
    },
    {
      name: "React Query",
      image: "",
      stars: 3,
      premiumUser: false,
      date: "04/08/2022",
    },
  ];
  const displayReview = (
    totalReviews: number,
    name: string,
    premium?: boolean
  ) => {
    return (
      <>
        Review total <strong>{totalReviews}</strong> | Last reviewed by{" "}
        <strong>{name}</strong> {premium ? "⭐️" : null}
      </>
    );
  };
  //optional:không bắt buộc
  //name?:parameter này không bắt buộc
  return (
    <div>
      <div className="review">
        <div className="review-image">
          <img src="https://source.unsplash.com/random" alt="" />
        </div>
        <div className="review-info">
          {displayReview(
            reviews.length,
            reviews[0].name,
            reviews[0].premiumUser
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
