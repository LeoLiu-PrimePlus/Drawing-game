import './style.scss';
import { useState, useEffect } from 'react';
import SvgCircle from '../SvgCircle';

const CountDown = ({handleSelectMode}) => {
    const [countDownType, setCountDownType] = useState('set')
    const [counter, setCounter] = useState(0);
    const [counterMax, setMax] = useState(0);

    useEffect(() => {
        const timer = countDownType === 'start' && counter >= 0 && setInterval(() => {
            if (counter > 0) {
                setCounter(counter - 1)
            } else {
                handleSelectMode('drawing');
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [counter, countDownType, handleSelectMode]);

    useEffect(() => {
        if (countDownType === 'set') {
            setMax(0)
        } else if (countDownType === 'start') {
            if (counterMax === 0) {
                setMax(counter)
            }
        }
    }, [counter, countDownType, counterMax])

    const handleInputCounter = (e) => {
        const target = e.target.value;
        const newCounter = parseInt(target);
        if (!isNaN(newCounter)) setCounter(newCounter);
    }
    
    const handleCountDownType = (type) => {
        if (type !== countDownType) {
            setCountDownType(type)
            if (type === 'set') setCounter(0)
        };
    }

    const handleInputEnter = (type, e) => {
        if (e.key === 'Enter') handleCountDownType(type)
    }

    return (
        <div className="countDown flex-center">
            <div className="countDown-panel">
                {
                    countDownType === 'set' ? (
                        <div className="countDown-panel-clock mb-3">
                            <SvgCircle>
                                <input className="countDown-panel-input" maxLength="3" type="text" value={counter} onChange={handleInputCounter} onKeyDown={e => handleInputEnter('start', e)} />
                            </SvgCircle>
                        </div>
                    ) : (
                        <div className="countDown-panel-clock mb-3">
                            <SvgCircle max={counterMax} done={counter}>{counter}</SvgCircle>
                        </div>
                    )
                }
                <div className="d-flex justify-content-between mb-3">
                    <div>
                        <button type="button" className="btn btn-primary" onClick={() => handleCountDownType('start')}>Start</button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary" onClick={() => handleCountDownType('stop')}>Stop</button>
                    </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <div className="mb-2">
                        <button type="button" className="btn btn-primary" onClick={() => handleCountDownType('set')}>Reset</button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary" onClick={() => handleSelectMode('init')}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CountDown;