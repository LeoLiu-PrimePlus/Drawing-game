import "./App.scss";
import Header from "./components/Header";
import Content from "./components/Content";
import Notify from "./components/common/Notify";

const App = () => {
  return (
    <div className="wrap">
      <div className="content col-12 border-s">
        <Header />
        <Content />
      </div>
      <Notify />
    </div>
  );
};

export default App;
