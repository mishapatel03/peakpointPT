import { Provider } from "react-redux";
import store from "./store/store";
import './App.css';
import Body from "./body";

function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}

export default App;
