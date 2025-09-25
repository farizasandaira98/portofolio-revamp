import { ExternalLink, Eye, Folder, Github } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function WorkSection() {
	const { t, data } = useLanguage();

	const projects = data.projects.items;

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
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
								className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/50 dark:to-blue-900/50 mb-6 shadow-lg"
								whileHover={{ scale: 1.1, rotate: 15 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
							>
								<Folder className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
							</motion.div>

							<h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-center">
								{data.projects.title}
							</h2>
							<p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
								{data.projects.subtitle}
							</p>
						</motion.div>

						{/* Projects Grid */}
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate="visible"
							className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
						>
							{projects.map((project) => (
								<motion.div
									key={project.title + (project.year || "")}
									variants={itemVariants}
									layout
								>
									<motion.div
										whileHover={{ y: -10, scale: 1.02 }}
										transition={{ type: "spring", stiffness: 300, damping: 20 }}
										className="group h-full"
									>
										<Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-2 hover:border-cyan-500/50 transition-all duration-300 h-full shadow-lg">
											<div className="relative overflow-hidden">
												<motion.div
													whileHover={{ scale: 1.1 }}
													transition={{ duration: 0.6 }}
												>
													<ImageWithFallback
														src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvamVjdHxlbnwxfHx8fDE3NTg0NzA3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
														alt={project.title}
														className="w-full h-32 sm:h-40 lg:h-48 object-cover"
													/>
												</motion.div>
												{/* Overlay */}
												<motion.div
													className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 sm:gap-4"
													initial={{ opacity: 0 }}
													whileHover={{ opacity: 1 }}
												>
													{project.demo && (
														<motion.a
															href={project.demo}
															className="p-2 sm:p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white hover:from-cyan-600 hover:to-blue-600 transition-colors shadow-lg"
															whileHover={{ scale: 1.1, rotate: 5 }}
															whileTap={{ scale: 0.9 }}
															target="_blank"
															rel="noopener noreferrer"
														>
															<ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
														</motion.a>
													)}
													{project.repo && (
														<motion.a
															href={project.repo}
															className="p-2 sm:p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-white hover:from-gray-800 hover:to-gray-900 transition-colors shadow-lg"
															whileHover={{ scale: 1.1, rotate: -5 }}
															whileTap={{ scale: 0.9 }}
															target="_blank"
															rel="noopener noreferrer"
														>
															<Github className="w-4 h-4 sm:w-5 sm:h-5" />
														</motion.a>
													)}
												</motion.div>
											</div>
											<CardContent className="p-4 sm:p-6 flex flex-col h-full">
												<motion.h3
													className="text-lg sm:text-xl mb-2 sm:mb-3"
													initial={{ opacity: 0 }}
													whileInView={{ opacity: 1 }}
													transition={{ delay: 0.2 }}
												>
													{project.title}
												</motion.h3>
												<motion.p
													className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base flex-grow"
													initial={{ opacity: 0, y: 10 }}
													whileInView={{ opacity: 1, y: 0 }}
													transition={{ delay: 0.3 }}
												>
													{project.description}
												</motion.p>
												{/* Association, Role, Duration */}
												<motion.div
													className="flex flex-wrap gap-2 mb-3 sm:mb-4 text-xs text-muted-foreground"
													initial={{ opacity: 0 }}
													whileInView={{ opacity: 1 }}
													transition={{ delay: 0.35 }}
												>
													{project.association && (
														<span>
															<b>{project.association}</b>
														</span>
													)}
													{project.role && <span>{project.role}</span>}
													{project.duration && <span>{project.duration}</span>}
												</motion.div>
												{/* Year and Status */}
												<motion.div
													className="flex items-center gap-2 mb-3 sm:mb-4"
													initial={{ opacity: 0 }}
													whileInView={{ opacity: 1 }}
													transition={{ delay: 0.36 }}
												>
													{project.year && (
														<Badge variant="outline" className="text-xs">
															{project.year}
														</Badge>
													)}
													{project.status && (
														<Badge
															variant="outline"
															className="text-xs text-green-600 border-green-600"
														>
															{project.status}
														</Badge>
													)}
												</motion.div>
												{/* Technologies */}
												{project.technologies && (
													<motion.div
														className="mb-3 sm:mb-4"
														initial={{ opacity: 0 }}
														whileInView={{ opacity: 1 }}
														transition={{ delay: 0.5 }}
													>
														<h4 className="text-xs sm:text-sm mb-2 text-muted-foreground">
															Tech Stack:
														</h4>
														<div className="flex flex-wrap gap-1.5 sm:gap-2">
															{project.technologies.map((tech, techIndex) => (
																<motion.div
																	key={`tech-${tech.replace(/\s+/g, "-").toLowerCase()}`}
																	initial={{ opacity: 0, scale: 0 }}
																	whileInView={{ opacity: 1, scale: 1 }}
																	transition={{
																		delay: 0.55 + techIndex * 0.05,
																	}}
																	whileHover={{ scale: 1.05, y: -1 }}
																>
																	<Badge
																		variant="secondary"
																		className="text-xs"
																	>
																		{tech}
																	</Badge>
																</motion.div>
															))}
														</div>
													</motion.div>
												)}
												{/* Action Buttons */}
												<motion.div
													className="flex gap-2 sm:gap-3 mt-auto"
													initial={{ opacity: 0, y: 10 }}
													whileInView={{ opacity: 1, y: 0 }}
													transition={{ delay: 0.6 }}
												>
													{project.demo && (
														<Button
															size="sm"
															className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-md"
															asChild
														>
															<motion.a
																href={project.demo}
																whileHover={{ scale: 1.02 }}
																whileTap={{ scale: 0.98 }}
																className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm"
																target="_blank"
																rel="noopener noreferrer"
															>
																<Eye className="w-3 h-3 sm:w-4 sm:h-4" />
																<span className="hidden sm:inline">
																	{t("view_project")}
																</span>
																<span className="sm:hidden">View</span>
															</motion.a>
														</Button>
													)}
													{project.repo && (
														<Button size="sm" variant="outline" asChild>
															<motion.a
																href={project.repo}
																whileHover={{ scale: 1.02, rotate: 2 }}
																whileTap={{ scale: 0.98 }}
																className="flex items-center justify-center px-2 sm:px-3"
																target="_blank"
																rel="noopener noreferrer"
															>
																<Github className="w-3 h-3 sm:w-4 sm:h-4" />
															</motion.a>
														</Button>
													)}
												</motion.div>
											</CardContent>
										</Card>
									</motion.div>
								</motion.div>
							))}
						</motion.div>

						{/* Background Decorations */}
						<div className="absolute inset-0 pointer-events-none overflow-hidden">
							{[...Array(12)].map((_, i) => (
								<motion.div
									key={`work-decoration-${i}-${Math.random()}`}
									className="absolute w-1 h-1 bg-cyan-500/20 dark:bg-cyan-400/20 rounded-full"
									style={{
										left: `${10 + Math.random() * 80}%`,
										top: `${10 + Math.random() * 80}%`,
									}}
									animate={{
										y: [0, -25, 0],
										x: [0, Math.random() * 20 - 10, 0],
										opacity: [0.2, 0.8, 0.2],
										scale: [0.5, 1.2, 0.5],
									}}
									transition={{
										duration: 4 + Math.random() * 3,
										repeat: Infinity,
										delay: Math.random() * 4,
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
