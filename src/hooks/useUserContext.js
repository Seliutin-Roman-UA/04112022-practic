import { UserContext } from "components/Context/Context";
import { useContext } from "react";


export function useUserContext() {
    return useContext (UserContext);
}