import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

export const useTheme = () => {
	const [theme, setTheme] = useState<Theme>(() => {
		// Check localStorage first
		const stored = localStorage.getItem('theme') as Theme | null;
		if (stored) return stored;
		
		// Then check system preference
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
		return 'light';
	});

	useEffect(() => {
		const root = document.documentElement;
		
		// Apply theme class
		root.classList.remove('light', 'dark');
		root.classList.add(theme);
		
		// Update CSS variables based on theme
		if (theme === 'light') {
			root.style.setProperty('--bg', '#ffffff');
			root.style.setProperty('--surface', '#f8f9fa');
			root.style.setProperty('--text', '#1a1a1a');
			root.style.setProperty('--text-muted', '#6b7280');
			root.style.setProperty('--accent', '#dc2626'); // red-600
			root.style.setProperty('--accent-hover', '#b91c1c'); // red-700
			root.style.setProperty('--muted', '#e5e7eb');
			root.style.setProperty('--card-border', '#e5e7eb');
			root.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.8)');
		} else {
			root.style.setProperty('--bg', '#000000');
			root.style.setProperty('--surface', '#0e0000');
			root.style.setProperty('--text', '#ffffff');
			root.style.setProperty('--text-muted', '#9ca3af');
			root.style.setProperty('--accent', '#ff0000'); // red-500
			root.style.setProperty('--accent-hover', '#ff3333');
			root.style.setProperty('--muted', '#1f2937');
			root.style.setProperty('--card-border', 'rgba(255, 0, 0, 0.2)');
			root.style.setProperty('--card-bg', 'rgba(14, 0, 0, 0.5)');
		}
		
		// Save to localStorage
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	return { theme, toggleTheme, isDark: theme === 'dark' };
};
