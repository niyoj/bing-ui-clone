import { BsChatText, BsMic, BsPinAngle } from "react-icons/bs";
import { FaBroom } from "react-icons/fa";

import styles from "./SearchBar.module.css";
import { useState, useRef } from "react";

const SearchBar = () => {
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
		setTextareaHeight(prompt.current.value.length === 0 ? 24: textarea.scrollHeight);
	};

	return (
		<div className={styles["search-bar__wrapper"]}>
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
						ref={prompt}
						style={{height: `${textareaHeight}px`}}
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
		</div>
	);
};

export default SearchBar;
