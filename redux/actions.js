import axios from "axios";

const { API_KEY, API_URL } = process.env

export const GET_NASA = "GET_NASA"
export const GET_NASA_5_DAYS = "GET_NASA_5_DAYS"


export function getNasa() {
    return async function (dispatch) {
        try {
            const nasa = (await axios.get(`https://api.nasa.gov/planetary/apod?api_key=8202nANlsnYqqKma0AyZTX52OSpoRxAdGlzUc19a`)).data
            dispatch({ type: GET_NASA, payload: nasa })
        } catch (error) {
            console.log({ error })
        }
    }
}

export function getNasa5Days(fiveDays) {
    return async function (dispatch) {
        try {
            const nasa5Days = (await axios.get(`https://api.nasa.gov/planetary/apod?api_key=8202nANlsnYqqKma0AyZTX52OSpoRxAdGlzUc19a${fiveDays?.length > 0 ? fiveDays : ""}`)).data
            dispatch({ type: GET_NASA_5_DAYS, payload: nasa5Days })
            
        } catch (error) {
            console.log({ error })
        }
    }
}