import About from "./components/About";
import Dishes from "./components/Dishes";
import HeroSection from "./components/HeroSection";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import OurExpertise from "./components/OurExpertise";

function App() {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
      <OurExpertise />
    </main>
  );
}

export default App;
