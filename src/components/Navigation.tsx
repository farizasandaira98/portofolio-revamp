import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { NavLogoLottie } from "./LogoLottie";
import {
	FloatingLottieWrapper,
	LanguageToggleLottie,
	MenuToggleLottie,
	ThemeToggleLottie,
} from "./LottieAnimations";

interface NavigationProps {
	activeSection: string;
	onSectionClick: (section: string) => void;
}

export function Navigation({ activeSection, onSectionClick }: NavigationProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [_isScrolled, setIsScrolled] = useState(false);
	const [isNavVisible] = useState(false); // Keep hidden permanently
	const [hasScrolled, setHasScrolled] = useState(false); // Track if user has scrolled
	// Commented out for future use when navbar is re-enabled
	// const [lastScrollY, setLastScrollY] = useState(0);
	// const [idleTimeoutId, setIdleTimeoutId] = useState<NodeJS.Timeout | null>(null);
	const [isThemeTransitioning, setIsThemeTransitioning] = useState(false);
	const [isMenuTransitioning, setIsMenuTransitioning] = useState(false);
	const [isLanguageActive, setIsLanguageActive] = useState(false);
	const { theme, toggleTheme } = useTheme();
	const { language, toggleLanguage, t } = useLanguage();

	// Idle threshold to hide navbar after inactivity (for future use)
	// const IDLE_HIDE_MS = 15000;

	const navItems = [
		{ id: "home", label: t("home") },
		{ id: "education", label: t("education") },
		{ id: "experience", label: t("experience") },
		{ id: "work", label: t("work") },
		{ id: "contact", label: t("contact") },
	];

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setIsScrolled(currentScrollY > 50);

			// Mark that user has scrolled
			if (!hasScrolled && currentScrollY > 0) {
				setHasScrolled(true);
			}

			// Navbar is permanently hidden - no visibility changes on scroll
			// (Keep all the scroll logic commented out for future use)
			/*
			// Show navbar on any scroll movement (including first)
			if (currentScrollY > 0 && Math.abs(currentScrollY - lastScrollY) > 5) {
				setIsNavVisible(true);

				// Clear existing timeout
				if (idleTimeoutId) {
					clearTimeout(idleTimeoutId);
				}

				// Set new timeout to hide after inactivity
				const timeoutId = setTimeout(() => {
					if (!isMenuOpen) {
						setIsNavVisible(false);
					}
				}, IDLE_HIDE_MS);
				setIdleTimeoutId(timeoutId);
			}
			*/

			// setLastScrollY(currentScrollY); // Commented out for future use
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			// Cleanup commented out for future use
			// if (idleTimeoutId) {
			//   clearTimeout(idleTimeoutId);
			// }
		};
	}, [hasScrolled]);

	const handleNavMouseEnter = () => {
		// Navbar is permanently hidden - no hover behavior
		// (Keep for future use)
		/*
		// Always show on hover
		setIsNavVisible(true);
		if (idleTimeoutId) {
			clearTimeout(idleTimeoutId);
			setIdleTimeoutId(null);
		}
		*/
	};

	const handleNavMouseLeave = () => {
		// Navbar is permanently hidden - no hover behavior
		// (Keep for future use)
		/*
		// Restart idle timer on leave if menu not open
		if (!isMenuOpen) {
			const timeoutId = setTimeout(() => {
				setIsNavVisible(false);
			}, IDLE_HIDE_MS);
			setIdleTimeoutId(timeoutId);
		}
		*/
	};

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: isNavVisible ? 0 : -100 }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
			className="fixed top-0 left-0 right-0 z-[9999] backdrop-blur-xl bg-white/5 dark:bg-black/5 border-b border-white/10 dark:border-white/5 transition-all duration-300"
			onMouseEnter={handleNavMouseEnter}
			onMouseLeave={handleNavMouseLeave}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<NavLogoLottie
						isDark={theme === "dark"}
						onClick={() => onSectionClick("home")}
					/>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item, index) => (
							<motion.button
								key={item.id}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								onClick={() => onSectionClick(item.id)}
								className={`relative px-3 py-2 transition-colors duration-200 ${
									activeSection === item.id
										? "text-primary"
										: "text-muted-foreground hover:text-foreground"
								}`}
								whileHover={{ y: -2 }}
								whileTap={{ y: 0 }}
							>
								{item.label}
								{activeSection === item.id && (
									<motion.div
										layoutId="activeIndicator"
										className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
										initial={{ scaleX: 0 }}
										animate={{ scaleX: 1 }}
										transition={{ type: "spring", stiffness: 500, damping: 30 }}
									/>
								)}
							</motion.button>
						))}
					</div>

					{/* Controls */}
					<div className="flex items-center space-x-4">
						{/* Language Toggle with Lottie */}
						<motion.button
							onClick={() => {
								setIsLanguageActive(true);
								setTimeout(() => setIsLanguageActive(false), 800);
								toggleLanguage();
							}}
							onHoverStart={() => setIsLanguageActive(true)}
							onHoverEnd={() => setIsLanguageActive(false)}
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className="p-2 rounded-lg hover:bg-accent/50 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-primary/20"
						>
							<FloatingLottieWrapper isActive={isLanguageActive}>
								<LanguageToggleLottie
									isActive={isLanguageActive}
									isDark={theme === "dark"}
									language={language}
								/>
							</FloatingLottieWrapper>
						</motion.button>

						{/* Theme Toggle with Lottie */}
						<motion.button
							onClick={() => {
								setIsThemeTransitioning(true);
								setTimeout(() => setIsThemeTransitioning(false), 600);
								toggleTheme();
							}}
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className="p-2 rounded-lg hover:bg-accent/50 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-primary/20"
						>
							<FloatingLottieWrapper isActive={isThemeTransitioning}>
								<ThemeToggleLottie
									theme={theme}
									isTransitioning={isThemeTransitioning}
								/>
							</FloatingLottieWrapper>
						</motion.button>

						{/* Mobile Menu Button with Lottie */}
						<motion.button
							className="md:hidden p-2 rounded-lg hover:bg-accent/50 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-primary/20"
							onClick={() => {
								setIsMenuTransitioning(true);
								setTimeout(() => setIsMenuTransitioning(false), 400);
								const newMenuState = !isMenuOpen;
								setIsMenuOpen(newMenuState);
								// Keep navbar visible when menu is open (commented out since navbar is hidden)
								/*
								if (newMenuState) {
									setIsNavVisible(true);
									if (idleTimeoutId) {
										clearTimeout(idleTimeoutId);
										setIdleTimeoutId(null);
									}
								}
								*/
							}}
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							<FloatingLottieWrapper
								isActive={isMenuTransitioning || isMenuOpen}
							>
								<MenuToggleLottie
									isOpen={isMenuOpen}
									isTransitioning={isMenuTransitioning}
									isDark={theme === "dark"}
								/>
							</FloatingLottieWrapper>
						</motion.button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden backdrop-blur-xl bg-white/10 dark:bg-black/10 border-b border-white/10 dark:border-white/5"
					>
						<div className="px-4 py-4 space-y-4">
							{navItems.map((item, index) => (
								<motion.button
									key={item.id}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.1 }}
									onClick={() => {
										onSectionClick(item.id);
										setIsMenuOpen(false);
									}}
									className={`block w-full text-left px-4 py-3 rounded-md transition-colors duration-200 ${
										activeSection === item.id
											? "bg-primary text-primary-foreground"
											: "hover:bg-accent"
									}`}
									whileHover={{ x: 10 }}
									whileTap={{ scale: 0.98 }}
								>
									{item.label}
								</motion.button>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}
