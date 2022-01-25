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
            <span>
                <ul>
                    {exchangeElements}
                </ul>
            </span>
            <form>
                <div>Введіть: {props.course.txt}</div>
                <input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onKeyPress={confirm}
                />
                <div>В гривнях: {course}</div>
            </form>
        </div>
    );
}

export default ExchangePage;