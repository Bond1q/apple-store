import { getIphoneFromDB } from "./api/api";
import Header from "./components/Header";
import IphonesPage from "./pages/IphonesPage";


function App() {

	return (
		<div className="App">
			<Header />
			<IphonesPage />
		</div>
	);
}

export default App;
