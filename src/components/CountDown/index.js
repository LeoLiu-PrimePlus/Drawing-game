import "./style.scss";
import SvgCircle from "../SvgCircle";
import Button from '../common/Button'
import { useState, useEffect } from "react";
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
          setMinTen(Math.floor(counter / minTen))
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
    if (newCounter >= 10) {
      newCounter = Math.floor(newCounter / 10)
    }
    if (timeType === 'minTen') {
      if (!isNaN(newCounter)) {
        setMinTen(newCounter);
        minInput.focus()
      }
    } else if (timeType === 'min') {
      if (!isNaN(newCounter)) {
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
      if (!isNaN(newCounter)) {
        if (secTen === 6) newCounter = 0
        setSec(newCounter);
      }
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
        const newCounter = minTen * 10 * 60 + min * 60 + secTen * 10 + sec
        if (!isNaN(newCounter)) {
          setCounter(newCounter);
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
          setCountDownType(type);
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
      if (type === "set") {
        setCounter(0);
        setMinTen(0);
        setMin(0);
        setSecTen(0);
        setSec(0);
      }
    }
  };

  return (
    <div className="countDown row h-100">
      {
        countDownType === "set" ? (
          <div className="countDown-circle flex-center">
            <SvgCircle circleBgColor={'#00A7FF'}>
              <div>
                <div className="flex no-wrap mb-2">
                  <input
                    className="countDown-circle-input"
                    maxLength="2"
                    type="text"
                    ref={(input) => { minTenInput = input; }}
                    value={minTen}
                    onChange={e => handleInputTime(e,'minTen')}
                    onKeyDown={(e) => handleInputEnter(e, "start")}
                  />
                  <input
                    className="countDown-circle-input"
                    maxLength="2"
                    type="text"
                    ref={(input) => { minInput = input; }}
                    value={min}
                    onChange={e => handleInputTime(e,'min')}
                    onKeyDown={(e) => handleInputEnter(e, "start", 'min')}
                  />
                  <span>:</span>
                  <input
                    className="countDown-circle-input"
                    maxLength="2"
                    type="text"
                    ref={(input) => { secTenInput = input; }}
                    value={secTen}
                    onChange={e => handleInputTime(e,'secTen')}
                    onKeyDown={(e) => handleInputEnter(e, "start", 'secTen')}
                  />
                  <input
                    className="countDown-circle-input"
                    maxLength="2"
                    type="text"
                    ref={(input) => { secInput = input; }}
                    value={sec}
                    onChange={e => handleInputTime(e,'sec')}
                    onKeyDown={(e) => handleInputEnter(e, "start", 'sec')}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <Button className={'btn countDown-circle-btn'} param={"start"} handleClick={handleCountDownType}>
                    <i className="far fa-play-circle"></i>
                  </Button>
                  <Button className={'btn countDown-circle-btn'} param={"stop"} handleClick={handleCountDownType}>
                    <i className="far fa-pause-circle"></i>
                  </Button>
                  <Button className={'btn countDown-circle-btn'} param={"set"} handleClick={handleCountDownType}>
                    <i className="fas fa-power-off"></i>
                  </Button>
                </div>
              </div>
              
            </SvgCircle>
          </div>
        ) : (
          <div className="countDown-circle flex-center">
            <SvgCircle max={counterMax} done={counter} circleBgColor={'#FFFFFF'} >
              <div className="flex no-wrap countDown-circle-clock mb-2">
                {minTen}{min}:{secTen}{sec}
              </div>
              <div className="d-flex justify-content-between">
                <Button className={'btn countDown-circle-btn--start'} param={"start"} handleClick={handleCountDownType}>
                  <i className="far fa-play-circle"></i>
                </Button>
                <Button className={'btn countDown-circle-btn--start'} param={"stop"} handleClick={handleCountDownType}>
                  <i className="far fa-pause-circle"></i>
                </Button>
                <Button className={'btn countDown-circle-btn--start'} param={"set"} handleClick={handleCountDownType}>
                  <i className="fas fa-power-off"></i>
                </Button>
              </div>
            </SvgCircle>
          </div>
        )
      }
      <div className="countDown-bg--right col-lg-7 col-6 h-100 ps-5">
        <Button label={'Back'} className={'btn btn--desktop px-2 py-1'} param={"init"} handleClick={handleSelectMode}>
          <i className="fas fa-arrow-left me-2"></i>
        </Button>
        <Button label={'Back'} className={'btn btn--mobile px-2 py-1'} param={"selectMode"} handleClick={handleSelectMode}>
          <i className="fas fa-arrow-left me-2"></i>
        </Button>
      </div>
      <div className="countDown-bg--left col-lg-5 col-6 h-100"></div>
    </div>
  );
};

export default CountDown;
