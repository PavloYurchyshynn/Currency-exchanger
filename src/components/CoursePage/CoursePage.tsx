import s from './CoursePage.module.css'

function CoursePage(props: any) {

    let exchangeData = props.exchanges;

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