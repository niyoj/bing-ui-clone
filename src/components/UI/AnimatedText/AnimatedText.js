import { motion } from "framer-motion";

const AnimatedText = (props) => {
	const text = props.value;

	return (
		<p>
			{text.split("").map((character, index) => {
				return (
					<motion.span
						initial={{ opacity: 0, x: 10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.0625, delay: (index * 0.0625) }}
					>
						{character}
					</motion.span>
				);
			})}
		</p>
	);
};

export default AnimatedText;
