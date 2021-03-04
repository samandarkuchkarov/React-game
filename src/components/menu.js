import {NavLink } from "react-router-dom";
export const Menu = ({volume,setVolume}) =>{
    const remove = ()=>{
        if(volume < 0.1){
            setVolume(0);
            let audio = new Audio('/open.mp3');
            audio.volume = 0;
            return
        }else{
            setVolume((Number(volume-0.1)).toFixed(2));
            let audio = new Audio('/open.mp3');
            audio.volume = volume;
            audio.play()
        }
       
    }
    const add = ()=>{
        if(volume >0.91){
            return
        }
        console.log(volume)
        setVolume((Number(volume)+0.1).toFixed(2));
        let audio = new Audio('/open.mp3');
        audio.volume = volume;
        audio.play()
    }
    return(
    <div className = 'menu-page'>
        <div className = "menu">
            <NavLink to = '/game'>NEW GAME</NavLink>
            <div className='audio-block'><img className ='audio-img' alt = 'audioImg' src="https://img.icons8.com/carbon-copy/100/000000/high-volume.png"/>
                <div className = 'audio-container'>
                    <div onClick={remove} className = 'row left'>{'<'}</div><div className='volume'>{volume*100}</div><div onClick={add} className = 'row left'>{'>'}</div>
                </div>
            </div>
        </div>
    </div>
        
    )
}