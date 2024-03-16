

const initalState={
    items:[]

};

const CardReducer=(state=initalState,action)=>{
    switch (action.type) {
        case "ADD_ITEM":

            return{...state,items:state.items.filter(item=id!==action.payload)}
        default:
            break;
        }
}