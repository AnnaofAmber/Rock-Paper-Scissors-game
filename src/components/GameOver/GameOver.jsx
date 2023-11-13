import { useSelector } from 'react-redux'
import scss from './GameOver.module.scss'
import { selectStatus } from 'redux/selectors'

export const GameOver = () => {
const status = useSelector(selectStatus)

    return (
        <div className={scss.container}>
            {status=== 'win' && <p className={scss.text}>You win</p>}
            {status=== 'lose' && <p className={scss.text}>You lose</p>}
            {status=== 'draw' && <p className={scss.text}> It's a draw</p>}
            <button className={scss.btn}>play again</button>
        </div>
    )
}

