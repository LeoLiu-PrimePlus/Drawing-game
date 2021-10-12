import "./style.scss";
import Button from '../common/Button'
import { useSelector } from "react-redux";
import { selectDrawingLists } from "../../store/selectors";

const Winner = ({ handleSelectMode }) => {
  const drawingLists = useSelector(selectDrawingLists);

  return (
    <div className="winner h-100">
      <div className="winner-content flex-center mb-4 text-white">
        {drawingLists.length > 0 ? (
          <div className="winner-content-tip">
            Congratulation for the drawing game winner!!
            <br />
            <div className="winner-content-tip-text flex-center">
              {
                drawingLists[Math.floor(Math.random() * drawingLists.length)]
                  .name
              }
            </div>
          </div>
        ) : (
          "There's no drawing lists, please add one at least."
        )}
      </div>
      <div className="flex-center">
        <Button label={'Play again~!'} className={'winner-btn btn text-white fs-5'} param={'init'} handleClick={handleSelectMode}>
          <i className="fas fa-redo-alt text-white me-2"></i>
        </Button>
      </div>
    </div>
  );
};

export default Winner;
