import * as actionTypes from '../actions/actionTypes';
const initialStateUsers={
 inputValue : null,
 users : [],
 editUser: false,
 editUserIndex: null,
 loading: false
}

export function dataReducer(state=initialStateUsers , action) {
  switch (action.type) {

    case actionTypes.ADD_USER:
      return {...state,
        users: [...state.users, action.payload]
    };

    case actionTypes.EDIT_USER:
    var editUserIndex = state.users.indexOf(action.payload)
      return {...state,
        editUserIndex: editUserIndex
    };

    case actionTypes.TOGGLE_EDIT_USER_MODAL:
          return {...state,
                  editUser: !state.editUser,
      };

    case actionTypes.DELETE_USER:
            var filtered = state.users.filter((value)=> { return value != action.payload;})
          return {...state,
                  users: filtered
            };
    case actionTypes.EDIT_INPUT_VALUE:
          return {...state,
                  users: action.payload
                };
    default:
      return state;
  }
}

const initialStateTodo={
 inputValue : null,
 todos : [],
 editTodo: false,
 editTodoIndex: null
}

export function todoReducer(state=initialStateTodo , action) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {...state,
        todos: [...state.todos, action.payload]
    };

    case actionTypes.EDIT_TODO:
    var editTodoIndex = state.todos.indexOf(action.payload)
      return {...state,
        editTodoIndex: editTodoIndex
    };

    case actionTypes.TOGGLE_EDIT_TODO_MODAL:
      return {...state,
            editTodo: !state.editTodo,
    };

    case actionTypes.DELETE_TODO:
        var filtered = state.todos.filter((value)=> { return value != action.payload;})
          return {...state,
                  todos: filtered
      };
    case actionTypes.EDIT_INPUT_VALUE_TODO:
        return {...state,
        todos: action.payload
        };
    default:
      return state;
  }
}
