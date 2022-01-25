import { useEffect } from "react";
import { connect } from "react-redux";
import { getExchanges, setCourse } from "../../redux/exchange-reduser";
import useToken from "../useToken/useToken";
import Login from "./Login";

function LoginContainer(props: any) {

    const { saveToken } = useToken()

    const exchangeProps = {
        exchanges: props.exchanges,
        setCourse: props.setCourse,
    }

    useEffect(() => {
        props.getExchanges()
    }, [])

    return (
        <Login {...exchangeProps} saveToken={saveToken}/>
    )
}

const mapStateToProps = (state: any) => {
    return {
        exchanges: state.exchange.exchanges
    }
}
export default connect(mapStateToProps,
    {
        getExchanges,
        setCourse
    }
)(LoginContainer)