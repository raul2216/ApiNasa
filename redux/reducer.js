import { GET_NASA, GET_NASA_5_DAYS} from "./actions"



const inicialState = {
    nasa: {},
    nasa5Days: []
}

 const reducer = (state = inicialState, action ) => {

    switch (action.type){
        case GET_NASA:
            return {
                ...state,
                nasa: {... action.payload}
            };
        case GET_NASA_5_DAYS:
            return{
                ...state,
                nasa5Days: action.payload
            }
            default:
                return state;
    }
}

export default reducer