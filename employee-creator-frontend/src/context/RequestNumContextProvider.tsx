import { ReactNode, createContext, useState } from "react";

export interface RequestNumContextType {
  requestNum: number;
  makeRefresh: () => void;
}

export const RequestNumContext = createContext<RequestNumContextType | null>(
  null
);

export const RequestNumContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [requestNum, setRequestNum] = useState<number>(0);

  const makeRefresh = () => {
    setRequestNum(requestNum + 1);
  };

  return (
    <RequestNumContext.Provider value={{ requestNum, makeRefresh }}>
      {children}
    </RequestNumContext.Provider>
  );
};

export default RequestNumContextProvider;
