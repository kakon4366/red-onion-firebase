import React from "react";
import "./Food.css";

const Food = ({ food }) => {
	const { name, img, price, quote } = food;
	return (
		<div className="food">
			<img width="200px" src={img} alt="" />
			<h3>{name}</h3>
			<p>{quote}</p>
			<h2>
				$<span>{price}</span>
			</h2>
		</div>
	);
};

export default Food;
