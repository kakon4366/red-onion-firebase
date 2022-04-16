import React, { useEffect, useState } from "react";
import DeliveryItem from "./DeliveryItem/DeliveryItem";
import "./Delivery.css";

const Delivery = () => {
	const [delivery, setDelivery] = useState([]);

	useEffect(() => {
		fetch("delivery.json")
			.then((res) => res.json())
			.then((data) => setDelivery(data));
	}, []);

	return (
		<section className="delivery-area">
			<div className="container">
				<div className="delivery-content">
					<h2>Why you choose us</h2>
					<p>
						Barton waited twenty always repair in within we do. An
						delighted offending curiosity my is dashwoods at. Boy
						prosperous increasing surrounded.
					</p>
				</div>
				<div className="delivery-container">
					{delivery.map((deliveryItem) => (
						<DeliveryItem
							key={deliveryItem.id}
							deliveryItem={deliveryItem}
						></DeliveryItem>
					))}
				</div>
			</div>
		</section>
	);
};

export default Delivery;
