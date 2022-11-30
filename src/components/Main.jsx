import React, {useState, useEffect, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Location from './Location';

import { observer } from "mobx-react-lite";
import { asyncOp } from "../store/store";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEye } from '@fortawesome/free-solid-svg-icons'

import './Main.scss';

const testData = [
    {
        id: 0,
        locationID: 1, 
        envID: 2, 
        hint: 'stringdyjjjj'
    },
    {
        id: 1,
        locationID: 2, 
        envID: 2, 
        hint: 'stringdyjjjj'
    }
]

// [...]
const Main = observer(function Main() {
    const [testLocationsList, setTestLocationsList] = useState([]);

    useEffect(() => {
        asyncOp.fetch();
    }, [])
    
    const addLocation = () => {
        setTestLocationsList([...testLocationsList, {
            id: uuidv4(),
            locationID: "",
            envID: "",
        }]);
    }

    const deleteLocation = (id) => {
        setTestLocationsList(testLocationsList.filter(location => location.id != id))
    }

    useEffect(() => {
        setTestLocationsList(testData);
    }, []);

  return (
    <div className='mainContainer'>
        <h1>Тестовые локации</h1>
        <ul className='testLocationsList'>
            {testLocationsList.map((testLocationData, index) => 
            (
                <Location key={index} asyncOp={asyncOp} testLocationData={testLocationData} deleteLocation={deleteLocation} setTestLocationsList={setTestLocationsList} testLocationsList={testLocationsList} />
            ))}
        </ul>
        <div className='buttonsContainer'>
            <div className='showButton button' onClick={() => 
                console.log(testLocationsList)
            }>
                <FontAwesomeIcon icon={faEye} size={'lg'} />
                Вывести результат в консоль
            </div>
            <div className='addButton button' onClick={addLocation}>
                <FontAwesomeIcon icon={faPlus} size={'xl'} />
                Добавить тестовую локацию...
            </div>
        </div>
    </div>
  )
});

export default Main

// [{locationID: number, envID: number, hint: string}]