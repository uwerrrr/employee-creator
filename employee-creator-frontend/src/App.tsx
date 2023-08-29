import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import RequestNumContextProvider from "./context/RequestNumContextProvider";
import HomePage from "./pages/HomePage/HomePage";
import AddPage from "./pages/AddPage/AddPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Employee creator application</h1>
        <RequestNumContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </RequestNumContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
