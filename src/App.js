import React, { useState } from "react";

import Header from "./components/UI/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Chat from "./components/Chat/Chat";

const answerPrompts = [
	{
		from: "bing",
		message: "Everything good on my side. What about you?",
	},
	{
		from: "bing",
		message: "My name is Bing the guru.",
	},
];

const App = () => {
	const [chatMsg, setChatMsg] = useState([]);
	const [chatMsgId, setChatMsgId] = useState(0);

	const msgAddHandler = (msg) => {
		setChatMsg((prev) => {
			return [
				...prev,
				{
					id: chatMsgId,
					from: "user",
					message: msg,
				},
				{
					id: chatMsgId,
					...answerPrompts[chatMsgId],
				},
			];
		});

		setChatMsgId((prev) => {
			return prev + 1;
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
