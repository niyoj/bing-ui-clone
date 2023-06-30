import { motion, spring } from "framer-motion";

import styles from "./ChatBubble.module.css";
import AnimatedText from "../../UI/AnimatedText/AnimatedText";

const ChatBubble = (props) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				translateX: props.from === "bing" ? -50 : 50,
			}}
			animate={{ opacity: 1, translateX: 0 }}
			transition={{ duration: 0.25, type: spring }}
			className={`${styles.chatbubble} ${styles[props.from]}`}
		>
			{props.from === "bing" ? (
				<AnimatedText value={props.msg} />
			) : (
				<p>{props.msg}</p>
			)}
		</motion.div>
	);
};

export default ChatBubble;
