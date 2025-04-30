"use client";

import { forwardRef } from "react";
import clsx from "clsx";
import Dropdown from "@/components/Dropdown";
import { getLicensesOptions } from "./getLicensesOptions";
import MenuButtonContent from "./MenuButtonContent";
import { useSongWithLiveStatus } from "@/hooks/useSongWithLiveStatus";
import type { Song } from "@/types";

export const SongItem = forwardRef<
	HTMLLIElement,
	{ song: Song; isEditable?: boolean }
>(({ song, isEditable = false }, ref) => {
	const currentSong = useSongWithLiveStatus(song);
	const options = getLicensesOptions(song.id);
	return (
		<li
			ref={ref}
			className="flex justify-between bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-sm"
		>
			<div>
				<p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
					{song?.title}
				</p>
				<p className="text-sm text-gray-600 dark:text-gray-400">
					Artist: {song?.artist}
				</p>
				<p
					className={clsx(
						"text-sm font-medium",
						currentSong?.licenseStatus === "LICENSED" && "text-green-600",
						currentSong?.licenseStatus === "PENDING" && "text-yellow-600",
						currentSong?.licenseStatus === "NOT_LICENSED" && "text-red-600",
						"dark:text-white",
					)}
				>
					License: {currentSong?.licenseStatus}
				</p>
			</div>
			{isEditable && (
				<div className="my-auto">
					<Dropdown
						options={options}
						menuButtonContent={<MenuButtonContent />}
					/>
				</div>
			)}
		</li>
	);
});
