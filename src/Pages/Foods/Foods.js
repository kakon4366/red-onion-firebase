import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../Shared/CustomLink/CustomLink";
import "./Foods.css";

const Foods = () => {
	return (
		<section className="foods-area">
			<div className="container">
				<div className="food-items">
					<CustomLink to="/breakfast">Breakfast</CustomLink>
					<CustomLink to="/lunch">Lunch</CustomLink>
					<CustomLink to="/dinner">Dinner</CustomLink>
				</div>
				<div>
					<Outlet></Outlet>
				</div>
				<div className="checkout-btn-area">
					<button className="checkout-btn">Checkout Your Food</button>
				</div>
			</div>
		</section>
	);
};

export default Foods;
