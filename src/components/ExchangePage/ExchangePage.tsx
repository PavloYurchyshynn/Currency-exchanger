import { useState } from "react";
import s from './ExchangePage.module.css'

function ExchangePage(props: any) {

    const [value, setValue] = useState('')
    const [course, setCourse] = useState(0)

    const confirm = (e: any) => {
        const newCourse = Number(value) * props.course.rate
        if (e.key === 'Enter') {
            e.preventDefault();
            setCourse(newCourse)
            setValue('')
        }
    }

    let exchangeData = props.exchanges;
    let exchangeElements = exchangeData.map((e: any) =>
        <li
            className={s.elements}
            key={e.r030}
            onClick={() => { props.setCourse(e) }}>
            {e.txt}
        </li>)

    return (
        <div>
            <form className={s.form}>
                <h1>{!props.course.txt ? 'Виберіть валюту' : props.course.txt}</h1>
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