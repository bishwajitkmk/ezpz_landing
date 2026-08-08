import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import TractionAndValidation from "../components/TractionAndValidation";
import Footer from "../components/Footer";
import CreateAccCTA from "../components/CreateAccCTA";

const Home = ({ onNavigateCreateAccount }) => (
  <main id="home" className="min-h-dvh bg-white">
    <Hero onStartLearning={onNavigateCreateAccount} />
    <Features />
    <Pricing />
    <TractionAndValidation />
    <CreateAccCTA />
    <Footer />
  </main>
);

export default Home;
