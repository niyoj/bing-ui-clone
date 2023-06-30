import { FaPauseCircle } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<button>
				<FaPauseCircle
					style={{ fontSize: "2.5rem", verticalAlign: "middle" }}
				/>
				<span style={{ marginLeft: "1rem", verticalAlign: "middle" }}>
					Stop Responding
				</span>
			</button>
		</footer>
	);
};

export default Footer;
