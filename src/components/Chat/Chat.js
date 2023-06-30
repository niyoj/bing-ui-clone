import Footer from "./Footer/Footer";
import Chats from "./Chats/Chats";

import styles from "./Chat.module.css";
import { useState } from "react";
import Welcome from "./Welcome/Welcome";

const Chat = (props) => {
	const [isGenerating, setIsGenerating] = useState(false);

	return (
		<section className={styles["chat__wrapper"]}>
			<Welcome />

			<Chats messages={props.chats} />

			{isGenerating && <Footer />}
		</section>
	);
};

export default Chat;
