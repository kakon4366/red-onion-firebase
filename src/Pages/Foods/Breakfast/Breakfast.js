import React, { useEffect, useState } from "react";
import Food from "../Food/Food";

const Breakfast = () => {
	const [foods, setFoods] = useState([]);

	useEffect(() => {
		fetch("breakfast.json")
			.then((res) => res.json())
			.then((data) => setFoods(data));
	}, []);

	return (
		<div className="foods-container">
			{foods.map((food) => (
				<Food food={food} key={food.id}></Food>
			))}
		</div>
	);
};

export default Breakfast;
