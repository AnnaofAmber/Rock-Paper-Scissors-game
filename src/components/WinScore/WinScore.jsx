import scss from './WinScore.module.scss'


export const WinScore = () => {
    return(
        <div className={scss['score-container']}>
            <p className={scss['score-text']}>Score <span className={scss['score-current']}>0</span></p>
        </div>
    )
}