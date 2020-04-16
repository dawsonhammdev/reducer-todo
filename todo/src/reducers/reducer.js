
export const initialState = {
    todo: [
        {
            item: '',
            completed: false,
            id: Date.now()
        },

    ]
  };

  export const reducer = (state, action) => {
      switch (action.type) {
          case "ADD_TODO" :
              const addNewTodo = {
                  item: action.payload,
                  completed: false,
                  id: Date.now()
              }
              return {
                  ...state,
                  todo: [...state.todo, addNewTodo]
                      
                    }

            case "TOGGLE_TODO":
                return{
                    ...state, 
                    todo: state.todo.map(item => {
                        if (item.id === action.payload){
                            return {
                                ...item, completed: !item.completed
                            }
                            
                        }else {
                               return item; 
                        }
                    }) 
                }

            case "CLEAR_TODO":
                return{
                    ...state,
                    todo: state.filter(item => !item.completed) 
                }

            default: 
                return state;
      }
  }


