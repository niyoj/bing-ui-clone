import React, { useEffect, useState } from "react";

import Header from "./components/UI/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Chat from "./components/Chat/Chat";

import post from "./assets/post.png";

const answerPrompts = [
	{
		from: "bing",
		message:
			"Hey there! So much is happening in the tech world! Did you hear about the latest breakthrough in artificial intelligence? It's mind-blowing how machines are getting smarter every day!",
	},
	{
		from: "bing",
		message:
			"Well, I recently attended the Microsoft Build conference virtually, and let me tell you, it was an incredible experience! The event was packed with exciting announcements and insights into the future of technology.",
	},
	{
		from: "bing",
		message:
			"Absolutely! The after-party has already kicked off at King's College! It's the perfect place for networking, celebrating, and having a great time. Shall we join them now?",
	},
	{
		from: "bing",
		type: "image",
		message:
			"Great! Here's the link you can use to join the event and be part of the Microsoft Build After Party fun!",
		img: post,
		alt: "Microsoft Build Afte party poster",
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
			}, answerPrompts[bingId].message.length * 0.0625 * 1000 + 1500);
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
