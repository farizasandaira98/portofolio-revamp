import { motion } from "motion/react";
import type React from "react";
import { useEffect, useRef } from "react";

// Mock Lottie component since we don't have actual Lottie files yet
// In a real implementation, you would use: import Lottie from 'lottie-react';
const MockLottie = ({
	animationData,
	loop = true,
	autoplay = false,
	className = "",
	onComplete,
	...props
}: {
	animationData: any;
	loop?: boolean;
	autoplay?: boolean;
	className?: string;
	onComplete?: () => void;
	[key: string]: any;
}) => {
	const ref = useRef<HTMLDivElement>(null);

	// This is a placeholder - in real implementation, this would be actual Lottie rendering
	return (
		<div ref={ref} className={`w-5 h-5 ${className}`} {...props}>
			{/* Placeholder SVG that mimics Lottie behavior */}
			<svg viewBox="0 0 24 24" className="w-full h-full">
				{animationData.type === "globe" && (
					<motion.g
						animate={{ rotate: autoplay ? 360 : 0 }}
						transition={{
							duration: 2,
							repeat: loop ? Infinity : 0,
							ease: "linear",
						}}
					>
						<circle
							cx="12"
							cy="12"
							r="10"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<path
							d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						/>
					</motion.g>
				)}
				{animationData.type === "sun" && (
					<motion.g
						animate={{ rotate: autoplay ? 360 : 0 }}
						transition={{
							duration: 3,
							repeat: loop ? Infinity : 0,
							ease: "linear",
						}}
					>
						<circle cx="12" cy="12" r="5" fill="currentColor" />
						<motion.g
							animate={{ rotate: autoplay ? -360 : 0 }}
							transition={{
								duration: 4,
								repeat: loop ? Infinity : 0,
								ease: "linear",
							}}
						>
							<path
								d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
								stroke="currentColor"
								strokeWidth="2"
								fill="none"
							/>
						</motion.g>
					</motion.g>
				)}
				{animationData.type === "moon" && (
					<motion.path
						d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
						fill="currentColor"
						animate={{ scale: autoplay ? [1, 1.1, 1] : 1 }}
						transition={{ duration: 2, repeat: loop ? Infinity : 0 }}
					/>
				)}
				{animationData.type === "menu" && (
					<motion.g
						animate={{
							scaleX: autoplay ? [1, 0.8, 1] : 1,
							opacity: autoplay ? [1, 0.7, 1] : 1,
						}}
						transition={{ duration: 0.6, repeat: loop ? Infinity : 0 }}
					>
						<line
							x1="3"
							y1="6"
							x2="21"
							y2="6"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<line
							x1="3"
							y1="12"
							x2="21"
							y2="12"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<line
							x1="3"
							y1="18"
							x2="21"
							y2="18"
							stroke="currentColor"
							strokeWidth="2"
						/>
					</motion.g>
				)}
				{animationData.type === "close" && (
					<motion.g
						animate={{ rotate: autoplay ? [0, 180, 360] : 0 }}
						transition={{ duration: 0.8, repeat: loop ? Infinity : 0 }}
					>
						<line
							x1="18"
							y1="6"
							x2="6"
							y2="18"
							stroke="currentColor"
							strokeWidth="2"
						/>
						<line
							x1="6"
							y1="6"
							x2="18"
							y2="18"
							stroke="currentColor"
							strokeWidth="2"
						/>
					</motion.g>
				)}
			</svg>
		</div>
	);
};

// Language Toggle Animation
export const LanguageToggleLottie: React.FC<{
	isActive: boolean;
	isDark: boolean;
	language: string;
}> = ({ isActive, isDark, language }) => {
	const animationData = {
		type: "globe",
		// In real implementation, this would be actual Lottie JSON data
		// lightMode: require('./animations/globe-light.json'),
		// darkMode: require('./animations/globe-dark.json'),
	};

	return (
		<div className="flex items-center gap-1">
			<motion.div
				animate={{
					rotate: isActive ? 360 : 0,
					scale: isActive ? 1.1 : 1,
				}}
				transition={{
					rotate: { duration: 0.8, ease: "easeInOut" },
					scale: { duration: 0.2 },
				}}
			>
				<MockLottie
					animationData={animationData}
					loop={false}
					autoplay={isActive}
					className={`transition-colors duration-300 ${
						isDark
							? "text-cyan-400 hover:text-purple-400"
							: "text-blue-600 hover:text-purple-600"
					}`}
				/>
			</motion.div>
			<motion.span
				className={`text-sm transition-colors duration-300 ${
					isDark ? "text-cyan-400" : "text-blue-600"
				}`}
				animate={{
					scale: isActive ? 1.05 : 1,
					color: isActive ? (isDark ? "#a855f7" : "#9333ea") : undefined,
				}}
				transition={{ duration: 0.2 }}
			>
				{language.toUpperCase()}
			</motion.span>
		</div>
	);
};

