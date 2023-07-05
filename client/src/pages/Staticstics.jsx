import { CountForm } from "../utils/utils";

export const Statistics = ({game, resetGame}) => {
    const countCorrect = game.answers.reduce((acc, el, ind) => acc + (el == game.questions[ind].correct), 0);
    return <>
        <div>Викторина пройдена</div>
        <div className="stats">
            {game.questions.map((task, ind) => {
                return <div key={ind} className="stats_bar">
                    <div className="stats_colorbox" style={{backgroundColor: task.list[task.correct][0]}}/>
                    <div className="stats_textbox">
                        {game.answers[ind] != task.correct ? <><mark className="red cross">{task.list[game.answers[ind]][1]}</mark><br/></> : <p>{task.list[game.answers[ind]][1]}</p>}
                        {<mark className="yellow">{task.list[task.correct][1]}</mark>}
                    </div>
                </div>;
            })}
            <p>Вы набрали <mark className="yellow">{game.score}</mark> {CountForm(game.score, ["очко", "очка", "очков"])}, ответив верно на <mark className="yellow">{countCorrect}</mark> {CountForm(countCorrect, ["вопрос", "вопроса", "вопросов"])}!</p>
            <div onClick={() => resetGame(game)} className="button">Пройти заново</div>
            <div onClick={() => resetGame()} className="button">Новая игра</div>
        </div>
    </>
}