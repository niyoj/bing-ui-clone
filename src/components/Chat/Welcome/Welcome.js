import styles from "./Welcome.module.css";

import bing from "./assets/bing.png";

const Welcome = () => {
	return (
		<main className={styles.hero}>
			<img src={bing} alt="logo of microsoft bing" />
			<h1>Welcome to the new Bing</h1>
			<p>Your AI-powered copilot for the web</p>
		</main>
	);
};

export default Welcome;
