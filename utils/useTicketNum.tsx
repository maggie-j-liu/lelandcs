import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
  useContext,
} from "react";

const TicketNumContext = createContext<{
  num: number | null;
  setNum: Dispatch<SetStateAction<null | number>>;
}>({ num: null, setNum: () => {} });
export const TicketNumberContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [num, setNum] = useState<number | null>(null);
  return (
    <TicketNumContext.Provider value={{ num, setNum }}>
      {children}
    </TicketNumContext.Provider>
  );
};

const useTicketNum = () => useContext(TicketNumContext);
export default useTicketNum;
