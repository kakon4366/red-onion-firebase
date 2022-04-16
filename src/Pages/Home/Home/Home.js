import React from "react";
import Delivery from "../../Delivery/Delivery";
import Foods from "../../Foods/Foods";
import Banner from "../Banner/Banner";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Foods></Foods>
			<Delivery></Delivery>
		</div>
	);
};

export default Home;
