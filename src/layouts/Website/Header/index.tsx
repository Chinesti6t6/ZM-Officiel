import React from "react";
import { Sun, Moon, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../../hooks/useTheme";

const WebsiteHeader: React.FC = () => {
	const { toggleTheme, isDark } = useTheme();

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			toggleTheme();
		}
	};

	return (
		<header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-9 py-6 flex items-center justify-between">
			<h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)]">
				Z<span className="text-[var(--accent)]">.</span>
			</h1>
			<nav className="flex items-center gap-3">
				<a
					href="tel:+212629258876"
					aria-label="Phone number"
					className="relative p-3 rounded-full bg-[var(--muted)] text-[var(--text)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
				>
					<Phone size={20} />
				</a>
				<button
					role="button"
					tabIndex={0}
					aria-pressed={isDark}
					aria-label="Toggle color theme"
					onClick={toggleTheme}
					onKeyDown={handleKeyDown}
					className="relative p-3 rounded-full bg-[var(--muted)] text-[var(--text)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
				>
					<AnimatePresence mode="wait" initial={false}>
						{isDark ? (
							<motion.div
								key="moon"
								initial={{ rotate: -90, scale: 0, opacity: 0 }}
								animate={{ rotate: 0, scale: 1, opacity: 1 }}
								exit={{ rotate: 90, scale: 0, opacity: 0 }}
								transition={{ duration: 0.3 }}
							>
								<Moon size={20} />
							</motion.div>
						) : (
							<motion.div
								key="sun"
								initial={{ rotate: -90, scale: 0, opacity: 0 }}
								animate={{ rotate: 0, scale: 1, opacity: 1 }}
								exit={{ rotate: 90, scale: 0, opacity: 0 }}
								transition={{ duration: 0.3 }}
							>
								<Sun size={20} />
							</motion.div>
						)}
					</AnimatePresence>
				</button>
			</nav>
		</header>
	);
};

export default WebsiteHeader;
