import { ReactNode } from "react";
import { PageSelection } from "./enums";

export interface IBaseProps {
	children: ReactNode;
	className?: string;
}

export interface IPropsPageSelection {
	pageSelection: PageSelection
}

export interface IPropsIsSelected {
	isSelected: boolean;
}

export interface IPropsHeader {
	headerText: string;
	showBackButton?: boolean;
}

export interface IPropsNavigation extends IPropsPageSelection, IPropsHeader {}
