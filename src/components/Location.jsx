import React, {useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faVial, faLocationDot, faServer, faQuestion } from '@fortawesome/free-solid-svg-icons'

import './Location.scss';

function Location({testLocationData, asyncOp, deleteLocation, setTestLocationsList, testLocationsList}) {
    const [selectedLocation, setSelectedLocation] = useState(asyncOp.locations[0] && asyncOp.locations[0].id);
    const [active, setActive] = useState(false);

    const filteredEnv = asyncOp.environments.filter(env => env.locationId === selectedLocation);
    const filteredServers = asyncOp.servers.filter(server => server.locationId === selectedLocation);

    const servers = filteredServers.map(server => server.name).join(', ');

    const locEl = useRef(null);

    useEffect(() => {
        const onClick = e => {
            if (locEl.current.contains(e.target)) {
                setActive(true);
            } else {
                setActive(false);
            }
        }
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
      }, []);

  return (
    <div ref={locEl} className={`locationContainer ${active ? 'active' : ""}`}>
        <div className='locationHeader'>
            <h2>
                <FontAwesomeIcon size={"xl"} icon={faVial} />
                <span>{`Тестовая локация ${testLocationData.id}`}</span>
            </h2>
            <FontAwesomeIcon className='trashButton' onClick={() => deleteLocation(testLocationData.id)} icon={faTrashCan} color={"red"} />
        </div>
            <div className='testLocationData'>
                <div className='parameter'>
                    <label for="location">Локация</label>
                    <select onChange={(e) => {
                        const locationID = asyncOp.locations.find(location => location.name === e.target.value).id;
                        setSelectedLocation(locationID);

                        setTestLocationsList(testLocationsList.map(loc => (loc.id === testLocationData.id ? Object.assign({}, loc, {locationID}) : loc)));
                    }} id="location">
                        <FontAwesomeIcon icon={faLocationDot} />
                        {asyncOp.locations.map((location, index) => 
                            <option key={index}>{location.name}</option>
                        )}
                    </select>
                </div>

                <div className='parameter'>
                    <label for="environment">Среда</label>
                    <select id="environment" onChange={(e) => {
                        const envID = asyncOp.environments.find(env => env.name === e.target.value).id;

                        setTestLocationsList(testLocationsList.map(loc => (loc.id === testLocationData.id ? Object.assign({}, loc, {envID}) : loc)));
                    }}>
                        {filteredEnv.map((environment, index) => 
                            <option key={index}>{environment.name}</option>
                        )}
                    </select>
                </div>
                   
                <p className='parameter'>
                    Серверы:  
                    <FontAwesomeIcon icon={faServer} />
                    <span>{servers}</span>
                </p>
            </div>
            <div className='hintContainer'>
                <label for="hint">Подсказка</label>
                <input id="hint" onChange={(e) => {
                    const hint = e.target.value;
                    setTestLocationsList(testLocationsList.map(loc => (loc.id === testLocationData.id ? Object.assign({}, loc, {hint}) : loc)));
                }} type="text" placeholder='Комментарий по локации' />
            </div>
    </div>
  )
}

export default Location