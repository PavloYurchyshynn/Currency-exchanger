import { useEffect } from "react"
import { connect } from "react-redux"
import { getExchanges, setCourse } from "../../redux/exchange-reduser"
import ExchangePage from "./ExchangePage"


function ExchangePageContainer(props: any) {
    const exchangeProps = {
        exchanges: props.exchanges,
        setNewCourse: props.setCourse,
        newCourse: props.course
    }

    useEffect(() => {
        props.getExchanges()
    }, [])

    return (
        <ExchangePage {...exchangeProps} />
    )
}

const mapStateToProps = (state: any) => {
    return {
        exchanges: state.exchange.exchanges,
        course: state.exchange.course
    }
}

export default connect(mapStateToProps,
    {
        getExchanges,
        setCourse
    }
)(ExchangePageContainer)