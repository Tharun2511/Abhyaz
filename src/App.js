import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/hutter";
import Search from "./components/Searchbar/Searchbar";
import Jobs from "./components/Jobs/Jobs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Jobs />
      <Footer />
    </div>
  );
};

export default App;
