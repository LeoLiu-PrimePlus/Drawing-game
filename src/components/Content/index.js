import "./style.scss";
import DrawingView from "../DrawingView";
import DrawingList from "../DrawingList";
import { selectStep } from "../../store/selectors";
import { useSelector } from "react-redux";


const Content = () => {
  const step = useSelector(selectStep);
  return (
    <div className="cardContent row h-100">
        {
            step === 'init' ? (
              <>
                <DrawingView className={"DrawingView-mobile col-12 col-lg-6"} />
                <DrawingList className={"DrawingList-mobile col-lg-6"} />
              </>
            ) :<DrawingView className={"col-12"} />
        }      
        
    </div>
  );
};

export default Content;
