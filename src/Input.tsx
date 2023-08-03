import React from 'react';

type InputProps = {
  value: string
  handleChange: (event: React.ChangeEvent) => void
}

const Input = ({ value, handleChange } : InputProps) => {
  return (
    <div>
      <input type='text' value={value} onChange={handleChange}/>
    </div>
  )
}

export default Input