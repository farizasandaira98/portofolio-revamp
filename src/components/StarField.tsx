import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Star {
	id: number;
	x: number;
	y: number;
	size: number;
	opacity: number;
	animationDelay: number;
}

export function StarField() {
	const [stars, setStars] = useState<Star[]>([]);

	useEffect(() => {
		const generateStars = () => {
			const newStars: Star[] = [];
			for (let i = 0; i < 150; i++) {
				newStars.push({
					id: i,
					x: Math.random() * 100,
					y: Math.random() * 100,
					size: Math.random() * 3 + 1,
					opacity: Math.random() * 0.8 + 0.2,
					animationDelay: Math.random() * 3,
				});
			}
			setStars(newStars);
		};

		generateStars();
	}, []);

	return (
		<div className="fixed inset-0 overflow-hidden pointer-events-none">
			{stars.map((star) => (
				<motion.div
					key={star.id}
					className="absolute bg-white rounded-full"
					style={{
						left: `${star.x}%`,
						top: `${star.y}%`,
						width: `${star.size}px`,
						height: `${star.size}px`,
					}}
					initial={{ opacity: 0 }}
					animate={{
						opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: 3 + Math.random() * 2,
						repeat: Infinity,
						delay: star.animationDelay,
						ease: "easeInOut",
					}}
				/>
			))}

			{/* Cosmic nebula effects */}
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-indigo-900/20" />
			<div className="absolute inset-0 bg-gradient-to-tl from-cyan-600/10 via-transparent to-purple-600/10" />
		</div>
	);
}
