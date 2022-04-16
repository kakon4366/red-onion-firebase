import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer-area">
			<div className="container">
				<div className="footer-items">
					<div className="footer-logo">
						<Link to="/">
							<img height="40px" src={footerLogo} alt="" />
						</Link>
					</div>
					<div className="footer-menu">
						<span>About online food</span>
						<span>Read our blog</span>
						<span>Sign up to deliver</span>
						<span>Add your restaurant</span>
					</div>
					<div className="footer-menu">
						<span>Get help</span>
						<span>Read FAQs</span>
						<span>View all cities</span>
						<span>Restaurant near me</span>
					</div>
				</div>
				<div className="copyright-message">
					<small>Copyright &copy; 2022 Red Onion Firebase</small>
					<div className="trams-conditions">
						<a href="/privacy-policy">Privacy Policy</a>
						<a href="/trams-of-use">Trams of Use</a>
						<a href="/pricing">Pricing</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
