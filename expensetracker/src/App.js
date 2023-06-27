import "./App.css";
import Main from "./Main";
import { TransactionProvider } from "./TransactionsContext";

function App() {
  return (
    <TransactionProvider>
      <div className="App">
        <Main />
      </div>
    </TransactionProvider>
  );
}

export default App;
