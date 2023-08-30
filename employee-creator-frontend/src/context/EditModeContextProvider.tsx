import { ReactNode, createContext, useState } from "react";

export interface EditModeContextType {
  editMode: boolean;
  setEditMode: (newEditMode: boolean) => void;
}

export const EditModeContext = createContext<EditModeContextType | null>(null);

export const EditModeContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  return (
    <EditModeContext.Provider value={{ editMode, setEditMode }}>
      {children}
    </EditModeContext.Provider>
  );
};

export default EditModeContextProvider;
