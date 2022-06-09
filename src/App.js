import { useReducer, createContext } from "react";
import Dashboard from "./components/Dashboard";
export const DemoContext = createContext("");
const initialValue = {
  keyValue: 0,
  answer: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "STORE_QUESTION":
      let value = state.keyValue;
      value = action.payload.keys;
      return {
        ...state,
        keyValue: value,
      };
    case "0":
      let flag = "";
      for (let i = 1; i <= action.payload; i++) {
        flag += i + ",";
      }
      return {
        ...state,
        answer: flag,
      };

      // eslint-disable-next-line no-unreachable
      return {
        ...state,
        keyValue: value,
      };
    default:
      return {};
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <DemoContext.Provider value={{ state, dispatch }}>
      <Dashboard />
    </DemoContext.Provider>
  );
}

export default App;
