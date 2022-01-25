
function Login(props: any) {

    let saveCourse = () => {
        props.saveToken()
    }

    let exchangeData = props.exchanges;
    let exchangeElements = exchangeData.map((e: any) => <div onClick={saveCourse}>{e.txt}</div>)

    return (
        <div>
            {exchangeElements}
        </div>
    );
}

export default Login;