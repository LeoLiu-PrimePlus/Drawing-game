import './style.scss';
import { useState } from 'react';
import CountDown from '../CountDown';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Winner from '../Winner'

const DrawingView = ({ className }) => {
    const [step, setStep] = useState('init');

    const handleSelectMode = (type) => {
        if (type !== step) {
            setStep(type)
        }
    }

    return (
        <div className={`${className} drawingView flex-center`}>
            <SwitchTransition mode={'out-in'}>
                <CSSTransition
                    key={step}
                    addEndListener={(node, done) => {
                    node.addEventListener("transitionend", done, false);
                    }}
                    classNames="fade"
                >
                    {
                        step === 'init' ? (
                            <div className="drawingView-panel flex-center">
                                {
                                    step === 'init' ? (
                                        <div>
                                            <div className="mb-4">
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
                        ) : step === 'countDown' ? (
                            <div className="drawingView-panel flex-center">
                                <CountDown handleSelectMode={handleSelectMode} />
                            </div> 
                        ) : <Winner handleSelectMode={handleSelectMode} />
                    }
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
}


export default DrawingView;