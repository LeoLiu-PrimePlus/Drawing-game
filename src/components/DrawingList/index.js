import "./style.scss";
import nameData from "../../data/name.json";
import Button from '../common/Button'
import { useSelector, useDispatch } from "react-redux";
import { selectDrawingLists } from "../../store/selectors";
import {
  addDrawingList,
  generateNameLists,
  deleteDrawingList,
  deleteAllDrawingLists,
  notifyMessage,
  changeStep
} from "../../store/actions";
import { useState } from "react";

const DrawingList = ({ className }) => {
  const drawingLists = useSelector(selectDrawingLists);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [deleteDrawingLists, setDeleteDrawingLists] = useState([]);
  const [toggleLists, setToggleLists] = useState(false);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleInputEnter = (e) => {
    if (e.key === "Enter") {
      setName(e.target.value);
      handleAddList();
    }
  };

  const handleCheckBoxChange = (e, id) => {
    if (e.target.checked) {
      const deleteLists = [...deleteDrawingLists, id];
      setDeleteDrawingLists(deleteLists);
    }
  };

  const handleAddList = () => {
    const duplicateName = drawingLists.some((item) => {
      return item.name === name;
    });
    if (!duplicateName && name !== "") {
      dispatch(addDrawingList(name));
      setName("");
    } else if (duplicateName) {
      const notifyObj = {
        msg: "Duplicate Name",
        type: "error",
      };
      dispatch(notifyMessage(notifyObj));
    } else if (name === "") {
      const notifyObj = {
        msg: "Should add a name",
        type: "error",
      };
      dispatch(notifyMessage(notifyObj));
    }
  };

  const handleDeleteList = () => {
    dispatch(deleteDrawingList(deleteDrawingLists));
  };

  const handleDeleteAllLists = () => {
    dispatch(deleteAllDrawingLists());
  };

  const handleGengerateNameList = () => {
    const newDrawingLists = [...Array(20)].map(() => randGenerateName());
    dispatch(generateNameLists(newDrawingLists));
  };

  const randGenerateName = () => {
    const numNameParts = Math.floor(Math.random() * 4) + 1;
    let randName =
      nameData.firstNameParts[
        Math.floor(Math.random() * nameData.firstNameParts.length)
      ];
    [...Array(numNameParts)].forEach((name) => {
      let newNamePart = "";
      if (/[^aeiou]/.test(randName[randName.length - 1])) {
        newNamePart =
          nameData.otherNamePartsNonVowel[
            Math.floor(Math.random() * nameData.otherNamePartsNonVowel.length)
          ];
      } else {
        newNamePart =
          nameData.otherNamePartsVowel[
            Math.floor(Math.random() * nameData.otherNamePartsVowel.length)
          ];
      }
      randName += newNamePart;
    });
    return randName;
  };

  const handleToggleLists = () => {
    setToggleLists(!toggleLists);
  };

  const handleNextToCountDown = () => {
    if (drawingLists.length === 0) {
      const notifyObj = {
        msg: "Add one list at least!",
        type: "error",
      };
      dispatch(notifyMessage(notifyObj));
    } else {
      dispatch(changeStep('selectMode'));
    }
  }

  return (
    <div className={`${className} drawingList`}>
      <div className="mb-1 d-flex align-items-center">
        <Button label={'Generate new lists'} className={'btn text-white'} handleClick={handleGengerateNameList}>
          <i className="fas fa-plus text-white me-2"></i>
        </Button>
      </div>
      <div className="mb-1">
        <Button label={'Delete selected list'} className={'btn text-white'} handleClick={handleDeleteList}>
          <i className="far fa-trash-alt text-white me-2"></i>
        </Button>
      </div>
      <div className="mb-1">
        <Button label={'Delete all drawing list'} className={'btn text-white'} handleClick={handleDeleteAllLists}>
          <i className="far fa-trash-alt text-white me-2"></i>
        </Button>
      </div>
      <div className="drawingList-input-group input-group-sm d-flex">
        <input
          type="text"
          className="w-50 form-control"
          value={name}
          onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => handleInputEnter(e)}
          placeholder="Add list"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <Button className={'btn btn-sm bg-white'} handleClick={handleAddList}>
          <i className="drawingList-input-icon fas fa-plus"></i>
        </Button>
      </div>
      <div
        className="drawingList-lists list-group mb-2"
      >
        <h4 className={`drawingList-lists-header text-white ${drawingLists.length > 0 ? 'drawingList-lists-header--expand' : ''}`}>
          Drawing lists
        </h4>
        {
          drawingLists.length > 0 &&
          <div
            className="drawingList-lists-toggle"
            onClick={() => handleToggleLists()}
          >
            Toggle lists
          </div>
        }
        <div className={`drawingList-lists-content ${
          toggleLists ? "drawingList-lists-content-hide" : ""
        }`}>
          {drawingLists.length > 0 ? (
            drawingLists.map((list) => (
              <label className="list-group-item rounded-0 text-white" key={list.id}>
                <input className="form-check-input me-1" type="radio" onChange={(e) => handleCheckBoxChange(e, list.id)} />
                {list.name}
              </label>
            ))
          ) : (
            <div className="text-white p-2">
              There's no drawing lists, please add one at least.
            </div>
          )}
        </div>
      </div>
      <Button label={'Next'} className={'drawingList-btn btn text-white'} handleClick={handleNextToCountDown} />
    </div>
  );
};

export default DrawingList;
