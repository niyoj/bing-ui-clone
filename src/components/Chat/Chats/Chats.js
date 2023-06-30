import { useEffect, useRef } from "react";
import ChatBubble from "../ChatBubble/ChatBubble";
import styles from "./Chats.module.css";

const Chats = (props) => {
	const scrollRef = useRef();

	useEffect(() => {
        scrollRef.current.scrollIntoView();
	});

	return (
		<section className={styles["chats-wrapper"]}>
			<div className={styles.chats}>
				{props.messages.map((msg) => {
					return <ChatBubble from={msg.from} msg={msg.message} />;
				})}
			</div>
			<div ref={scrollRef}></div>
		</section>
	);
};

export default Chats;
