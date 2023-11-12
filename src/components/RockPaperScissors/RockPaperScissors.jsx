import scss from './RockPaperScissors.module.scss'

export const RockPaperScissors = () =>{
    return(
        <div className={scss.container}>
            <button className={scss.paper}></button>
            <button className={scss.scissors}></button>
            <button className={scss.rock}></button>
        </div>
    )
}