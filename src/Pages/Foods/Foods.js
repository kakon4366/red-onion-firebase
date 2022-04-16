import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Foods.css";

const Foods = () => {
	return (
		<section className="foods-area">
			<div className="container">
				<div className="food-items">
					<Link to="/breakfast">Breakfast</Link>
					<Link to="/lunch">Lunch</Link>
					<Link to="/dinner">Dinner</Link>
				</div>
				<div>
					<Outlet></Outlet>
				</div>
			</div>
		</section>
	);
};

export default Foods;
