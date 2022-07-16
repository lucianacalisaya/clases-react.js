import "Navbar.css";
import Button from "Button.js";
import React from 'React';

const hola= 'Hice click'
const handleClick = () => {
    console.log(hola)
}

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div>
                <h1>E-commerce</h1>
            </div>
            <div>
                {React.createElement(Button, {label: 'Prueba', color: 'pink'} )};
                <Button handleClick={handleClick} />
            </div>
        </nav>
    )
};

export default Navbar