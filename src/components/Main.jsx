import React, {useState} from 'react'
import Location from './Location';

import { observer } from "mobx-react-lite";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEye } from '@fortawesome/free-solid-svg-icons'

import './Main.scss';

const data = {
    locations: [
        {
            id: 1,
            name: 'testloc.ru_01'
        },
        {
            id: 2,
            name: 'testloc.ru_02'
        },
        {
            id: 3,
            name: 'testloc.ru_03'
        }
    ],
    evironments: [
        {
            id: 1,
            locationId: 1,
            name: 'Test_192.168.220.157'
        },
        {
            id: 2,
            locationId: 1,
            name: 'Test_192.168.220.159'
        },
        {
            id: 3,
            locationId: 2,
            name: 'Test_192.168.220.151'
        },
        {
            id: 4,
            locationId: 2,
            name: 'Test_192.168.220.152'
        },
        {
            id: 5,
            locationId: 3,
            name: 'Test_192.168.220.153'
        },
        {
            id: 6,
            locationId: 4,
            name: 'Test_192.168.220.154'
        }
    ],
    servers: [
        {
            id: 1,
            locationId: 1,
            name: 'MPTEST43'
        },
        {
            id: 2,
            locationId: 1,
            name: 'MPTEST44'
        },
        {
            id: 3,
            locationId: 2,
            name: 'MPTEST41'
        },
        {
            id: 4,
            locationId: 2,
            name: 'MPTEST42'
        },
        {
            id: 5,
            locationId: 3,
            name: 'MPTEST45'
        },
        {
            id: 6,
            locationId: 3,
            name: 'MPTEST46'
        }
    ]
}

const testData = [
    {
        testLocationId: 0,
        name: "Тестовая локация 1",
        locationID: 1, 
        envID: 2, 
        hint: 'stringdyjjjj',
        servers: [1, 2]
    },
    {
        testLocationId: 1,
        name: "Тестовая локация 2",
        locationID: 2, 
        envID: 2, 
        hint: 'stringdyjjjj',
        servers: [1, 2]
    }
]

function Main() {
    const [testLocationsList, setTestLocationsList] = useState([]);
  return (
    <div className='mainContainer'>
        <h1>Тестовые локации</h1>
        <ul className='testLocationsList'>
            {testData.map((testLocationData, index) => 
            (
                <Location key={index} data={data} testLocationData={testLocationData} />
            ))}
        </ul>
        <div className='buttonsContainer'>
            <div className='showButton button' onClick={() => 
                console.log(testLocationsList)
            }>
                <FontAwesomeIcon icon={faEye} size={'lg'} />
                Вывести результат в консоль
            </div>
            <div className='addButton button'>
                <FontAwesomeIcon icon={faPlus} size={'xl'} />
                Добавить тестовую локацию...
            </div>
        </div>
    </div>
  )
}

export default Main

// [{locationID: number, envID: number, hint: string}]