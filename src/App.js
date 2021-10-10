import "./App.scss";
import Header from "./components/Header";
import Content from "./components/Content";
import ScrollButton from "./components/common/ScrollButton";
import Notify from "./components/common/Notify";

const App = () => {
  return (
    <div className="wrap">
      <div className="content col-12 p-3 border-m ">
        <Header />
        <h4 className="tipTitle text-white fs-6">
          Please add drawinglists before you start this game
        </h4>
        <Content />
      </div>
      <ScrollButton />
      <Notify />
    </div>
  );
};

export default App;
