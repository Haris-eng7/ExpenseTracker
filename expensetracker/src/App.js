import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import TransactionsProvider from "./TransactionsProvider";

function App() {
  return (
    <div className="App">
      <TransactionsProvider>
        <Main />
      </TransactionsProvider>
    </div>
  );
}

export default App;
