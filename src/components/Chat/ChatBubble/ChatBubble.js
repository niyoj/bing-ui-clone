import { motion, spring } from "framer-motion";

import styles from "./ChatBubble.module.css";

const ChatBubble = (props) => {
	return (
		<motion.div
			initial={{ opacity: 0, translateY: 50 }}
			animate={{ opacity: 1, translateY: 0 }}
			transition={{ duration: 0.25, type: spring }}
			className={`${styles.chatbubble} ${styles[props.from]}`}
		>
			<p>{props.msg}</p>
		</motion.div>
	);
};

export default ChatBubble;
