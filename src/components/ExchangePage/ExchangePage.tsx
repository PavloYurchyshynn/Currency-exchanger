import { FC, useState } from "react";
import { IExchanges } from "../../types/types";
import s from './ExchangePage.module.css'

interface ExchangeProps {
    exchanges: IExchanges[];
    newCourse: IExchanges;
    setNewCourse: (e: any) => number
}

const ExchangePage: FC<ExchangeProps> = ({ exchanges, newCourse, setNewCourse }) => {

    const [value, setValue] = useState<string>('')
    const [course, setCourse] = useState<number>(0)

    const confirm = (e: any) => {
        const userCourse = Number(value) * newCourse.rate
        if (e.key === 'Enter') {
            e.preventDefault();
            setCourse(userCourse)
            setValue('')
        }
    }

    let exchangeData = exchanges;
    let exchangeElements = exchangeData.map((e: any) =>
        <li
            className={s.elements}
            key={e.r030}
            onClick={() => { setNewCourse(e) }}>
            {e.txt}
        </li>)

    return (
        <div>
            <form className={s.form}>
                <h1>{!newCourse.txt ? 'Виберіть валюту' : newCourse.txt}</h1>
                <input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onKeyPress={confirm}
                    placeholder="Введіть суму"
                />
                <h1>В гривнях: {course.toFixed(2)}</h1>
            </form>
            <span>
                <ul>
                    {exchangeElements}
                </ul>
            </span>
        </div>
    );
}

export default ExchangePage;