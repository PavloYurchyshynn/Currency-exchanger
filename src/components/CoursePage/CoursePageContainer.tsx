import { useEffect } from "react"
import { connect } from "react-redux"
import { getExchanges } from "../../redux/exchange-reduser"
import CoursePage from "./CoursePage"


function CoursePageContainer(props: any) {

  const exchangeProps = {
    exchanges: props.exchanges,
}

  useEffect(() => {
    props.getExchanges()
  }, [])

  return (
    <CoursePage {...exchangeProps}/>
  )
}

const mapStateToProps = (state: any) => {
  return {
    exchanges: state.exchange.exchanges
  }
}
export default connect(mapStateToProps,
  {
    getExchanges
  }
)(CoursePageContainer)