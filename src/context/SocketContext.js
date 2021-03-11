import { createContext } from "react";
import { useSocket } from "../hooks/useSockets";

export const SocketContext = createContext();


export const SocketProvider = ({children})=>{

    const {socket, online} = useSocket('http://localhost:8080');

    return (
        <SocketContext.Provider value={{socket, online}}>
            {children}
        </SocketContext.Provider>
    )
}