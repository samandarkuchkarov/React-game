import {useHistory} from 'react-router-dom'

export const Win=()=>{
    const history = useHistory()
return(
    <div className='menu-page' style={{backgroundImage:'url(https://wallpaperaccess.com/full/669166.jpg'}}>
        <div onClick = {()=>{
            history.push('/')
        }} className = 'win' style={{backgroundImage:'url(/win.png)'}}></div>
    </div>
)
}