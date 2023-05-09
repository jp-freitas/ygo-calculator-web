import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface DuelistContextData {
  duel: Duel;
  setDuel: Dispatch<SetStateAction<Duel>>;
}

interface DuelistContextProviderProps {
  children: ReactNode;
}


export const DuelistContext = createContext<DuelistContextData>({} as DuelistContextData);

export function DuelistContextProvider({ children }: DuelistContextProviderProps) {
  const [duel, setDuel] = useState({
    firstDuelist: '',
    secondDuelist: '',
    firstRoundWinner: '',
    secondRoundWinner: '',
    thirdRoundWinner: '',
  });

  return (
    <DuelistContext.Provider
      value={{
        duel,
        setDuel,
      }}
    >
      {children}
    </DuelistContext.Provider>
  )
}