const initstate={
    input1:''
}


export const formReducer=(state=initstate,action)=>{
    var newstate={...state}
    
    switch(action.type){
        case "RESET":
           newstate.input1='';break
        case "SET_TEXT":
            newstate.input1=action.payload;break
        default:
            break;
    }
    
    return newstate
}

