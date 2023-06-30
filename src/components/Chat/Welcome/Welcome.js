import { motion } from "framer-motion";
import styles from "./Welcome.module.css";

import bing from "./assets/bing.png";

const Welcome = () => {
	return (
		<motion.main
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5, delay: 2.5 }}
			className={styles.hero}
		>
			<img src={bing} alt="logo of microsoft bing" />
			<h1>Welcome to the new Bing</h1>
			<p>Your AI-powered copilot for the web</p>
		</motion.main>
	);
};

export default Welcome;
