import React, { createContext, ReactNode, useReducer } from "react";

type Message = {
  list: string;
  quantity: string;
};

type Item = {
  id: number;
  title: string;
  message: Message[];
};

type State = {
  items: Item[];
};

type Action = {
  type: string;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type Props = {
  children: ReactNode;
};

const initialState: State = {
  items: []
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_GROUP":
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case 'ADD_ITEM' : 
      return{
        items :
        state.items.map(message => {
          if(message.id === 1) {
            return {
              ...message,
              message: [...message.message, action.payload]
            }
          }
        })
      }
    case 'DELETE_GROUP':
      return{
        items : state.items.filter(data => data.id !== action.payload)
      } 
    default:
      return state;
  }
};

export const RootContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => null
});

const Reducer = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
};

export default Reducer;
