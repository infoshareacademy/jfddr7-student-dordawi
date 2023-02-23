import { createContext, FC, ReactElement, useState } from "react";

interface ContextState {
  username: string;
  setUsername: (username: string) => void;
  songs: string[];
  setSongs: (songs: string[]) => void;
}

interface ContextProviderProps {
  children: ReactElement;
}

const defaultContextValue = {} as ContextState;
export const Context = createContext(defaultContextValue);

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [username, setUsername] = useState("");
  const [songs, setSongs] = useState<string[]>([]);

  return (
    <Context.Provider value={{ username, setUsername, songs, setSongs }}>
      {children}
    </Context.Provider>
  );
};
