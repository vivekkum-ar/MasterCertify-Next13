"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { DarkModeIcon, LightModeIcon } from "./component/iconify";
// import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

// source code
// https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
export const DarkModeBtn = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme, systemTheme } = useTheme();

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	const currentTheme = theme === "system" ? systemTheme : theme;

	return (
		<div>
			{currentTheme === "dark" ? (
				<button
					className="cursor-pointer flex items-center text-white p-1 border border-2 rounded-lg"
					onClick={() => setTheme("light")}
				>{LightModeIcon} 
					{/* <span className="m-0 md:ml-1 hidden md:block">Light</span> */}
				</button>
			) : (
				<button
					className="cursor-pointer text-black flex items-center p-1 border border-2 rounded-lg border-gray-900 bg-gray-200 hover:border-blue-700 hover:text-blue-700 hover:bg-blue-200"
					onClick={() => setTheme("dark")}
				>{DarkModeIcon} 
					{/* <span className="m-0 md:ml-1 hidden md:block">Dark</span> */}
				</button>
			)}
		</div>
	);
};