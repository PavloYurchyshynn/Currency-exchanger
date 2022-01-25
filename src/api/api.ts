import axios from "axios";

export const exchangesAPI = {
    getExchanges() {
        return axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then(response => {
                return response.data
            })
    }
}