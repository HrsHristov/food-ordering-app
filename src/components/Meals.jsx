import { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
    const [loadedMeals, setLoadedMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch("http://localhost:3000/meals");

            if (!response.ok) {
                //...
            }

            const meals = await response.json();
            setLoadedMeals(meals);
        };

        fetchMeals();
    }, []);

    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <MealItem meal={meal} />
            ))}
        </ul>
    );
};

export default Meals;
