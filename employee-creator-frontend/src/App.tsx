import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import RequestNumContextProvider from "./context/RequestNumContextProvider";
import HomePage from "./pages/HomePage/HomePage";
import AddPage from "./pages/AddPage/AddPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import EditModeContextProvider from "./context/EditModeContextProvider";
import EditPage from "./pages/EditPage/EditPage";
import ViewPage from "./pages/ViewPage/ViewPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <h1 className="title">Employee creator application</h1>
        <p className="subtitle">
          Created by <a href="https://github.com/uwerrrr">Oscar Nguyen</a>
        </p>

        <EditModeContextProvider>
          <RequestNumContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/:id" element={<ViewPage />} />
              <Route path="/:id/edit" element={<EditPage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </RequestNumContextProvider>
        </EditModeContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
