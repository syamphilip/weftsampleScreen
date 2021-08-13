const AddressState={
    name:"Weft Technologies",
    phone:"7531254813",
    address:"WEFT Technologies Smart City Ernakulam",
    email:"weft2020@weft.com",
    city:"ernakulam"
}

const AddressReducer=(state=AddressState,action)=>{
    if(action.type==="ADD_ADDRESS"){
        return state=action.payload
    }
    else return state
}

export default AddressReducer;