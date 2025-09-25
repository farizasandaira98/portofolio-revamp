import { motion } from "motion/react";

export function AstronomerCharacter() {
	return (
		<motion.div
			className="relative w-40 h-40 mx-auto mb-8 z-50"
			initial={{ y: 20, opacity: 0 }}
			animate={{
				y: [0, -10, 0],
				opacity: 1,
				rotate: [-2, 2, -2],
			}}
			transition={{
				y: {
					duration: 3,
					repeat: Infinity,
					ease: "easeInOut",
				},
				opacity: {
					duration: 1,
				},
				rotate: {
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut",
				},
			}}
		>
			{/* Astronomer helmet/head */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 rounded-full shadow-2xl border-4 border-white/20">
				{/* Helmet reflection */}
				<div className="absolute top-3 left-3 w-8 h-8 bg-white/40 rounded-full blur-sm" />

				{/* Visor */}
				<div className="absolute inset-3 bg-gradient-to-br from-blue-500/90 to-purple-600/90 rounded-full shadow-inner">
					{/* Eyes looking around */}
					<motion.div
						className="absolute top-1/3 left-1/4 w-3 h-3 bg-cyan-200 rounded-full shadow-lg"
						animate={{
							x: [0, 3, -3, 0],
							y: [0, 1, -1, 0],
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
					<motion.div
						className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-200 rounded-full shadow-lg"
						animate={{
							x: [0, -3, 3, 0],
							y: [0, 1, -1, 0],
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
				</div>
			</div>

			{/* Body */}
			<div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg shadow-md">
				{/* Control panel */}
				<div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex gap-1">
					<div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
					<div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-300" />
					<div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse delay-700" />
				</div>
			</div>

			{/* Telescope */}
			<motion.div
				className="absolute -top-4 -right-8 w-12 h-3 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full shadow-sm"
				animate={{
					rotate: [10, -10, 10],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			>
				<div className="absolute right-0 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
			</motion.div>

			{/* Floating particles around astronomer */}
			<motion.div
				className="absolute -inset-8"
				animate={{ rotate: 360 }}
				transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
			>
				{[...Array(6)].map((_, i) => (
					<motion.div
						key={`particle-${Math.random().toString(36).substr(2, 9)}-${i}`}
						className="absolute w-1 h-1 bg-cyan-400 rounded-full"
						style={{
							top: `${20 + Math.sin((i * Math.PI) / 3) * 40}%`,
							left: `${50 + Math.cos((i * Math.PI) / 3) * 40}%`,
						}}
						animate={{
							scale: [1, 1.5, 1],
							opacity: [0.5, 1, 0.5],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							delay: i * 0.3,
							ease: "easeInOut",
						}}
					/>
				))}
			</motion.div>
		</motion.div>
	);
}
