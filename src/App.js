import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";

function App() {
    return (
        <div className="container">
            <div class="alert">
				<p>
					Service status:
					<span className="text-success">Online</span>
					<span className="text-danger">Offline</span>
				</p>
			</div>
			<h1>BandNames</h1>
			<hr/>
			<div class="row">
				<div class="col-8">
					<BandList/>
				</div>
				<div class="col-4">
					<BandAdd/>
				</div>
			</div>
        </div>
    );
}

export default App;
