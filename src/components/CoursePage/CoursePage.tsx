import { FC } from 'react';
import { IExchanges } from '../../types/types';
import s from './CoursePage.module.css'

interface CourseProps {
    exchanges: IExchanges[];
}

const CoursePage: FC<CourseProps> = ({exchanges}) => {

    let exchangeData = exchanges;

    let exchangeElements = exchangeData.map((e: any) => <li key={e.r030}>{e.cc}:  {e.rate}</li>)

    return (
        <div className={s.course}>
            <h1>Курс валют</h1>
            <ul>
                {exchangeElements}
            </ul>
        </div>
    );
}

export default CoursePage;