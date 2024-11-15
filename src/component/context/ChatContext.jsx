
// import {
//     createContext,
//     useContext,
//     useEffect,
//     useReducer,
//     useState,
// } from "react";
// import { AuthContext } from "./AuthContext.js";

// export const ChatContext = createContext();

// export const ChatContextProvider = ({ children }) => {
//     const { currentUser } = useContext(AuthContext);

//     const INITAIL_STATE = {
//         chatID: null,
//         user: currentUser || {}, // Make sure currentUser is defined
//     };

//     const chatReducer = (state, action) => {
//         switch (action.type) {
//             case "CHANGE_USER":
//                 return {
//                     user: action.payload,
//                     chatID:
//                         currentUser.uid > action.payload.uid
//                             ? currentUser.uid + action.payload.uid
//                             : action.payload.uid + currentUser.uid,
//                 };
//             default:
//                 return state;
//         }
//     };

//     const [state, dispatch] = useReducer(chatReducer, INITAIL_STATE);

//     return (
//         <ChatContext.Provider value={{ data: state, dispatch }}>
//             {children}
//         </ChatContext.Provider>
//     );
// };
import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react";
import { AuthContext } from "./AuthContext.jsx";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext);

    // Provide a default value or check for existence
    const initialUser = currentUser || {};

    const INITAIL_STATE = {
        chatID: null,
        user: initialUser,
    };

    const chatReducer = (state, action) => {
        switch (action.type) {
            case "CHANGE_USER":
                return {
                    user: action.payload,
                    chatID:
                        currentUser.uid > action.payload.uid
                            ? currentUser.uid + action.payload.uid
                            : action.payload.uid + currentUser.uid,
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(chatReducer, INITAIL_STATE);

    return (
        <ChatContext.Provider value={{ data: state, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
};
