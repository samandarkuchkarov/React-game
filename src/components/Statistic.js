import {useHistory} from 'react-router-dom'

export const Statistic =({click,openCard})=>{
    const history =useHistory()
    if(openCard === 30){
        history.push('/win')
    }
    return (
     <div className = "statistic"><div>Moves:{click}</div><div>Cards:{openCard}</div></div>
    )
}