// Theme Toggle Animation
export const ThemeToggleLottie: React.FC<{
	theme: "light" | "dark";
	isTransitioning: boolean;
}> = ({ theme, isTransitioning }) => {
	const sunAnimationData = {
		type: "sun",
		// lightMode: require('./animations/sun.json'),
	};

	const moonAnimationData = {
		type: "moon",
		// darkMode: require('./animations/moon.json'),
	};

	return (
		<motion.div
			animate={{
				rotate: isTransitioning ? 180 : 0,
				scale: isTransitioning ? 1.2 : 1,
			}}
			transition={{ duration: 0.6, ease: "easeInOut" }}
			className="relative w-5 h-5"
		>
			<motion.div
				animate={{
					opacity: theme === "light" ? 0 : 1,
					scale: theme === "light" ? 0.5 : 1,
					rotate: theme === "light" ? -90 : 0,
				}}
				transition={{ duration: 0.4, ease: "easeInOut" }}
				className="absolute inset-0"
			>
				<MockLottie
					animationData={moonAnimationData}
					loop={false}
					autoplay={isTransitioning && theme === "dark"}
					className="text-purple-400 hover:text-cyan-400 transition-colors duration-300"
				/>
			</motion.div>

			<motion.div
				animate={{
					opacity: theme === "dark" ? 0 : 1,
					scale: theme === "dark" ? 0.5 : 1,
					rotate: theme === "dark" ? 90 : 0,
				}}
				transition={{ duration: 0.4, ease: "easeInOut" }}
				className="absolute inset-0"
			>
				<MockLottie
					animationData={sunAnimationData}
					loop={false}
					autoplay={isTransitioning && theme === "light"}
					className="text-blue-500 hover:text-purple-500 transition-colors duration-300"
				/>
			</motion.div>
		</motion.div>
	);
};

// Menu Toggle Animation
export const MenuToggleLottie: React.FC<{
	isOpen: boolean;
	isTransitioning: boolean;
	isDark: boolean;
}> = ({ isOpen, isTransitioning, isDark }) => {
	const menuAnimationData = {
		type: "menu",
		// hamburger: require('./animations/hamburger.json'),
	};

	const closeAnimationData = {
		type: "close",
		// close: require('./animations/close.json'),
	};

	return (
		<motion.div
			animate={{
				rotate: isTransitioning ? (isOpen ? 180 : -180) : 0,
				scale: isTransitioning ? 1.1 : 1,
			}}
			transition={{ duration: 0.4, ease: "easeInOut" }}
			className="relative w-6 h-6"
		>
			<motion.div
				animate={{
					opacity: isOpen ? 0 : 1,
					scale: isOpen ? 0.5 : 1,
					rotate: isOpen ? 90 : 0,
				}}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				className="absolute inset-0"
			>
				<MockLottie
					animationData={menuAnimationData}
					loop={false}
					autoplay={isTransitioning && !isOpen}
					className={`transition-colors duration-300 ${
						isDark
							? "text-cyan-400 hover:text-purple-400"
							: "text-blue-600 hover:text-purple-600"
					}`}
				/>
			</motion.div>

			<motion.div
				animate={{
					opacity: isOpen ? 1 : 0,
					scale: isOpen ? 1 : 0.5,
					rotate: isOpen ? 0 : -90,
				}}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				className="absolute inset-0"
			>
				<MockLottie
					animationData={closeAnimationData}
					loop={false}
					autoplay={isTransitioning && isOpen}
					className={`transition-colors duration-300 ${
						isDark
							? "text-purple-400 hover:text-cyan-400"
							: "text-purple-600 hover:text-blue-600"
					}`}
				/>
			</motion.div>
		</motion.div>
	);
};

// Floating Animation Wrapper for enhanced effects
export const FloatingLottieWrapper: React.FC<{
	children: React.ReactNode;
	isActive: boolean;
}> = ({ children, isActive }) => {
	return (
		<motion.div
			animate={{
				y: isActive ? [-2, 2, -2] : 0,
				scale: isActive ? [1, 1.05, 1] : 1,
			}}
			transition={{
				y: {
					duration: 2,
					repeat: isActive ? Infinity : 0,
					ease: "easeInOut",
				},
				scale: {
					duration: 0.4,
					repeat: isActive ? Infinity : 0,
					repeatType: "reverse",
					ease: "easeInOut",
				},
			}}
		>
			{children}
		</motion.div>
	);
};
