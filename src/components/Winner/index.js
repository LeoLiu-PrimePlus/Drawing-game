import './style.scss';
import { useSelector } from 'react-redux';
import { selectDrawingLists } from '../../store/selectors';

const Winner = ({ handleSelectMode }) => {
    const drawingLists = useSelector(selectDrawingLists);

    return (
        <div>
            <div className="flex-center mb-4">
                {
                    drawingLists.length > 0 ? (
                        <div>
                            Congratulation for the drawing game winner!!<br/>
                            <div className="flex-center text-success fs-3">
                                {drawingLists[Math.floor(Math.random() * drawingLists.length)].name}
                            </div>
                        </div>
                    )
                    :
                    "There's no drawing lists, please add one at least."
                }
            </div>
            <div className="flex-center">
                <button type="button" className="btn btn-primary" onClick={() => handleSelectMode('init')}>Play again~!</button>
            </div>
        </div>
    );
}


export default Winner;