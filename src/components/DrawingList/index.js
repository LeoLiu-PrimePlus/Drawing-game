import './style.scss';
import nameData from '../../data/name.json'
import { useSelector, useDispatch } from 'react-redux';
import { selectDrawingLists } from '../../store/selectors';
import { addDrawingList, generateNameLists, deleteDrawingList, deleteAllDrawingLists } from '../../store/actions';
import { useState } from 'react'

const DrawingList = ({ className }) => {
    const drawingLists = useSelector(selectDrawingLists);
    const dispatch = useDispatch();
    const [name , setName] = useState('');
    const [deleteDrawingLists, setDeleteDrawingLists] = useState([]);
    console.log('drawingLists', drawingLists)

    const handleInputChange = (e) => {
        setName(e.target.value);
    }

    const handleInputEnter = (e) => {
        if (e.key === 'Enter') {
            setName(e.target.value);
            handleAddList();
        }
    }

    const handleCheckBoxChange = (e, id) => {
        console.log(e.target.checked, id);
        if (e.target.checked) {
            const deleteLists = [...deleteDrawingLists, id];
            setDeleteDrawingLists(deleteLists);
        }
    }

    const handleAddList = () => {
        const duplicateName = drawingLists.some(item => {
            console.log(item.name, name)
            return item.name === name
        })
        console.log('duplicateName', duplicateName)
        if (!duplicateName) {
            dispatch(addDrawingList(name));
            setName('');
        }
    }

    const handleDeleteList = () => {
        console.log('deleteDrawingLists', deleteDrawingLists);
        dispatch(deleteDrawingList(deleteDrawingLists));
    }

    const handleDeleteAllLists = () => {
        dispatch(deleteAllDrawingLists());
    }

    const handleGengerateNameList = () => {
        const newDrawingLists = [...Array(20)].map(() => randGenerateName())
        console.log(newDrawingLists)
        dispatch(generateNameLists(newDrawingLists))
    }

    const randGenerateName = () => {
        const numNameParts = Math.floor(Math.random() * 4) + 1;
        let randName = nameData.firstNameParts[Math.floor(Math.random() * nameData.firstNameParts.length)];
        [...Array(numNameParts)].forEach(name => {
            let newNamePart = '';
            if (/[^aeiou]/.test(randName[randName.length - 1])) {
                newNamePart = nameData.otherNamePartsNonVowel[Math.floor(Math.random() * nameData.otherNamePartsNonVowel.length)];
            } else {
                newNamePart = nameData.otherNamePartsVowel[Math.floor(Math.random() * nameData.otherNamePartsVowel.length)];
            }
            randName += newNamePart
        })
        return randName
    }

    return (
        <div className={`${className} drawingList`}>
            <div className="mb-2">
                <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => handleGengerateNameList()}>Generate new lists</button>
            </div>
            <div className="mb-2">
                <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => handleDeleteList()}>Delete selected list</button>
            </div>
            <div className="mb-2">
                <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => handleDeleteAllLists()}>Delete all drawing list</button>
            </div>
            <div className="input-group-sm mb-2">
                <input type="text" className="form-control mb-1" value={name} onChange={(e) => handleInputChange(e)} onKeyDown={e => handleInputEnter(e)} placeholder="Add list" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => handleAddList()}>Add list</button>
            </div>
            <div className="drawingList-lists list-group border-m shadow">
                {
                    drawingLists.map(list => (
                        <label className="list-group-item rounded-0" key={list.id}>
                            <input className="form-check-input me-1" type="checkbox" onChange={(e) => handleCheckBoxChange(e, list.id)} value="" />
                            { list.name }
                        </label>
                    ))
                }
            </div>
        </div>
    );
}


export default DrawingList;