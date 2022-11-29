import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faVial, faLocationDot, faServer, faQuestion } from '@fortawesome/free-solid-svg-icons'

import './Location.scss';

function Location({testLocationData, data}) {
    const servers = data.servers.map(server => server.name + ", ");

  return (
    <div className='locationContainer'>
        <div className='locationHeader'>
            <h2>
                <FontAwesomeIcon size={"xl"} icon={faVial} />
                <span>{testLocationData.name}</span>
            </h2>
            <FontAwesomeIcon icon={faTrashCan} color={"red"} />
        </div>
            <div className='testLocationData'>
                <div className='parameter'>
                    <label for="location">Локация</label>
                    <select id="location">
                        <FontAwesomeIcon icon={faLocationDot} />
                        {data.locations.map(location => 
                            <option>{location.name}</option>
                        )}
                    </select>
                </div>

                <div className='parameter'>
                    <label for="environment">Среда</label>
                    <select id="environment">
                        {data.evironments.map(evironment => 
                            <option>{evironment.name}</option>
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
                <input id="hint" type="text" placeholder='Комментарий по локации' />
            </div>
    </div>
  )
}

export default Location