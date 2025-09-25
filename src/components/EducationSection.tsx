import { Award, Calendar, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export function EducationSection() {
	const { data } = useLanguage();
	const [isTouchDevice, setIsTouchDevice] = useState(false);

	useEffect(() => {
		const checkTouchDevice = () => {
			setIsTouchDevice(
				"ontouchstart" in window || navigator.maxTouchPoints > 0,
			);
		};

		checkTouchDevice();
		window.addEventListener("resize", checkTouchDevice);

		return () => window.removeEventListener("resize", checkTouchDevice);
	}, []);

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring" as const,
				stiffness: 100,
				damping: 15,
			},
		},
	};

	return (
		<section className="h-screen bg-gradient-to-b from-background to-blue-50/20 dark:to-blue-950/20">
			<div className="section-scroll-container h-full overflow-y-auto overflow-x-hidden py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
				<div className="flex flex-col justify-start min-h-full">
					<div className="w-full mx-auto relative max-w-6xl">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="text-center mb-12 sm:mb-16"
						>
							<motion.div
								className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-100 to-purple-100 dark:from-cyan-900/50 dark:to-purple-900/50 mb-6 shadow-lg"
								whileHover={!isTouchDevice ? { scale: 1.1, rotate: 10 } : {}}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
							>
								<GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
							</motion.div>

							<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-center">
								{data.education.title}
							</h2>
							<p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
								{data.education.subtitle}
							</p>
						</motion.div>

						<div className="relative w-full">
							{/* Timeline Line - Mobile: Simple left alignment, Desktop: Center */}
							<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-300/20 via-blue-500 to-purple-500/20 transform md:-translate-x-1/2" />

							<motion.div
								variants={containerVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								className="space-y-8 sm:space-y-10 md:space-y-16"
							>
								{data.education.items.map((education, index) => (
									<motion.div
										key={`education-${education.title}-${index}`}
										variants={itemVariants}
										className={`relative flex items-start ${
											index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
										} flex-col md:items-stretch w-full`}
									>
										{/* Timeline Dot */}
										<motion.div
											className="absolute left-6 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transform -translate-x-1/2 z-10 shadow-lg"
											initial={{ scale: 0 }}
											whileInView={{ scale: 1 }}
											viewport={{ once: true }}
											transition={{ delay: index * 0.2 }}
											whileHover={!isTouchDevice ? { scale: 1.5 } : {}}
										>
											<motion.div
												className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-50"
												animate={{ scale: [1, 1.5, 1] }}
												transition={{ duration: 2, repeat: Infinity }}
											/>
										</motion.div>

										{/* Content Card */}
										<div
											className={`w-full md:w-5/12 pl-16 md:pl-0 pr-4 md:pr-0 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
										>
											<motion.div
												whileHover={
													!isTouchDevice ? { y: -8, scale: 1.03 } : {}
												}
												transition={{
													type: "spring",
													stiffness: 300,
													damping: 20,
												}}
												className="w-full min-w-0 px-2 py-4"
												style={{ transformOrigin: "center center" }}
											>
												<Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-2 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10">
													<CardContent className="p-3 sm:p-4 md:p-6">
														{/* Header */}
														<div className="mb-3 sm:mb-4">
															<motion.h3
																className="text-base sm:text-lg md:text-xl mb-2 leading-tight break-words"
																initial={{ opacity: 0 }}
																whileInView={{ opacity: 1 }}
																transition={{ delay: 0.2 }}
															>
																{education.title}
															</motion.h3>

															<motion.p
																className="text-blue-600 dark:text-blue-400 mb-3 font-medium text-sm sm:text-base break-words"
																initial={{ opacity: 0 }}
																whileInView={{ opacity: 1 }}
																transition={{ delay: 0.3 }}
															>
																{education.institution}
															</motion.p>

															<div className="space-y-1 sm:space-y-0 sm:grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
																<motion.div
																	className="flex items-center gap-1 min-w-0"
																	whileHover={
																		!isTouchDevice ? { scale: 1.05 } : {}
																	}
																>
																	<Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
																	<span className="truncate">
																		{education.period}
																	</span>
																</motion.div>
																{education.gpa && (
																	<motion.div
																		className="flex items-center gap-1 min-w-0"
																		whileHover={
																			!isTouchDevice ? { scale: 1.05 } : {}
																		}
																	>
																		<Award className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
																		<span className="truncate">
																			GPA: {education.gpa}
																		</span>
																	</motion.div>
																)}
															</div>
														</div>

														{/* Description */}
														<motion.p
															className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed break-words"
															initial={{ opacity: 0, y: 10 }}
															whileInView={{ opacity: 1, y: 0 }}
															transition={{ delay: 0.4 }}
														>
															{education.description}
														</motion.p>

														{/* Achievements */}
														{education.achievements && (
															<motion.div
																initial={{ opacity: 0 }}
																whileInView={{ opacity: 1 }}
																transition={{ delay: 0.5 }}
															>
																<h4 className="text-xs sm:text-sm mb-2 text-muted-foreground font-medium">
																	Achievements:
																</h4>
																<div className="flex flex-wrap gap-1.5 sm:gap-2">
																	{education.achievements.map(
																		(achievement, achievementIndex) => (
																			<motion.div
																				key={`achievement-${achievement.replace(/\s+/g, "-").toLowerCase()}`}
																				initial={{ opacity: 0, scale: 0 }}
																				whileInView={{ opacity: 1, scale: 1 }}
																				transition={{
																					delay: 0.6 + achievementIndex * 0.1,
																				}}
																				whileHover={
																					!isTouchDevice ? { scale: 1.05 } : {}
																				}
																			>
																				<Badge
																					variant="secondary"
																					className="text-xs px-2 py-1 break-words"
																				>
																					{achievement}
																				</Badge>
																			</motion.div>
																		),
																	)}
																</div>
															</motion.div>
														)}
													</CardContent>
												</Card>
											</motion.div>
										</div>
									</motion.div>
								))}
							</motion.div>
						</div>

						{/* Floating Elements */}
						<div className="absolute inset-0 pointer-events-none">
							{[...Array(10)].map((_, i) => (
								<motion.div
									key={`floating-element-${i}-${Math.random()}`}
									className="absolute w-1 h-1 bg-blue-500/30 dark:bg-blue-400/30 rounded-full"
									style={{
										left: `${20 + Math.random() * 60}%`,
										top: `${20 + Math.random() * 60}%`,
									}}
									animate={{
										y: [0, -20, 0],
										opacity: [0.3, 1, 0.3],
										scale: [0.5, 1, 0.5],
									}}
									transition={{
										duration: 3 + Math.random() * 2,
										repeat: Infinity,
										delay: Math.random() * 2,
									}}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
