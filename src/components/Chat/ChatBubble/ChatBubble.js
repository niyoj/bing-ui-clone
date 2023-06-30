import { motion, spring } from "framer-motion";

import styles from "./ChatBubble.module.css";
import AnimatedText from "../../UI/AnimatedText/AnimatedText";
import post from "../../../assets/post.png";

const ChatBubble = (props) => {
	const openNewLinkHandler = () => {
		window.open(`http://localhost:3000${String(post)}`, '_blank').focus();
	};

	return (
		<motion.div
			initial={{
				opacity: 0,
				translateX: props.data.from === "bing" ? -50 : 50,
			}}
			animate={{ opacity: 1, translateX: 0 }}
			transition={{ duration: 0.25, type: spring }}
			className={`${styles.chatbubble} ${styles[props.data.from]}`}
		>
			{props.data.from === "bing" ? (
				<AnimatedText value={props.data.message} />
			) : (
				<p>{props.data.message}</p>
			)}
			{props.data.type === "image" && (
				<img src={props.data.img} alt={props.data.alt} onClick={openNewLinkHandler}/>
			)}
		</motion.div>
	);
};

export default ChatBubble;
