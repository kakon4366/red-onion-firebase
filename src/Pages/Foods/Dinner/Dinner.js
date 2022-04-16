import React, { useEffect, useState } from "react";
import Food from "../Food/Food";

const Dinner = () => {
	const [foods, setFoods] = useState([]);

	useEffect(() => {
		fetch("dinner.json")
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

export default Dinner;
