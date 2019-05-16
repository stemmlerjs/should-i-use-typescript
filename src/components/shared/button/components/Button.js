
import React from 'react'
import PropTypes from 'prop-types'
import "../styles/Button.sass"

const Button = (props) => {
  const {
    text,
    onClick,
    className
  } = props;

  return (
    <button 
      className={`button ${className}`}
      onClick={onClick}
    >{text}
    </button>
  )
}

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}