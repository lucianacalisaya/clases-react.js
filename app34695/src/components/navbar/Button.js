const Button = (props) => {
    return <button onClick={props.handleClick} style ={{color:[props.color]}}/>
}

export default Button