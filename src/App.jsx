import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogPage from "./components/BlogPage";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(sectionId);
    const navbarOffset = 88;

    if (!element) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const topPosition =
      element.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({ top: topPosition, behavior: "smooth" });
  };

  const handleNavigateHome = (sectionId = null) => {
    if (location.pathname !== "/") {
      navigate("/");
      if (sectionId) {
        window.setTimeout(() => scrollToSection(sectionId), 50);
      }
      return;
    }

    scrollToSection(sectionId);
  };

  const handleNavigateLogin = () => navigate("/login");
  const handleNavigateCreateAccount = () => navigate("/create-account");
  const handleNavigateBlog = () => navigate("/blog");

  return (
    <div className="min-h-dvh bg-white font-sans text-slate-900 selection:bg-brand/10 selection:text-brand">
      <Navbar
        onNavigateToBlog={handleNavigateBlog}
        onNavigateHome={handleNavigateHome}
        onNavigateLogin={handleNavigateLogin}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              onNavigateCreateAccount={handleNavigateCreateAccount}
              onNavigateSection={handleNavigateHome}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              onBack={() => handleNavigateHome()}
              onNavigateCreateAccount={handleNavigateCreateAccount}
            />
          }
        />
        <Route
          path="/create-account"
          element={
            <CreateAccount
              onBack={() => handleNavigateHome()}
              onNavigateLogin={handleNavigateLogin}
            />
          }
        />
        <Route
          path="/blog"
          element={<BlogPage onBack={() => handleNavigateHome()} />}
        />
        <Route
          path="*"
          element={
            <Home
              onNavigateCreateAccount={handleNavigateCreateAccount}
              onNavigateSection={handleNavigateHome}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
