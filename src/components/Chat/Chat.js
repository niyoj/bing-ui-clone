import Footer from "./Footer/Footer";
import styles from "./Chat.module.css";
import { useState } from "react";

const Chat = (props) => {
	const [isGenerating, setIsGenerating] = useState(false);
	return (
		<section className={styles["chat__wrapper"]}>
			THis is a chatbox
			{isGenerating && <Footer />}
		</section>
	);
};

export default Chat;
