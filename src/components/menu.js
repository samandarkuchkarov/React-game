import {NavLink } from "react-router-dom";
export const Menu = () =>{

    return(
    <div className = 'menu-page'>
        <div className = "menu">
            <NavLink to = '/game'>NEW GAME</NavLink>
        </div>
    </div>
        
    )
}