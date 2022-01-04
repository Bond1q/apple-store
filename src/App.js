import Header from "./components/Header";
import IphonesPage from "./pages/IphonesPage";
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductPage from "./pages/ProductPage";
import Bag from "./pages/Bag";


function App() {

	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path='/iphones'><IphonesPage /></Route>
				<Route path='/iphones/iphone'><ProductPage /></Route>
				<Route path='/bag'><Bag /></Route>
				<Route path='/'><Redirect to='/iphones' /></Route>
			</Switch>

		</div>
	);
}

export default App;
