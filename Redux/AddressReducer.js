const AddressState={
}

const AddressReducer=(state=AddressState,action)=>{
    if(action.type==="ADD_ADDRESS"){
        return state=action.payload
    }
    else return {state}
}

export default AddressReducer;