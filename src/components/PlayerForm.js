import React, {useState} from 'react'

export const PlayerForm = ({addPlayer}) => {
  const [value, setValue] = useState("")
  const handleSubmit = e => {
    e.preventDefault();
    addPlayer(value);
    setValue("")
  }

  return (
    <form className='PlayerForm'>

    <input type='text' className='player-input' value={value} 
    placeholder='Name' onChange={(e) => setValue(e.target.value)}/>
    <button type='submit' className='passive-btn' onClick={handleSubmit}>Spielt mit!</button>

    </form>
    
  )
}
