import { useDispatch, useSelector } from 'react-redux'
import scss from './RockPaperScissors.module.scss'
import { selectAction } from 'redux/selectors'
import { setAction } from 'redux/actionSlice'
import { actions } from 'redux/constants'

export const RockPaperScissors = () =>{
    const dispatch = useDispatch()
    const action = useSelector(selectAction)

    const handleActionClick = action => dispatch(setAction(action))

    return(
<div className={scss.container}>
            <button className={scss.paper} selected={action === actions.paper} onClick={()=>handleActionClick(actions.actionPaper)}></button>
            <button className={scss.scissors} selected={action === actions.scissors} onClick={()=>handleActionClick(actions.actionScissors)}></button>
            <button className={scss.rock} selected={action === actions.rock} onClick={()=>handleActionClick(actions.actionRock)}></button>
        </div>
    )
}