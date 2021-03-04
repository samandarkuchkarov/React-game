import {useRef, useState} from 'react'
import {Statistic} from './Statistic'
import {NavLink} from 'react-router-dom'

export const Gamebord = ({volume}) =>{
    let data = ['alien','ball','baloon','bear','car','cubik','doira','duck','fish','gun','helicopter','horse','lego','minion','plane']
    let arr = useRef(data.concat(data).sort(()=>Math.random() - 0.5))
    const [click,setClick] = useState(0)
    let [winningScore,setWinning] = useState(0)
    let i =0;
    let LastCard =  useRef(['','',''])
    const [disabled,setDisabled] = useState(false)
    let audio = new Audio('/open.mp3')
    audio.volume = volume
    const transform = (e) =>{
        audio.play()
        e.target.parentElement.style.transform='rotateY(180deg)';
        e.target.parentElement.parentElement.style.transform='rotateY(180deg)';
        let currentCard = [e.target.parentElement, e.target.parentElement.parentElement,e.target.className.split(' ')[2]]
        if(LastCard.current[2] === ''){
            LastCard.current = [...currentCard];
        }else {
            if(LastCard.current[2]===currentCard[2]){
                setWinning(winningScore+1)
                LastCard.current =['','','']
            } 
            else{
                setDisabled(true)
                setTimeout(()=>{
                    LastCard.current[0].style.transform='rotateY(0deg)';
                    LastCard.current[1].style.transform='rotateY(0deg)';
                    e.target.parentElement.style.transform='rotateY(0deg)';
                    e.target.parentElement.parentElement.style.transform='rotateY(0deg)';
                    LastCard.current =['','','']
                    setDisabled(false)
                },1400)             
            }
        }
        setClick(click+1)
    }
    return (
        <div >
            <div className ="nav">
                     <NavLink to='/'><div className='home' style = {{backgroundImage:`url(/home.png)`}}></div></NavLink>
            </div>
              <div className = "gameBoard" style={{ 
                     backgroundImage: `url(" /kisspng-picture-frames-art-nouveau-line-pattern-restauration-5b3213e646ca45.23172929153000855029.png")` 
                         }}>
                 <div className="game-zone">
            {arr.current.map(item=>
            <div key ={i++} className="flip-box">
                   <div className="flip-box-inner">
                     <button disabled = {disabled} className={`flip-box-front card ${item}`} onClick={transform} style={{ 
                        backgroundImage: `url("/—Pngtree—lovely cartoon sunflower elements background_3663895.png")`}}>
                     </button>
                  <div className="flip-box-back card" style = {{backgroundImage:`url(/${item}.png)`}}>
                  </div>
               </div>
          </div>)}
            </div>

              </div>
            <Statistic click = {click} openCard = {winningScore*2}/>
          </div>
    )
}