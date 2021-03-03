import {useRef, useState} from 'react'

export const Gamebord = () =>{
    let data = ['alien','ball','baloon','bear','car','cubik','doira','duck','fish','gun','helicopter','horse','lego','minion','plane']
    let arr = useRef(data.concat(data).sort(()=>Math.random() - 0.5))
    
    let winningScore = 0
    let i =0;
    let LastCard = ['','','']
    const [disabled,setDisabled] = useState(false)
    const transform = (e) =>{
        e.target.parentElement.style.transform='rotateY(180deg)';
        e.target.parentElement.parentElement.style.transform='rotateY(180deg)';
        let currentCard = [e.target.parentElement, e.target.parentElement.parentElement,e.target.className.split(' ')[2]]
        if(LastCard[2] === ''){
            LastCard = currentCard;
        }else {
            if(LastCard[2]===currentCard[2]){
                winningScore++
            } 
            else{
                console.log(LastCard[2],currentCard[2])
                setDisabled(true)
                setTimeout(()=>{
                    console.log(LastCard)
                    LastCard[0].style.transform='rotateY(0deg)';
                    LastCard[1].style.transform='rotateY(0deg)';
                    e.target.parentElement.style.transform='rotateY(0deg)';
                    e.target.parentElement.parentElement.style.transform='rotateY(0deg)';
                    LastCard =['','','']
                    setDisabled(false)
                },1400)
               
            }
        }
    }
    return (
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
    )
}