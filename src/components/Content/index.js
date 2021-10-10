import "./style.scss";
import DrawingView from "../DrawingView";
import DrawingList from "../DrawingList";
import { selectStep } from "../../store/selectors";
import { useSelector } from "react-redux";


const Content = () => {
  const step = useSelector(selectStep);
  return (
    <div className="cardContent row">
        {
            step === 'addLists' ?
            <DrawingList className={"col-lg-4"} /> :
            <DrawingView className={"col-12 col-lg-8"} />
        }      
    </div>
  );
};

export default Content;
