import { useDispatch, useSelector } from 'react-redux'
import scss from './GameOver.module.scss'
import {  selectStatus } from 'redux/selectors'
import { setAction } from 'redux/actionSlice'
import { setPickedAction } from 'redux/pickedActionSlice'
import { setStatus } from 'redux/statusSlice'


export const GameOver = () => {
const dispatch = useDispatch()

const status = useSelector(selectStatus)

const handleClick = () =>{
dispatch(setAction('unselected'))
dispatch(setPickedAction('unselected'))
dispatch(setStatus('unselected'))
}

    return (
        <div className={scss.container}>
            {status=== 'win' && <p className={scss.text}>You win</p>}
            {status=== 'lose' && <p className={scss.text}>You lose</p>}
            {status=== 'draw' && <p className={scss.text}> It's a draw</p>}
            <button className={scss.btn} onClick={handleClick}>play again</button>
        </div>
    )
}

