import Footer from "./Footer/Footer";
import styles from "./Chat.module.css";
import { useState } from "react";
import Welcome from "./Welcome/Welcome";

const DUMMY_CHAT = [
	{
		from: "user",
		message: "Hey what are you doing bro?",
	},
	{
		from: "bing",
		message: "Nothing bro just chilling",
	},
];

const Chat = (props) => {
	const [isGenerating, setIsGenerating] = useState(true);

	return (
		<section className={styles["chat__wrapper"]}>
			<Welcome />
			{isGenerating && <Footer />}
		</section>
	);
};

export default Chat;
