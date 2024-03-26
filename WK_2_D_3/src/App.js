import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path={"/about-us"} element={<AboutPage />} />
                    <Route path={"/"} element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
