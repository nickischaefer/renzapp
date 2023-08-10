import React from 'react'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {editIcon} from './edit-icon.svg'
import { EditPlayer } from './EditPlayer'


export const Player = ({playername, deletePlayer, editPlayer, editWert, gameOn}) => {

  const handleChangeInput = (evt, column) => {
    const wert = parseInt (evt.target.value)
    editWert(column,wert)

    console.log(gameOn)
  }

  return (
    <div className='Player'>

      <div className='PlayerName'>
      <p>{playername.playername}</p>
      </div>


      {gameOn === true &&
      <div className='Table'>

        <div className='Columns'>
          <input type='number' className='ColumnInput' name='Stiche' onChange={(evt) => {
            handleChangeInput(evt,1)
          }}>
          </input>
          <p className='Description'>Stiche</p>
        </div>

        <div className='Columns'>
          <input type='number' className='ColumnInput' name='Karo' onChange={(evt) => {
            handleChangeInput(evt,2)
          }}>
          </input>
          <p className='Description'>Karo</p>
        </div>

        <div className='Columns'>
          <input type='number' className='ColumnInput' name='Damen' onChange={(evt) => {
            handleChangeInput(evt,3)
          }}>
          </input>
          <p className='Description'>Damen</p>
        </div>

        <div className='Columns'>
          <input type='number' className='ColumnInput' name='König' onChange={(evt) => {
            handleChangeInput(evt,4)
          }}>
          </input>
          <p className='Description'>❤ König</p>
        </div>

        <div className='Columns'>
          <input type='number' className='ColumnInput' name='Alles' onChange={(evt) => {
            handleChangeInput(evt,5)
          }}>
          </input>
          <p className='Description'>Alles</p>
        </div>

        <div className='Columns'>
          <input type='number' className='ColumnInput' name='Renz' onChange={(evt) => {
            handleChangeInput(evt,6)
          }}>
          </input>
          <p className='Description'>Renz</p>
        </div>

      </div>}

     
      {gameOn === true && <p className='PlayerScore'>{playername.wertStiche + playername.wertKaro + playername.wertDame + playername.wertKoenig + playername.wertAlles + playername.wertRenz}</p>}

      {gameOn === false &&
      <div className='icons'>
        <FontAwesomeIcon icon={faPenToSquare} className='icon-style' onClick={() => editPlayer(playername.id)} />
        <FontAwesomeIcon icon={faTrash} className='icon-style' onClick={() => deletePlayer(playername.id)}/>
      </div>}

    </div>
  )
}
