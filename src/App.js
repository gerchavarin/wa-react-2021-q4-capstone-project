import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Home />
        <Footer />
      </main>
    </div>
  );
}

export default App;
