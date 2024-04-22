import userData from '../../structure/interface';
const initialState = {
    data: []
}

type actionProps = {
  type: string
  payload: [userData] | userData
}
const userReducer = (state = initialState, action: actionProps) => {
    switch (action.type) {
      case "SETDATA":
        return { ...state, data: action.payload };
      case "ADD":
        return { ...state, data: [...state.data, action.payload] };
      case "EDIT":{
        const editUser = action.payload as userData;
        const data:userData[] = [...state.data];
        const index = data.findIndex((user: userData)=> user.id==editUser.id);
        if(index!==-1){
          data[index] = editUser;
        }
        return { ...state, data: data };
      }
      case "DELETE":{
        const {id} = action.payload as userData;
        const data = [...state.data];
        const index = data.findIndex((user: userData)=> user.id==id);
        data.splice(index, 1);
        return { ...state, data:data };
      }
      default:
        return state;
    }
  };
  
  export default userReducer;