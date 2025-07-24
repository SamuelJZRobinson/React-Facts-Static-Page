import "./App.css";
import Header from "./header";
import MainContent from "./MainContent";
import Footer from "./Footer";

// React translates JSX into create element DOM code, etc.
// Component names must start with capital letters.

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
