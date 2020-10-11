import React from "react";
import { connect } from "react-redux";
import {addTodo,toggleEditTodoModal,editModalInputValueTodo} from "../../redux/actions/actions";
import Modal from '../common/Modal';
import UsersTable from './TodoTable';
import Loader from '../common/Loader'


class TodoPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalVisibile: false,
      inputValue: null,
      error: false,
      errorMessage: 'Please Enter Todo',
      loading : false
    }
  }

  sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  handleClick = () =>{
    this.setState({
      modalVisibile : !this.state.modalVisibile
    })
  }

  handleClose = () =>{
    let newusers=  [] ;
    if(this.state.inputValue == '' || this.state.inputValue == null){
        this.setState({
            error : true
        })
    }
  else if(this.props.editTodo == true){
    this.setState({
      loading : true,
      error : false
    })
    this.sleep(1000).then(() => {
      this.setState({
        loading : false,
      })
        newusers =  this.props.todos.map((item,index)=> {
        if(this.props.editTodoIndex == index) {
        return newusers[this.props.editTodoIndex] = (this.state.inputValue)
      }
      else{
        return newusers[index]  = this.props.todos[index]
      }
      })
      this.props.editModalInputValueTodo(newusers)
      this.props.toggleEditTodoModal()
});
  }
  else{
    this.setState({
      loading : true,
      error : false
    })
    this.sleep(1000).then(() => {
    this.setState({
      loading : false
    })
    this.props.addTodo(this.state.inputValue)
    this.setState({
      modalVisibile : false,
      inputValue: null
    })
  })
}
  }

  changeHandler = event => {
   this.setState({ [event.target.id]: event.target.value })
  };

  render(){
    return(
      <div>
        {this.state.loading && <Loader/>}
        {this.state.error && <div className='error'>{this.state.errorMessage}</div>}
        <button className='button-create' onClick={this.handleClick}>Create Todos</button>
        {!this.props.error && this.props.todos && this.props.todos.length > 0&& <UsersTable />}
        <Modal
        show={this.state.modalVisibile|| this.props.editTodo}
        onClose={this.handleClose}
        children={<input
            id='inputValue'
            type='text'
            defaultValue={this.state.inputValue}
            onChange={event => this.changeHandler(event)}
            />
        }
        buttonName='Save'
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
          todos : state.todoReducer.todos,
          editTodo: state.todoReducer.editTodo,
          editTodoIndex: state.todoReducer.editTodoIndex
})

const mapDispatchToProps = dispatch => ({
          addTodo: (data) => dispatch(addTodo(data)),
          editModalInputValueTodo : (data) => dispatch(editModalInputValueTodo(data)),
          toggleEditTodoModal : () => dispatch(toggleEditTodoModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
