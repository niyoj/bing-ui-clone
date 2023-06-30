import React, { useEffect, useState } from "react";

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
	const [replyBing, setReplyBing] = useState(false);
	const [bingId, setBingId] = useState(0);
	const [isGenerating, setIsGenerating] = useState(false);

	const msgAddHandler = (msg) => {
		setChatMsg((prev) => {
			return [
				...prev,
				{
					id: chatMsgId,
					from: "user",
					message: msg,
				},
			];
		});

		setChatMsgId((prev) => {
			return prev + 1;
		});

		setReplyBing(true);
	};

	useEffect(() => {
		if (replyBing) {
			setTimeout(() => {
				setIsGenerating(true);
				setChatMsg((prev) => {
					return [
						...prev,
						{
							id: chatMsgId,
							...answerPrompts[bingId],
						},
					];
				});

				setBingId((prev) => prev + 1);
				setChatMsgId((prev) => prev + 1);
				setReplyBing(false);
			}, 1000);

			setTimeout(() => {
				setIsGenerating(false);
			}, answerPrompts[bingId].message.length * 0.0625 * 1000+1500);
		}
	}, [replyBing]);

	return (
		<React.Fragment>
			<Header />
			<Chat chats={chatMsg} generating={isGenerating} />
			<SearchBar onNewMsg={msgAddHandler} />
		</React.Fragment>
	);
};

export default App;
