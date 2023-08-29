import "./App.scss";
import RequestNumContextProvider from "./context/RequestNumContextProvider";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <RequestNumContextProvider>
        <HomePage />
      </RequestNumContextProvider>
    </>
  );
}

export default App;
