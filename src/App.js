import React from "react";
import Header from "./components/UI/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Chat from "./components/Chat/Chat";

const App = () => {
	return (
		<React.Fragment>
			<Header />
			<Chat />
			<SearchBar />
		</React.Fragment>
	);
};

export default App;
