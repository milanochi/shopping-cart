import React from 'react';
type ClickProps = {
    handleClick: (event: React.MouseEvent, id: number) => void
}

const ButtonProps = ({ handleClick }: ClickProps) => {
  return (
    <div>
        <button onClick={(event) => handleClick(event, 1)}>Enter</button>
    </div>
  )
}

export default ButtonProps