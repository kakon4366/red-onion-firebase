import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import "./Header.css";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const Header = () => {
	return (
		<header className="header-area">
			<div className="container">
				<nav className="nav-bar">
					<div className="logo">
						<img height="40px" src={logo} alt="" />
					</div>
					<ul className="menu-items">
						<Link to="/cart">
							<ShoppingCartIcon width="30px" className="" />
						</Link>
						<Link to="/login">Login</Link>
						<Link className="singup-btn" to="/sign-up">
							Sing Up
						</Link>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
