import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logo from "../assets/logo-2.png";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [mealDetails, setMealDetails] = useState(null);
  const { group } = useParams(); // Access the group parameter from the URL
  const navigate = useNavigate();

  useEffect(() => {
    if (group) {
      fetchMeals(group); // Fetch meals using the group (e.g., "Egg")
    }
  }, [group]);

  const fetchMeals = (ingredient) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals || []);
      });
  };

  // Fetch meal details for the selected meal
  const getMealRecipe = async (mealId) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await response.json();
    if (data.meals) {
      setMealDetails(data.meals[0]);
    }
  };

  const closeRecipeModal = () => {
    setMealDetails(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <div className="max-w-screen-xl mx-auto p-8 bg-white text-center shadow-md">
        <div onClick={() => { navigate("/") }} className='font-semibold text-3xl flex justify-center items-center text-black rounded-2xl gap-1 bg-gray-100'>
          <img src={logo} alt="logo" width={60} height={60} />
          FITNESS SCANNER
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Your Search Results for {group}:</h2>
          <div
            id="meal"
            className={`grid gap-6 ${meals.length === 0 ? 'text-orange-600 font-semibold' : 'sm:grid-cols-2 lg:grid-cols-3'}`}
          >
            {meals.length > 0 ? (
              meals.map((meal) => (
                <div
                  key={meal.idMeal}
                  className="meal-item border rounded-lg shadow-lg overflow-hidden"
                  onClick={() => getMealRecipe(meal.idMeal)}
                >
                  <div className="meal-img">
                    <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full" />
                  </div>
                  <div className="meal-name p-4">
                    <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
                    <button className="recipe-btn bg-orange-600 text-white py-2 px-4 rounded-full mt-2">
                      Get Recipe
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>Sorry, we didn't find any meal for {group}.</p>
            )}
          </div>
        </div>

        {mealDetails && (
          <div className="fixed inset-0 bg-orange-600 bg-opacity-90 flex items-center justify-center">
            <div className="relative w-11/12 max-w-2xl h-auto max-h-screen overflow-y-auto rounded-lg bg-white p-8 shadow-lg">
              <button
                onClick={closeRecipeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white text-orange-600 rounded-full flex items-center justify-center shadow-md hover:opacity-80"
              >
                <i className="font-normal text-2xl text-black">X</i>
              </button>
              <div className="meal-details-content">
                <h2 className="recipe-title text-2xl font-bold mb-2">{mealDetails.strMeal}</h2>
                <p className="recipe-category text-sm bg-orange-100 text-orange-600 inline-block px-2 py-1 rounded-md mb-4">
                  {mealDetails.strCategory}
                </p>
                <div className="recipe-instruct mb-4">
                  <h3 className="text-lg font-semibold mb-2">Instructions</h3>
                  <p>{mealDetails.strInstructions}</p>
                </div>
                <div className="recipe-meal-img mb-4">
                  <img
                    src={mealDetails.strMealThumb}
                    alt={mealDetails.strMeal}
                    className="w-24 h-24 rounded-full mx-auto"
                  />
                </div>
                <div className="recipe-link text-center">
                  <a
                    href={mealDetails.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 font-bold text-lg hover:underline"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Meals;
