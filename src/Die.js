import "./Die.css";

const Die = props => {
  return (
    <i className={`Die fas fa-dice-${props.face} ${props.rolling && 'shaking'}`}></i>
  )
}

export default Die;