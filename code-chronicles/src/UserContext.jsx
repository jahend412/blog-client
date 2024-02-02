import { createContext } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [userInfo, setUserInfo] = useState(null);
    return (
        <UserContextProvider value={{ userInfo, setUserInfo }} >
            {children}
        </UserContextProvider>
    );
}