import React from "react";
import "./Banner.css";
import bannerImg from "../../../images/bannerbackground.png";

const Banner = () => {
	return (
		<section className="banner-area">
			<img src={bannerImg} alt="" />
			<div className="search-field">
				<input type="text" placeholder="Search food items" />
				<button className="singup-btn search-btn">Search</button>
			</div>
		</section>
	);
};

export default Banner;
