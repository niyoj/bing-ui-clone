import Footer from "./Footer/Footer";
import Chats from "./Chats/Chats";

import styles from "./Chat.module.css";
import Welcome from "./Welcome/Welcome";

const Chat = (props) => {
	return (
		<section className={styles["chat__wrapper"]}>
			<Welcome />

			<Chats messages={props.chats} />

			{props.generating && <Footer />}
		</section>
	);
};

export default Chat;
