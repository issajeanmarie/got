import React from "react";

export type LayoutTypes = {
	children: any;
};

export type StyledComponentsTypes = {
	items?: string;
	justify?: string;
	width?: string;
	height?: string;
	gap?: number;
	family?: string;
	mt?: number;
	mb?: number;
	ml?: number;
	sm_ml?: number;
	transform?: string;
	weight?: number;
	color?: string;
	nowrap?: string;
	wrap?: string;
	sm?: string;
	isVisible?: boolean;
	isSearchVisible?: string;
};

export type DrawerTypes = {
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
	url: string | null;
	icon: string;
};

export type CardTypes = {
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
	name: string | undefined;
	url: string;
	setContentToDisplay: React.Dispatch<React.SetStateAction<string>>;
	content: any;
	numberedElement: any;
	icon: string;
};

export type LoaderTypes = {
	color?: string;
};

export type NavbarTypes = {
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
	searchValue: string;
};
