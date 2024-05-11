import { AuhtContext } from "@/context/AuthProvider";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuhtContext);

  return context;
};
