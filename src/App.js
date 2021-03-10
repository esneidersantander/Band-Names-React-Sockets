import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";

const connetctSocketServer =()=>{
	const socket = io('http://localhost:8080',
	{
		transports:['websocket']
	});
	return socket;
}


function App() {

	const [socket] = useState(connetctSocketServer());
	const [online, setOnline] = useState(false);

	useEffect(() => {
		setOnline(socket.connected)
	}, [socket])

	useEffect(() => {
		socket.on('connect',()=>{
			setOnline(true)
		})		
	}, [socket])
	useEffect(() => {
		socket.on('disconnect',()=>{
			setOnline(false)
		})		
	}, [socket])

    return (
        <div className="container">
            <div class="alert">
				<p>
					Service status:
					{
						online
							? <span className="text-success">Online</span>
							: <span className="text-danger">Offline</span> 
					}
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
