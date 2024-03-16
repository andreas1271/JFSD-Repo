
import {useDispatch, useSelector} from 'react-redux';

function counter(){
    const mycount=useSelector(state=>state.count);
    const dispatch=useDispatch();

    return(
        <div>
            <p>count: {mycount}</p>
            <button  onClick={()=>dispath({type:"INCREMENT"})}>INCREMENT</button>
            <button  onClick={()=>dispath({type:"DECREMENT"})}>DECREMENT</button>
        </div>
    )
}

export default Counter;