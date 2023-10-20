import { GET_NASA} from "./actions"



const inicialState = {
    nasa: []
}

 const reducer = (state = inicialState, action ) => {

    switch (action.type){
        case GET_NASA:
            return {
                ...state,
                nasa: action.payload
            };
            default:
                return state;
    }
}

export default reducer