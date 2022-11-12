import logo from "./logo.svg";
import "./App.css";
import Footer from "./Footer";
import Content from "./Content";
import ProductItem from "./ProductItem";

function App() {
  const titleContent = "Hello ReactJS";

  return (
    <div className="App">
      <Content />
      <Footer />
      <div>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}

export default App;
