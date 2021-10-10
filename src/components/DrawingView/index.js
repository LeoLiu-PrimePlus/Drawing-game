import "./style.scss";
// import { useState } from "react";
import CountDown from "../CountDown";
// import { SwitchTransition, CSSTransition } from "react-transition-group";
import Winner from "../Winner";
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
    <div id="targetId" className={`${className} drawingView flex-center`}>
      {step === "init" ? (
        <div className="drawingView-panel flex-center">
          {step === "init" ? (
            <div>
              <div className="mb-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleSelectMode("drawing")}
                >
                  Start without set countdown
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleSelectMode("countDown")}
                >
                  Start set countdown
                </button>
              </div>
            </div>
          ) : (
            step === "countDown" && (
              <CountDown handleSelectMode={handleSelectMode} />
            )
          )}
        </div>
      ) : step === "countDown" ? (
        <div className="drawingView-panel flex-center">
          <CountDown handleSelectMode={handleSelectMode} />
        </div>
      ) : (
        <Winner handleSelectMode={handleSelectMode} />
      )}
    </div>
  );
};

export default DrawingView;
