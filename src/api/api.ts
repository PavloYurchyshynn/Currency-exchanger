import axios from "axios";
import { IExchanges } from "../types/types";

export const exchangesAPI = {
    getExchanges() {
        return axios.get<IExchanges[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then(response => {
                return response.data
            })
    }
}