import { useState, useRef } from "react";
import { motion } from "framer-motion";

import { BsChatText, BsMic, BsPinAngle } from "react-icons/bs";
import { FaBroom } from "react-icons/fa";

import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
	const [textareaActive, setTextareaActive] = useState(false);
	const [textareaLength, setTextareaLength] = useState(0);
	const [textareaHeight, setTextareaHeight] = useState(24);

	const prompt = useRef();

	const textareaActivateHandler = (event) => {
		setTextareaActive(true);

		if (event.type === "blur" && textareaLength === 0) {
			setTextareaActive(false);
			setTextareaHeight(24);
		}
	};

	const textEntryHandler = () => {
		setTextareaLength(prompt.current.value.length);

		// resizing the height of textarea
		const textarea = document.getElementById("textarea");
		setTextareaHeight(
			prompt.current.value.length === 0 ? 24 : textarea.scrollHeight
		);
	};

	const enterHandler = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			event.target.blur();
			props.onNewMsg(prompt.current.value);

			// not recomended but we are doing anyways
			prompt.current.value = "";
			textEntryHandler();
			setTextareaActive(false);
			setTextareaHeight(24);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, translateY: 100, translateX: "-50%" }}
			animate={{ opacity: 1, translateY: 0 }}
			transition={{ duration: 0.5, delay: 3 }}
			className={styles["search-bar__wrapper"]}
		>
			<div className={styles.broom}>{<FaBroom />}</div>

			<div
				className={`${styles["search-bar"]} ${
					textareaActive && styles["search-bar--active"]
				}`}
			>
				<div className={styles["search-bar__main"]}>
					<BsChatText
						className={styles["search-bar__icon"]}
						style={{ color: "#666666" }}
					/>
					<textarea
						id="textarea"
						placeholder="Ask me anything..."
						onClick={textareaActivateHandler}
						onBlur={textareaActivateHandler}
						onChange={textEntryHandler}
						onKeyDown={enterHandler}
						ref={prompt}
						style={{ height: `${textareaHeight}px` }}
					/>
					<BsMic className={styles["search-bar__icon"]} />
				</div>

				<div className={styles["search-bar__dropdown"]}>
					<div>
						<span>{textareaLength}</span>/2000
					</div>
					<div style={{ fontSize: "2.5rem" }}>
						<BsPinAngle />
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default SearchBar;
