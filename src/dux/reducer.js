const initialState = {
    activeTab: 'Google News'
  }
  
  const UPDATE_ACTIVE_TAB = 'UPDATE_ACTIVE_TAB';
  
  export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
      case UPDATE_ACTIVE_TAB:
        return {
          ...state,
          activeTab: payload      
        }
      default:
        return state;
    }
  }
  
  export function updateActiveTab(a) {
    return {
      type: UPDATE_ACTIVE_TAB,
      payload: a
    }
  }