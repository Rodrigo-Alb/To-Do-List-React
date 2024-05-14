import PropTypes from 'prop-types'


const Button = ({color,text, onClick}) => {
  return (
   <button className ='btn' style = {{backgroundColor:color }} onClick={onClick}>
        {text}
   </button>
  )
}

Button.defaultProps ={
    color:'steelBlue'
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}
export default Button
