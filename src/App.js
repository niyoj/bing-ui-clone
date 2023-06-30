import React, { useState } from "react";
import Header from "./components/UI/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Chat from "./components/Chat/Chat";

const App = () => {
	const [chatMsg, setChatMsg] = useState([]);

	const msgAddHandler = (msg) => {
		setChatMsg((prev) => {
			return [
				...prev,
				{
					from: "user",
					message: msg,
				},
			];
		});
	};

	return (
		<React.Fragment>
			<Header />
			<Chat chats={chatMsg} />
			<SearchBar onNewMsg={msgAddHandler} />
		</React.Fragment>
	);
};

export default App;
