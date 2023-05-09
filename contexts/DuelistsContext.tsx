import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

interface DuelistContextData {
  duel: Duel;
  setDuel: Dispatch<SetStateAction<Duel>>;
  playerSelected: number;
  setPlayerSelected: Dispatch<SetStateAction<number>>;
  playerOneLP: number;
  setPlayerOneLP: Dispatch<SetStateAction<number>>;
  playerTwoLP: number;
  setPlayerTwoLP: Dispatch<SetStateAction<number>>;
  calculate: string;
  setCalculate: Dispatch<SetStateAction<string>>;
  currentRound: number;
  setCurrentRound: Dispatch<SetStateAction<number>>;
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
  const [playerSelected, setPlayerSelected] = useState(1);
  const [playerOneLP, setPlayerOneLP] = useState(8000);
  const [playerTwoLP, setPlayerTwoLP] = useState(8000);
  const [calculate, setCalculate] = useState("");
  const [currentRound, setCurrentRound] = useState(1);

  return (
    <DuelistContext.Provider
      value={{
        duel,
        setDuel,
        playerSelected,
        setPlayerSelected,
        playerOneLP,
        setPlayerOneLP,
        playerTwoLP,
        setPlayerTwoLP,
        calculate,
        setCalculate,
        currentRound,
        setCurrentRound,
      }}
    >
      {children}
    </DuelistContext.Provider>
  )
}