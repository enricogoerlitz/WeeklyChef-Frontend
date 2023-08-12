import React, { useState } from "react";
import { IBaseProps } from "../utils/interfaces";

export type TRole = "admin" | "moderator" | "standard" | "visitor";

export interface IAuthUser {
	username: string;
	roles: TRole[];
}
export interface IAuth extends IAuthUser {
	fetchUser: (user: IAuthUser) => void;
}

export const AuthContext = React.createContext<IAuth>({
	username: "DefaultUser",
	roles: ["visitor"],
	fetchUser: (user: IAuthUser) => {},
});

const AuthContextProvider: React.FC<IBaseProps> = (props) => {
	const [username, setUsername] = useState("DefaultUser");
	const [roles, setRoles] = useState<TRole[]>(["visitor"]);

	const fetchUser = (user: IAuthUser) => {
		console.log("FetchUser");
		setUsername((u) => user.username);
		setRoles((r) => [...r, ...user.roles]);
		console.log(user);
	};

	const contextValue: IAuth = {
		username,
		roles: roles,
		fetchUser,
	};
	console.log("value:", contextValue);
	return (
		<AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
	);
};

export default AuthContextProvider;
