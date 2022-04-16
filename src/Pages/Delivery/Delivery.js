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
