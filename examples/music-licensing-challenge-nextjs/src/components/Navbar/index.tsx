import Link from "next/link";
import Image from "next/image";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import {
	Bars3Icon,
	UserCircleIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "@/components/Dropdown";
import { getMenuOptions, getNavbarLinks } from "./getNavbarLinks";

const MenuUserButton = () => (
	<UserCircleIcon aria-hidden="true" className="size-6 rounded-full" />
);

const Navbar = async () => {
	const navigation = getNavbarLinks();
	const menuOptions = await getMenuOptions();
	return (
		<Disclosure as="nav" className="relative bg-white shadow">
			<div className="flex flex-col grow-1">
				<div className="flex h-16 items-center justify-between px-4">
					<div className="inset-y-0 left-0 flex items-center lg:hidden">
						<DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
							<span className="-inset-0.5" />
							<span className="sr-only">Open main menu</span>
							<Bars3Icon
								aria-hidden="true"
								className="block size-6 group-data-open:hidden"
							/>
							<XMarkIcon
								aria-hidden="true"
								className="hidden size-6 group-data-open:block"
							/>
						</DisclosureButton>
					</div>
					<div className="flex items-center relative w-16 h-16">
						<Image
							alt="ACME BROS PICTURES"
							fill
							src="https://cdn.worldvectorlogo.com/logos/acme-1.svg"
						/>
					</div>
					<div className="lg:flex flex-1 items-center justify-center sm:items-stretch hidden">
						<div className="hidden sm:ml-6 sm:block">
							<div className="flex space-x-4">
								{navigation.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className="text-gray-600 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
									>
										{item.name}
									</Link>
								))}
							</div>
						</div>
					</div>
					<div>
						<Dropdown
							options={menuOptions}
							menuButtonContent={<MenuUserButton />}
						/>
					</div>
				</div>
			</div>

			<DisclosurePanel className="lg:hidden absolute top-full left-0 right-0 z-20 bg-white shadow-md">
				<div className="space-y-1 px-2 pt-2 pb-3">
					{navigation.map((item) => (
						<DisclosureButton
							key={item.name}
							className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
						>
							{item.name}
						</DisclosureButton>
					))}
				</div>
			</DisclosurePanel>
		</Disclosure>
	);
};

export default Navbar;
