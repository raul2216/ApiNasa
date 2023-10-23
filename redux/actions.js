import axios from "axios";

const { API_KEY, API_URL } = process.env

export const GET_NASA = "GET_NASA"


export function getNasa() {
    return async function (dispatch) {
        try {
            const nasa = (await axios.get(`https://api.nasa.gov/planetary/apod?api_key=8202nANlsnYqqKma0AyZTX52OSpoRxAdGlzUc19a`)).data
            dispatch({ type: GET_NASA, payload: nasa })

        } catch (error) {
            consgole.log({ error })
        }
    }
}