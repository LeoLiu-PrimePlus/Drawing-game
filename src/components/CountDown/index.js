import './style.scss'
import { useState, useEffect } from 'react';

const CountDown = ({handleSelectMode}) => {
    const [countDownType, setCountDownType] = useState('set')
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = countDownType === 'start' && counter >= 0 && setInterval(() => {
            if (counter > 0) {
                setCounter(counter - 1)
            } else {
                console.log('too hard')
                handleSelectMode('drawing');
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [counter, countDownType, handleSelectMode]);

    const handleInputCounter = (e) => {
        const target = e.target.value;
        const newCounter = parseInt(target);
        console.log('newCounter', newCounter);
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
        <div>
            <div>
                {
                    countDownType === 'set' ? (
                        <div className="setCountDown-panel">
                            <input type="text" value={counter} onChange={handleInputCounter} onKeyDown={e => handleInputEnter('start', e)} />
                        </div>
                    ) : (
                        <div className="countDown-panel">
                            {counter}
                        </div>
                    )
                }
                <div className="mb-2">
                    <button type="button" className="btn btn-primary" onClick={() => handleCountDownType('start')}>Start</button>
                </div>
                <div className="mb-2">
                    <button type="button" className="btn btn-primary" onClick={() => handleCountDownType('stop')}>Stop</button>
                </div>
                <div className="mb-2">
                    <button type="button" className="btn btn-primary" onClick={() => handleCountDownType('set')}>Reset</button>
                </div>
                <div>
                    <button type="button" className="btn btn-primary" onClick={() => handleSelectMode('init')}>Back</button>
                </div>
            </div>
        </div>
    );
}


export default CountDown;