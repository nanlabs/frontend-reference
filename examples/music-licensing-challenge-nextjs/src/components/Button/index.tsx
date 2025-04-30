import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Button as BaseButton } from "@headlessui/react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
	return (
		<BaseButton
			className={clsx(
				"inline-flex items-center gap-2 rounded-md bg-gray-700 py-2 px-16 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white",
				className,
			)}
			{...props}
		>
			{children}
		</BaseButton>
	);
};
