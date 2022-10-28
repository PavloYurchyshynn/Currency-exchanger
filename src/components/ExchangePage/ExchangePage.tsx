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

    const exchangeData = exchanges;
    const exchangeElements = exchangeData.map((e: any) =>
        <li
            className={s.element}
            key={e.r030}
        >
            <div>
                {e.cc}
            </div>
            <div>
                ₴{e.rate.toFixed(2)}
            </div>
            <button
                className={s.elementBtn}
                onClick={() => { setNewCourse(e) }}
            >
                вибрати
            </button>
        </li>)

    return (
        <div className={s.container}>
            <div className={s.leftSide}>
                <div className={s.leftSideTitle}>
                    <div>Обмінник</div>
                    <div>Валют</div>
                </div>
            </div>
            <div className={s.rightSide}>
                <form className={s.form}>
                    <p>{!newCourse.txt ? 'Виберіть валюту' : newCourse.txt}</p>
                    <input
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        onKeyPress={confirm}
                        placeholder="Введіть суму"
                        disabled={!newCourse.txt}
                    />
                    <p>{!newCourse.txt ? '' : Number.isNaN(course) ? 'Не правильно вказано' : `В гривнях: ${course.toFixed(2)}`}</p>
                </form>
                <span>
                    <ul>
                        {exchangeElements}
                    </ul>
                </span>
            </div>
        </div>
    );
}

export default ExchangePage;