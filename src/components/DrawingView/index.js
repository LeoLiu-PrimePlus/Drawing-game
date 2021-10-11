import "./style.scss";
import CountDown from "../CountDown";
import Winner from "../Winner";
import Button from '../common/Button'
import { selectDrawingLists, selectStep } from "../../store/selectors";
import { useSelector, useDispatch } from "react-redux";
import { notifyMessage, changeStep } from "../../store/actions";

const DrawingView = ({ className }) => {
  const drawingLists = useSelector(selectDrawingLists);
  const step = useSelector(selectStep);
  const dispatch = useDispatch();

  const handleSelectMode = (type) => {
    if (type !== step) {
      if (
        (type === "drawing" || type === "countDown") &&
        drawingLists.length === 0
      ) {
        const notifyObj = {
          msg: "There's no drawing lists, please add one at least.",
          type: "error",
        };
        dispatch(notifyMessage(notifyObj));
      } else {
        dispatch(changeStep(type));
      }
    }
  };

  return (
    <div id="targetId" className={`${className} ${step !== 'init' ? 'p-0' : ''} drawingView h-100`}>
      {step === "init" ? (
        <div className="drawingView-panel ps-3 h-100">
          {step === "init" ? (
            <div>
              <div className="mb-3 d-flex align-items-center">
                <Button label={'Start without set countdown'} className={'btn text-white p-0'} param={'drawing'} handleClick={handleSelectMode}>
                  <i className="fas fa-dice-d6 text-white me-2"></i>
                </Button>
              </div>
              <div className="mb-4 d-flex align-items-center">
                <Button label={'Start set countdown'} className={'btn text-white p-0'} param={'countDown'} handleClick={handleSelectMode}>
                  <i className="far fa-clock text-white me-2"></i>
                </Button>
              </div>
              <h4 className="tipTitle text-white">
                Please add drawinglists before you start this game~~!!
              </h4>
            </div>
          ) : (
            step === "countDown" && (
              <CountDown handleSelectMode={handleSelectMode} />
            )
          )}
        </div>
      ) : step === "countDown" ? (
        <div className="drawingView-panel h-100">
          <CountDown handleSelectMode={handleSelectMode} />
        </div>
      ) : step === "selectMode" ? (
        <div className="flex-center h-100">
          <div className="text-center p-2">
            <Button label={'Start without set countdown'} className={'btn text-white mb-4 fs-5'} param={'drawing'} handleClick={handleSelectMode}>
              <i className="fas fa-dice-d6 text-white me-2"></i>
            </Button>
            <br/>
            <Button label={'Start set countdown'} className={'btn text-white fs-5'} param={'countDown'} handleClick={handleSelectMode}>
              <i className="far fa-clock text-white me-2"></i>
            </Button>
          </div>
        </div>
      ) : (
        <Winner handleSelectMode={handleSelectMode} />
      )}
    </div>
  );
};

export default DrawingView;
