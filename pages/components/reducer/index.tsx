import { message } from "antd";
import React, { createContext, ReactNode, useEffect, useReducer } from "react";

type Message = {
  list: string;
  quantity: string;
};

type Item = {
  id: string;
  title: string;
  message: Message[];
};

type State = {
  items: Item[];
};

type Action = {
  type: string;
  payload: any;
  index? : any
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
        state.items.map(item => {
          if(item && item.id) {
              if(action && action.index && item.id == action.index) {
                return {
                  ...item,
                  message: [...item.message, action.payload]
                }
              }
              else {
                return item
              }
          }
          else {
            return item
          }
        })
      }
    case 'DELETE_GROUP':
      return{
        items : state.items.filter(data => data.id !== action.payload)
      } 
    case 'DELETE_ITEM' :
      return {
        items : 
        state.items.map(item => {
          if(item.id == action.index) {
            return {
              ...item,
              message : item.message.filter(data => data.list !== action.payload)
            }
          }
          else {
            return item
          }
      })      }
    case 'LOAD_STATE' :
      return{
        ...state,
        ...action.payload
      }
  }
};

export const RootContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => null
});

const Reducer = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  useEffect(() => {
    const setState = JSON.parse(localStorage.getItem('state'))
    dispatch({type:'LOAD_STATE', payload: setState})
  }, [])

  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
};

export default Reducer;
