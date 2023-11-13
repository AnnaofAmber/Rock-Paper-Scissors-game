import { useSelector } from 'react-redux'
import scss from './GameStarted.module.scss'
import clsx from "clsx"
import { selectAction, selectPickedAction } from 'redux/selectors'

export const GameStarted = () =>{
    const action = useSelector(selectAction)
    const pickedAction = useSelector(selectPickedAction)

    return(
        <div className={scss.container}>
<div className={scss['action-container']} >
<div className={clsx(scss.action, {
            [scss.paper]:action === 'paper', [scss.scissors]:action === 'scissors', [scss.rock]:action === 'rock'
        })}></div>
        <p className={scss.text}>YOU PICKED</p>
</div>

<div className={scss['action-container']}>
<div className={clsx(scss.action, {
            [scss.paper]:pickedAction === 'paper', [scss.scissors]:pickedAction === 'scissors', [scss.rock]:pickedAction === 'rock'
        })}></div>
    <p className={scss.text}>THE HOUSE PICKED</p>
</div>
        </div>
    )
}