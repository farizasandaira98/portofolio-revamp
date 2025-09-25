import { Briefcase, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export function ExperienceSection() {
	const { data } = useLanguage();

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring" as const,
				stiffness: 100,
				damping: 12,
			},
		},
	};

	return (
		<section className="h-screen bg-gradient-to-b from-blue-50/20 dark:from-blue-950/20 to-background">
			<div className="section-scroll-container h-full overflow-y-auto py-8 sm:py-12 md:py-20 px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col justify-center min-h-full">
					<div className="container mx-auto relative">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="text-center mb-12 sm:mb-16"
						>
							<motion.div
								className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 dark:from-purple-900/50 dark:to-cyan-900/50 mb-6 shadow-lg"
								whileHover={{ scale: 1.1, rotate: -10 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
							>
								<Briefcase className="w-8 h-8 text-purple-600 dark:text-purple-400" />
							</motion.div>

							<h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-center">
								{data.work.title}
							</h2>
							<p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
								{data.work.subtitle}
							</p>
						</motion.div>

						<motion.div
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="space-y-6 sm:space-y-8"
						>
							{data.work.experience.map((experience, index) => {
								return (
									<motion.div
										key={`experience-${experience.title}-${experience.company}-${index}`}
										variants={itemVariants}
										className="relative"
									>
										<motion.div
											whileHover={{ scale: 1.02, y: -5 }}
											transition={{
												type: "spring",
												stiffness: 300,
												damping: 20,
											}}
										>
											<Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-2 hover:border-purple-500/50 transition-all duration-300 shadow-lg">
												<CardContent className="p-4 sm:p-6">
													<div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
														{/* Icon and Timeline */}
														<div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2">
															<motion.div
																className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 dark:from-purple-900/50 dark:to-cyan-900/50 shadow-md"
																whileHover={{ scale: 1.1, rotate: 10 }}
																transition={{
																	type: "spring",
																	stiffness: 400,
																	damping: 10,
																}}
															>
																<Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
															</motion.div>

															<div className="flex lg:flex-col items-center lg:items-start gap-2 text-xs sm:text-sm text-muted-foreground">
																<motion.div
																	className="flex items-center gap-1"
																	whileHover={{ scale: 1.05 }}
																>
																	<Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
																	<span className="text-xs sm:text-sm">
																		{experience.period}
																	</span>
																</motion.div>
															</div>
														</div>

														{/* Content */}
														<div className="flex-1 space-y-3 sm:space-y-4">
															<div>
																<motion.h3
																	className="text-lg sm:text-xl lg:text-2xl mb-1"
																	initial={{ opacity: 0 }}
																	whileInView={{ opacity: 1 }}
																	transition={{ delay: 0.2 }}
																>
																	{experience.title}
																</motion.h3>

																<motion.p
																	className="text-purple-600 dark:text-purple-400 text-base sm:text-lg font-medium"
																	initial={{ opacity: 0 }}
																	whileInView={{ opacity: 1 }}
																	transition={{ delay: 0.3 }}
																>
																	{experience.company}
																</motion.p>
															</div>

															<motion.p
																className="text-muted-foreground leading-relaxed text-sm sm:text-base"
																initial={{ opacity: 0, y: 10 }}
																whileInView={{ opacity: 1, y: 0 }}
																transition={{ delay: 0.4 }}
															>
																{experience.description}
															</motion.p>

															{/* Skills */}
															<motion.div
																initial={{ opacity: 0 }}
																whileInView={{ opacity: 1 }}
																transition={{ delay: 0.5 }}
															>
																<h4 className="text-xs sm:text-sm mb-2 text-muted-foreground">
																	Skills:
																</h4>
																<div className="flex flex-wrap gap-2">
																	{experience.skills.map(
																		(skill, skillIndex) => (
																			<motion.div
																				key={`skill-${skill.replace(/\s+/g, "-").toLowerCase()}`}
																				initial={{ opacity: 0, scale: 0 }}
																				whileInView={{ opacity: 1, scale: 1 }}
																				transition={{
																					delay: 0.6 + skillIndex * 0.05,
																				}}
																				whileHover={{ scale: 1.05, y: -2 }}
																			>
																				<Badge
																					variant="outline"
																					className="text-xs"
																				>
																					{skill}
																				</Badge>
																			</motion.div>
																		),
																	)}
																</div>
															</motion.div>
														</div>
													</div>
												</CardContent>
											</Card>
										</motion.div>

										{/* Connecting Line */}
										{index < data.work.experience.length - 1 && (
											<motion.div
												className="absolute left-6 top-full w-0.5 h-6 sm:h-8 bg-gradient-to-b from-purple-500/50 to-transparent"
												initial={{ scaleY: 0 }}
												whileInView={{ scaleY: 1 }}
												transition={{ delay: 0.5 }}
											/>
										)}
									</motion.div>
								);
							})}
						</motion.div>

						{/* Background Decorations */}
						<div className="absolute inset-0 pointer-events-none overflow-hidden">
							{[...Array(8)].map((_, i) => (
								<motion.div
									key={`decoration-${i}-${Math.random()}`}
									className="absolute w-2 h-2 bg-purple-500/20 dark:bg-purple-400/20 rounded-full"
									style={{
										left: `${15 + Math.random() * 70}%`,
										top: `${20 + Math.random() * 60}%`,
									}}
									animate={{
										y: [0, -30, 0],
										x: [0, 10, 0],
										opacity: [0.2, 0.8, 0.2],
									}}
									transition={{
										duration: 4 + Math.random() * 2,
										repeat: Infinity,
										delay: Math.random() * 3,
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
