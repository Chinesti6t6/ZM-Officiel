import React from "react";
import { Heart } from "lucide-react";

const WebsiteFooter: React.FC = () => {
	return (
		<footer className="bg-[var(--surface)] border-t border-[var(--card-border)] mt-7 py-7">
			<div className="flex flex-col sm:flex-row items-center justify-between max-w-6xl px-4 mx-auto">
				<div className="flex items-center gap-2 justify-center text-xs font-semibold tracking-widest text-[var(--text-muted)]">
					Designed and Developed by{" "}
					<Heart
						size={14}
						className="text-[var(--accent)] fill-[var(--accent)]"
					/>{" "}
					<span className="text-[var(--text)]">Zakaria Mirinioui</span>
				</div>
				<p className="text-xs font-semibold tracking-widest text-[var(--text-muted)]">
					zakaria.dev &copy;{" "}
					<span className="text-[var(--accent)]">{new Date().getFullYear()}</span>
				</p>
			</div>
		</footer>
	);
};

export default WebsiteFooter;
