import Router from "./router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
