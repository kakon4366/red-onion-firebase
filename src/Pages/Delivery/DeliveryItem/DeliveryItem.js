import React from "react";
import { Link } from "react-router-dom";
import "./DeliveryItem.css";
import { ArrowRightIcon } from "@heroicons/react/outline";

const DeliveryItem = ({ deliveryItem }) => {
	const { img, title, icon, text } = deliveryItem;
	return (
		<div className="delivery-item">
			<img width="100%" src={img} alt="" />
			<div className="delivery-details">
				<div>
					<img src={icon} alt="" />
				</div>
				<div className="delivery-detail">
					<h3>{title}</h3>
					<p>{text}</p>
					<Link to="/">
						See More
						<ArrowRightIcon className="info-arrow"></ArrowRightIcon>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DeliveryItem;
