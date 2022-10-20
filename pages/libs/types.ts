import React from "react";

export type LayoutTypes = {
	children: any;
};

export type StyledComponentsTypes = {
	items?: string;
	justify?: string;
	width?: string;
	gap?: number;
	family?: string;
	mt?: number;
	mb?: number;
	ml?: number;
	transform?: string;
	weight?: number;
	color?: string;
	nowrap?: string;
	wrap?: string;
	sm?: string;
	isVisible?: boolean;
};

export type DrawerTypes = {
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CardTypes = {
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
