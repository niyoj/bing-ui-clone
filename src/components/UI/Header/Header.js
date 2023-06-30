import logo from "./assets/logo.png";
import bing from "./assets/bing.png";

import { AiOutlineSearch } from "react-icons/ai";
import { BsFillChatTextFill } from "react-icons/bs";

import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<ul className={styles.headerList}>
				<li>
					<img
						src={logo}
						alt="logo of microsoft bing"
						className={styles.img}
					/>
				</li>
				<li className={styles["header__list--sub"]}>
					<span>
						<AiOutlineSearch color="#174ae4" size="15px" /> Search
					</span>
					<span>
						<BsFillChatTextFill color="#174ae4" size="15px" /> Chat
					</span>
				</li>
			</ul>

			<main className={styles.hero}>
				<img src={bing} alt="logo of microsoft bing" />
				<h1>Welcome to the new Bing</h1>
				<p>Your AI-powered copilot for the web</p>
			</main>
		</header>
	);
};

export default Header;
