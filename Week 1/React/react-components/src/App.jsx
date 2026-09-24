import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  return (
    <div className="container">
      <Header />
      <Card
        title="Project 1"
        description="Simple React Component Practice"
      />
      <Button text="Click Me" />
      <Form />
      <Footer />
    </div>
  );
}

export default App;