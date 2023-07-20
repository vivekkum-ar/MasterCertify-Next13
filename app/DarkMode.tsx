"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { DarkModeIcon, LightModeIcon } from "./component/iconify";
// import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

// source code
// https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
export const DarkModeBtn = () => {
	const [mounted, setMounted] = useState(false);
	const [flip, setFlip] = useState("");
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
					className={`cursor-pointer flex items-center text-white p-1 border border-2 rounded-lg animate__animated ${flip == "dark" ? "animate__flip" : ""}`}
					onClick={() => {setTheme("light"); setFlip("light"); setTimeout(() => {
						setFlip(""); // Remove the flip class after 2 seconds
					  }, 1000);}}
				>{LightModeIcon} 
				</button>
			) : (
				<button
					className={`cursor-pointer text-black flex items-center p-1 border border-2 rounded-lg border-gray-900 bg-gray-200 hover:border-blue-700 hover:text-blue-700 hover:bg-blue-200 animate__animated ${flip == "light" ? "animate__flip" : ""}`}
					onClick={() => {setTheme("dark"); setFlip("dark"); setTimeout(() => {
						setFlip(""); // Remove the flip class after 2 seconds
					  }, 1000);}}
				>{DarkModeIcon} 
				</button>
			)}
		</div>
	);
};