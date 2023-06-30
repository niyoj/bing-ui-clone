import { motion } from "framer-motion";
import { FaPauseCircle } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<motion.footer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className={styles.footer}
		>
			<button>
				<FaPauseCircle
					style={{ fontSize: "2.5rem", verticalAlign: "middle" }}
				/>
				<span style={{ marginLeft: "1rem", verticalAlign: "middle" }}>
					Stop Responding
				</span>
			</button>
		</motion.footer>
	);
};

export default Footer;
