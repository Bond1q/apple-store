import Header from "./components/Header";
import IphonesPage from "./pages/IphonesPage";
import { Redirect, Route, Switch } from 'react-router-dom';
import IphoneProductPage from "./pages/IphoneProductPage";
import Bag from "./pages/Bag";
import IpadsPage from "./pages/IpadsPage";
import IpadProductPage from "./pages/IpadProductPage";
import MacsPage from "./pages/MacsPage";

function App() {

	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path='/iphones'><IphonesPage /></Route>
				<Route path='/iphones/iphone'><IphoneProductPage /></Route>
				<Route exact path='/ipads'><IpadsPage /></Route>
				<Route path='/ipads/ipad'><IpadProductPage /></Route>
				<Route path='/bag'><Bag /></Route>
				<Route exact path='/macbooks'><MacsPage /></Route>
				<Route path='/'><Redirect to='/iphones' /></Route>
			</Switch>
		</div>
	);
}

export default App;
