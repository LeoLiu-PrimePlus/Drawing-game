import './style.scss'
import { useState } from 'react';
import CountDown from '../CountDown'

const DrawingView = ({ className }) => {
    console.log('DrawingView render')
    const [step, setStep] = useState('init')

    const handleSelectMode = (type) => {
        if (type !== step) {
            setStep(type)
        }
    }

    return (
        <div className={`${className} drawingView flex-center`}>
            {
                step !== 'drawing' ? (
                    <div className="drawingView-panel flex-center">
                        {
                            step === 'init' ? (
                                <div>
                                    <div className="mb-2">
                                        <button type="button" className="btn btn-primary" onClick={() => handleSelectMode('drawing')}>Start without set countdown</button>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-primary" onClick={() => handleSelectMode('countDown')}>Start set countdown</button>
                                    </div>
                                </div>
                            ) :
                            step === 'countDown' && <CountDown handleSelectMode={handleSelectMode}  />
                        }
                    </div> 
                ) : (
                    <div>
                        drawing~!!
                        <div>
                            <button type="button" className="btn btn-primary" onClick={() => handleSelectMode('init')}>Play again~!</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}


export default DrawingView;