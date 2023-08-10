import React, {useState} from 'react'

export const EditPlayer = ({editPlayer, playername}) => {
  const [value, setValue] = useState(playername.playername)
  const handleSubmit = e => {
    e.preventDefault();
    editPlayer(value, playername.id)
    setValue("")
  }

  return (
    <form className='PlayerForm' onSubmit={handleSubmit}>

    <input type='text' className='player-input' value={value} placeholder='Name' onChange={(e) => setValue(e.target.value)}/>
    <button type='submit' className='passive-btn'>Name ändern</button>

    </form>
  )
}
