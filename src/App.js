import { Route, Routes } from "react-router-dom";
import "./App.css";
import Breakfast from "./Pages/Foods/Breakfast/Breakfast";
import Dinner from "./Pages/Foods/Dinner/Dinner";
import Lunch from "./Pages/Foods/Lunch/Lunch";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home></Home>}>
					<Route path="/" element={<Breakfast />}></Route>
					<Route path="/breakfast" element={<Breakfast />}></Route>
					<Route path="/lunch" element={<Lunch />}></Route>
					<Route path="/dinner" element={<Dinner />}></Route>
				</Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
