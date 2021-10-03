import './style.scss'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import CountDown from '../CountDown'
import { selectDrawingLists } from '../../store/selectors';

const DrawingView = ({ className }) => {
    const drawingLists = useSelector(selectDrawingLists);
    const [step, setStep] = useState('init');

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
                        Congratulation for the drawing game winner!!
                        <h2>
                            {
                                drawingLists.length > 0 ?
                                drawingLists[Math.floor(Math.random() * drawingLists.length)].name :
                                "There's no drawing list, please add one at least."
                            }
                        </h2>
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