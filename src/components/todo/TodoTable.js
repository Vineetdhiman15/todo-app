import React from "react";
import { connect } from "react-redux";
import {editTodo,deleteTodo,toggleEditTodoModal} from "../../redux/actions/actions";

let result;

class UsersTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  handleEditUsers = (value) =>{
    let editUserName = value
    this.props.editTodo(editUserName)
    this.props.toggleEditTodoModal()
    }

  handleDeleteUsers = (value) =>{
    let deleteTodoName = value
    this.props.deleteTodo(deleteTodoName)
  }

  render(){
    const d = new Date()
    const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
    const [{ value: mo },,{ value: da },,{ value: ye }] = dtf.formatToParts(d)
    let date = `${da}-${mo}-${ye}`
    if(this.props.todos.length>0){
      result = this.props.todos.map((item,index) => {
        return <div key={index} className='userList'><div className='listName' >{item}</div>
        <div className='dateStyle'>{date}</div>
        <div>|</div>
        <button  onClick={()=>this.handleEditUsers(item)}>Edit</button>
        <div>|</div>
        <button key={index} onClick={()=>this.handleDeleteUsers(item)}>Delete</button>
       </div>
    })
  }
    return(
      <div className='userTable'>
      {result}
      </div>
    );
  }
}

const mapStateToProps = state => ({
          todos : state.todoReducer.todos
})

const mapDispatchToProps = dispatch => ({
          editTodo: (data) => dispatch(editTodo(data)),
          deleteTodo: (data) => dispatch(deleteTodo(data)),
          toggleEditTodoModal: () => dispatch(toggleEditTodoModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
