import { motion } from "motion/react";
import type React from "react";
import { useEffect, useRef } from "react";

// Static logo component without animations
const StaticLogo = ({
	className = "",
	isDark = false,
	...props
}: {
	className?: string;
	isDark?: boolean;
	[key: string]: any;
}) => {
	return (
		<div className={`${className}`} {...props}>
			{/* Static RIJA Logo */}
			<div className="relative flex items-center justify-center">
				<svg viewBox="0 0 120 40" className="w-full h-full">
					{/* Background gradient */}
					<defs>
						<linearGradient
							id="staticLogoGradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="100%"
						>
							<stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
							<stop offset="50%" stopColor="currentColor" stopOpacity="0.05" />
							<stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
						</linearGradient>
						<linearGradient
							id="staticTextGradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
						>
							<stop offset="0%" stopColor={isDark ? "#06b6d4" : "#3b82f6"} />
							<stop offset="50%" stopColor={isDark ? "#3b82f6" : "#8b5cf6"} />
							<stop offset="100%" stopColor={isDark ? "#8b5cf6" : "#06b6d4"} />
						</linearGradient>
					</defs>

					{/* Background shape */}
					<rect
						x="2"
						y="2"
						width="116"
						height="36"
						rx="8"
						fill="url(#staticLogoGradient)"
						stroke="url(#staticTextGradient)"
						strokeWidth="1"
					/>

					{/* RIJA Text */}
					<text
						x="60"
						y="26"
						textAnchor="middle"
						fontSize="18"
						fontWeight="bold"
						fontFamily="system-ui, sans-serif"
						fill="url(#staticTextGradient)"
					>
						RIJA
					</text>

					{/* Static decorative elements */}
					<circle
						cx="15"
						cy="8"
						r="2"
						fill="url(#staticTextGradient)"
						opacity="0.6"
					/>
					<circle
						cx="105"
						cy="16"
						r="2"
						fill="url(#staticTextGradient)"
						opacity="0.6"
					/>
					<circle
						cx="195"
						cy="24"
						r="2"
						fill="url(#staticTextGradient)"
						opacity="0.6"
					/>
				</svg>
			</div>
		</div>
	);
};

// Main Logo Component
export const LogoLottie: React.FC<{
	isActive?: boolean;
	isDark?: boolean;
	size?: "sm" | "md" | "lg" | "xl";
	className?: string;
}> = ({ isActive = false, isDark = false, size = "md", className = "" }) => {
	const sizeClasses = {
		sm: "w-16 h-6",
		md: "w-24 h-8",
		lg: "w-32 h-12",
		xl: "w-40 h-16",
	};

	return (
		<div className={`${sizeClasses[size]} ${className}`}>
			<StaticLogo
				isDark={isDark}
				className={`transition-colors duration-300 ${
					isDark
						? "text-cyan-400 hover:text-purple-400"
						: "text-blue-600 hover:text-purple-600"
				}`}
			/>
		</div>
	);
};

// Plain Logo Component (no text, just simple elements)
const PlainLogo = ({
	className = "",
	isDark = false,
	...props
}: {
	className?: string;
	isDark?: boolean;
	[key: string]: any;
}) => {
	return (
		<div className={`${className}`} {...props}>
			<svg viewBox="0 0 40 40" className="w-full h-full">
				<defs>
					<linearGradient
						id="plainGradient"
						x1="0%"
						y1="0%"
						x2="100%"
						y2="100%"
					>
						<stop offset="0%" stopColor={isDark ? "#06b6d4" : "#3b82f6"} />
						<stop offset="50%" stopColor={isDark ? "#3b82f6" : "#8b5cf6"} />
						<stop offset="100%" stopColor={isDark ? "#8b5cf6" : "#06b6d4"} />
					</linearGradient>
				</defs>

				{/* Simple geometric shape */}
				<circle
					cx="20"
					cy="20"
					r="16"
					fill="none"
					stroke="url(#plainGradient)"
					strokeWidth="2"
				/>

				{/* Inner elements */}
				<circle
					cx="20"
					cy="20"
					r="6"
					fill="url(#plainGradient)"
					opacity="0.6"
				/>
				<circle cx="14" cy="14" r="2" fill="url(#plainGradient)" />
				<circle cx="26" cy="14" r="2" fill="url(#plainGradient)" />
				<circle cx="20" cy="26" r="2" fill="url(#plainGradient)" />
			</svg>
		</div>
	);
};

// Navigation Logo Component (completely plain, no animations)
export const NavLogoLottie: React.FC<{
	isDark?: boolean;
	onClick?: () => void;
}> = ({ isDark = false, onClick }) => {
	return (
		<div className="cursor-pointer w-8 h-8" onClick={onClick}>
			<PlainLogo isDark={isDark} className="transition-colors duration-300" />
		</div>
	);
};

// Section Header Logo Component (larger version)
export const SectionLogoLottie: React.FC<{
	isDark?: boolean;
	size?: "sm" | "md" | "lg" | "xl";
	className?: string;
}> = ({ isDark = false, size = "sm", className = "" }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className={className}
		>
			<LogoLottie isDark={isDark} size={size} className="mx-auto" />
		</motion.div>
	);
};
