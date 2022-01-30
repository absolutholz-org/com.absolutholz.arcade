import { useState, createContext, ReactNode, useEffect } from "react";

interface IUser {
    displayName: string;
}

interface IUserContext {
    user: IUser | null;
    saveUser: (user: IUser) => void;
    clearUser: () => void;
}

const defaultState = {
    user: null,
    saveUser: (user: IUser) => {},
    clearUser: () => {},
}

const STORAGE_KEY = 'absolutholz.arcade:user';
  
export const UserContext = createContext<IUserContext>(defaultState);

export function UserProvider({ children }: { children: ReactNode }): JSX.Element {
    const [ user, setUser ] = useState<IUser | null>(defaultState.user);

    useEffect(() => {
        const storageUser = window.localStorage.getItem(STORAGE_KEY);
        if (storageUser) {
            setUser(JSON.parse(storageUser));
        }
    }, []);

    const saveUser = (user: IUser) => {
        setUser(user);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    };

    const clearUser = () => {
        setUser(null);
        window.localStorage.removeItem(STORAGE_KEY);
    };
  
    return (
      <UserContext.Provider value={{ user, saveUser, clearUser }}>
          { children }
      </UserContext.Provider>
    );
}
