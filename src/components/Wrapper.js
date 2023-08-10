import React, {useState} from 'react'
import { PlayerForm } from './PlayerForm'
import {v4 as uuidv4} from 'uuid';
import { Player } from './Player';
import { EditPlayer } from './EditPlayer';
uuidv4();

export const Wrapper = () => {
  const [players, setPlayers] = useState([])



  const addPlayerHandler = (player) => {
    setPlayers([...players, {
      id: uuidv4(),
      playername: player,
      isEditing: false,
      wertStiche: 0,
      wertKaro: 0,
      wertDame: 0,
      wertKoenig: 0,
      wertAlles: 0,
      wertRenz: 0,
      gameOn: false,
    }])
  }


  const [spielStart, setspielStart] = useState(false)

  const spielStartHandler = () => {
    setspielStart(true)
    return spielStart
  }

  const gameOn = id => {
    setPlayers(players.map(player => player.id === id ? {...player, gameOn: !player.true} : player))
  }

  const deletePlayer = id => {
    setPlayers(players.filter(player => player.id !== id))
  }

  const editPlayer = id => {
    setPlayers(players.map(player => player.id === id ? {... player, isEditing: !player.isEditing} : player))
  }

  const editPlayerName = (playername, id) => {
    setPlayers(players.map(player => player.id === id ? {... player, playername, isEditing: ! player.isEditing} : player))
  }

  const editWert = (id, column, wert) => {
    const currentState = [...players]

    const newState = currentState.map(player => {

      if (player.id === id) {
        
        if(column === 1 ) {
          return {
            ...player,
            wertStiche: wert
            }
          } else if (column === 2) {
            return {
              ...player,
              wertKaro: wert
            }
          } else if (column === 3) {
            return {
              ...player,
              wertDame : wert
            }
          } else if (column === 4) {
            return {
              ...player,
              wertKoenig : wert
            }
          } else if (column === 5) {
            return {
              ...player,
              wertAlles : wert
            }
          } else if (column === 6) {
            return {
              ...player,
              wertRenz : wert
            }
          }

        } else {
          return player
        }
        } )

        setPlayers(newState)


      }
  
  let SumCol1 = 0
  for( let i=0; i < players.length; i++) {

    if( players[i].wertStiche !== undefined) {
      SumCol1 = SumCol1 + players[i].wertStiche
    }

  }

  let SumCol2 = 0
  for( let i=0; i < players.length; i++) {
    if( players[i].wertKaro !== undefined) {
      SumCol2 = SumCol2 + players[i].wertKaro
    }
  }

  let SumCol3 = 0
  for( let i=0; i < players.length; i++) {
    if( players[i].wertDame !== undefined) {
      SumCol3 = SumCol3 + players[i].wertDame
    }
  }

  let SumCol4 = 0
  for( let i=0; i < players.length; i++) {
    if( players[i].wertKoenig !== undefined) {
      SumCol4 = SumCol4 + players[i].wertKoenig
    }
  }

  let SumCol5 = 0
  for( let i=0; i < players.length; i++) {
    if( players[i].wertAlles !== undefined) {
      SumCol5 = SumCol5 + players[i].wertAlles
    }
  }

  let SumCol6 = 0
  for( let i=0; i < players.length; i++) {
    if( players[i].wertRenz !== undefined) {
      SumCol6 = SumCol6 + players[i].wertRenz
    }
  }
  
  let anzahlSpieler = ""
  let SpielAnleitung = ""
  let maxStiche = 0
  let maxKaro = 0
  let maxDame = -80
  let maxKoenig = -80
  let maxAlles = 0
  let maxRenz = 0
  let highestRenz = 0

  switch(players.length) {
    case 3:
            anzahlSpieler = "3 Spielende"
            SpielAnleitung = "3 Spielende | 24 Karten (9 bis Ass) | Bube ist die Mitte"
            maxStiche = -80
            maxKaro = -60
            maxAlles = -300
            maxRenz = 150
            highestRenz = 100
            break;
        case 4:
            anzahlSpieler = "4 Spielende"
            SpielAnleitung = "4 Spielende | 32 Karten (7 bis Ass) | Bube ist die Mitte"
            maxStiche = -80
            maxKaro = -80
            maxAlles = -320
            maxRenz = 300
            highestRenz = 150
            break;
        case 5:
            anzahlSpieler = "5 Spielende"
            SpielAnleitung = "5 Spielende | 40 Karten (5 bis Ass) | 10 ist die Mitte"
            maxStiche = -80
            maxKaro = -100
            maxAlles = -340
            maxRenz = 500
            highestRenz = 200
            break;
        case 6:
            anzahlSpieler = "6 Spielende"
            SpielAnleitung = "6 Spielende | 48 Karten (3 bis Ass) | 9 ist die Mitte"
            maxStiche = -80
            maxKaro = -120
            maxAlles = -360
            maxRenz = 750
            highestRenz = 250
            break;
        default:
            SpielAnleitung = ""
        break;
  }


  return (
    
    <div className='Wrapper'>

      <h1>Renz</h1>
      <h2>{SpielAnleitung}</h2>

      {players.map((player, index) => (

        player.isEditing ? (
          <EditPlayer editPlayer={editPlayerName} playername={player}/>
        ) : (

        <Player playername={player} key={index} 
        deletePlayer={deletePlayer}
        editPlayer={editPlayer}

        editWert={(column,wert) => {

          const id = player.id

          if (isNaN(wert) === true) {
            editWert(id,column,0)
          } else {
            editWert(id,column,wert)
          }

        }}

        gameOn = {spielStart}
        
        />
        )

      ))}
  
      {spielStart !== true && players.length < 6 && <PlayerForm addPlayer={(x) => {addPlayerHandler(x)}}/>}
      

      {/* hier kommt die ganze summary chose rein */}

      {spielStart !== false &&
      
      <div className='summaryWrapper'>
      <div className='Summary'>

  
        
      <div className='summaryText'>
        <p>Stiche</p>
        {SumCol1 >= maxStiche &&
          <p className='black'> {SumCol1 + "/" + maxStiche}</p>}
        {SumCol1 < maxStiche &&
          <p className='red'> {SumCol1 + "/" + maxStiche}</p>}
      </div> 

      <div className='summaryText'>
        <p>Karo</p>
        {SumCol2 >= maxKaro &&
          <p className='black'> {SumCol2 + "/" + maxKaro}</p>}
        {SumCol2 < maxKaro &&
          <p className='red'> {SumCol2 + "/" + maxKaro}</p>}
      </div> 

      <div className='summaryText'>
        <p>Damen</p>
        {SumCol3 >= maxDame &&
          <p className='black'> {SumCol3 + "/" + maxDame}</p>}
        {SumCol3 < maxDame &&
          <p className='red'> {SumCol3 + "/" + maxDame}</p>}
      </div>  

      <div className='summaryText'>
        <p>❤️ König</p>
        {SumCol4 >= maxKoenig &&
          <p className='black'> {SumCol4 + "/" + maxKoenig}</p>}
        {SumCol4 < maxKoenig &&
          <p className='red'> {SumCol4 + "/" + maxKoenig}</p>}
      </div> 

      <div className='summaryText'>
        <p>Alles</p>
        {SumCol5 >= maxAlles &&
          <p className='black'> {SumCol5 + "/" + maxAlles}</p>}
        {SumCol5 < maxAlles &&
          <p className='red'> {SumCol5 + "/" + maxAlles}</p>}
      </div> 

      <div className='summaryText'>
        <p>{"max"}</p>

        {SumCol6 <= maxRenz &&
          <p className='black'> {"+" + highestRenz}</p>}
        {SumCol6 > maxRenz &&
          <p className='red'> {"+" + highestRenz}</p>}
      </div> 


      </div>
      </div>

      }


      {players.length >= 1 && players.length < 3 && players.length <= 6 &&
        <div className='spielInfo'>
          <p>{"Mindestens 3 Spielende!"}</p>
        </div>}

      {spielStart === false && players.length >= 3 && players.length <= 6 && <button type='submit' className='active-btn' onClick={spielStartHandler}>Spiel starten</button>}

    </div>
  )
}
