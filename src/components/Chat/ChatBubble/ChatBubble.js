import styles from "./ChatBubble.module.css";

const ChatBubble = (props) => {
	return (
		<div className={`${styles.chatbubble} ${styles[props.from]}`}>
			<p>{props.msg}</p>
		</div>
	);
};

export default ChatBubble;
