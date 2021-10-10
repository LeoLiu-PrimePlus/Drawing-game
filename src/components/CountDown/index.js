import "./style.scss";
import { useState, useEffect } from "react";
import SvgCircle from "../SvgCircle";
import { useDispatch } from "react-redux";
import { notifyMessage } from "../../store/actions";

const CountDown = ({ handleSelectMode }) => {
  const [countDownType, setCountDownType] = useState("set");
  const [counter, setCounter] = useState(0);
  const [counterMax, setMax] = useState(0);
  const [minTen, setMinTen] = useState(0);
  const [min, setMin] = useState(0);
  const [secTen, setSecTen] = useState(0);
  const [sec, setSec] = useState(0);
  const dispatch = useDispatch();
  let minTenInput = null;
  let minInput = null;
  let secTenInput = null;
  let secInput = null;

  useEffect(() => {
    const timer =
      countDownType === "start" &&
      counter >= 0 &&
      setInterval(() => {
        if (counter > 0) {
          setCounter(counter - 1);
          const sec = 1, secTen = sec * 10, min = sec * 60, minTen = sec * 60 * 10
          console.log(counter / minTen / 10)
          setMinTen(Math.floor(counter / minTen / 10))
          setMin(Math.floor(counter % minTen / min))
          setSecTen(Math.floor(counter % min / secTen))
          setSec(Math.floor(counter % secTen))
        } else if (counter === 0) {
          handleSelectMode("drawing");
        }
      }, 1000);
    return () => clearInterval(timer);
  }, [counter, countDownType, handleSelectMode]);

  useEffect(() => {
    if (countDownType === "set") {
      setMax(0);
    } else if (countDownType === "start") {
      if (counterMax === 0) {
        setMax(counter);
      }
    }
  }, [counter, countDownType, counterMax]);

  const handleInputTime = (e, timeType) => {
    const target = e.target.value;
    let newCounter = parseInt(target);
    if (timeType === 'minTen') {
      if (!isNaN(newCounter)) {
        if (newCounter)
        setMinTen(newCounter);
        minInput.focus()
      }
    } else if (timeType === 'min') {
      if (!isNaN(newCounter)) {
        if (newCounter > 6) newCounter = 5
        setMin(newCounter);
        secTenInput.focus()
      }
    } else if (timeType === 'secTen') {
      if (!isNaN(newCounter)) {
        if (newCounter > 6) newCounter = 5
        setSecTen(newCounter);
        secInput.focus()
      }
    } else {
      if (!isNaN(newCounter)) setSec(newCounter);
    }
  }

  const deleteInputTime = (timeType) => {
    if (timeType === 'minTen') {
      setMinTen(0);
    } else if (timeType === 'min') {
      minTenInput.focus()
      setMin(0);
    } else if (timeType === 'secTen') {
      minInput.focus()
      setSecTen(0);
    } else if (timeType === 'sec') {
      secTenInput.focus()
      setSec(0);
    }
  }

  const handleInputEnter = (e, countDownType, timeType) => {
    if (e.key === "Enter") {
      handleCountDownType(countDownType);
    } else if (e.key === 'Backspace') {
      deleteInputTime(timeType)
    }
  };


  const handleCountDownType = (type) => {
    if (type !== countDownType) {
      if (type === "start") {
        console.log('newCounter', minTen, min, secTen, sec)
        const newCounter = minTen * 10 * 60 + min * 60 + secTen * 10 + sec
        console.log('newCounter', newCounter)
        if (!isNaN(newCounter)) {
          setCounter(newCounter);
          console.log('counter', counter)
          if (newCounter && newCounter !== 0) {
            setCountDownType(type);
          } else {
            const notifyObj = {
              msg: "Please input timer",
              type: "error",
            };
            dispatch(notifyMessage(notifyObj));
          }
        }
      } else if (type === "stop") {
        if (counter && counter !== 0) {
        } else {
          const notifyObj = {
            msg: "Please input timer",
            type: "error",
          };
          dispatch(notifyMessage(notifyObj));
        }
      } else {
        setCountDownType(type);
      }
      if (type === "set") setCounter(0);
    }
  };

  return (
    <div className="countDown row h-100">
      {countDownType === "set" ? (
        <div className="countDown-clock flex-center">
          <SvgCircle>
            <div className="flex no-wrap text-white" style={{fontSize: '50px'}}>
              <input
                className="countDown-clock-input"
                maxLength="3"
                type="text"
                ref={(input) => { minTenInput = input; }}
                value={minTen}
                onChange={e => handleInputTime(e,'minTen')}
                onKeyDown={(e) => handleInputEnter(e, "start")}
              />
              <input
                className="countDown-clock-input"
                maxLength="3"
                type="text"
                ref={(input) => { minInput = input; }}
                value={min}
                onChange={e => handleInputTime(e,'min')}
                onKeyDown={(e) => handleInputEnter(e, "start", 'min')}
              />
              :
              <input
                className="countDown-clock-input"
                maxLength="3"
                type="text"
                ref={(input) => { secTenInput = input; }}
                value={secTen}
                onChange={e => handleInputTime(e,'secTen')}
                onKeyDown={(e) => handleInputEnter(e, "start", 'secTen')}
              />
              <input
                className="countDown-clock-input"
                maxLength="3"
                type="text"
                ref={(input) => { secInput = input; }}
                value={sec}
                onChange={e => handleInputTime(e,'sec')}
                onKeyDown={(e) => handleInputEnter(e, "start", 'sec')}
              />
            </div>
          </SvgCircle>
        </div>
      ) : (
        <div className="countDown-clock flex-center">
          <SvgCircle max={counterMax} done={counter}>
            <div className="flex no-wrap text-white" style={{fontSize: '50px'}}>
              {minTen}{min}:{secTen}{sec}
            </div>
          </SvgCircle>
        </div>
      )}
      <div className="countDown-bg--right col-7 h-100">
        <div className="countDown-panel">
          <div className="d-flex justify-content-between mb-3">
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleCountDownType("start")}
              >
                Start
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleCountDownType("stop")}
              >
                Stop
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div className="mb-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleCountDownType("set")}
              >
                Reset
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleSelectMode("init")}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="countDown-bg--left col-5 h-100"></div>
    </div>
  );
};

export default CountDown;
