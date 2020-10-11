import React from "react";
import { connect } from "react-redux";
import {addUser,toggleEditUserModal,editModalInputValue} from "../../redux/actions/actions";
import Modal from '../common/Modal';
import UsersTable from './UsersTable';
import Loader from '../common/Loader'


class UsersPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalVisibile: false,
      inputValue: null,
      error: false,
      errorMessage: 'Please Enter Name'
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
  else if(this.props.editUser == true){
    this.setState({
      loading : true,
      error : false
    })
    this.sleep(1000).then(() => {
      this.setState({
        loading : false
      })
      newusers =  this.props.users.map((item,index)=> {
      if(this.props.editUserIndex == index) {
      return newusers[this.props.editUserIndex] = (this.state.inputValue)
    }
    else{
      return newusers[index]  = this.props.users[index]
    }
    })
    this.props.editModalInputValue(newusers)
    this.props.toggleEditUserModal()
  })

  }else{
    this.setState({
      loading : true,
        error : false
    })
    this.sleep(1000).then(() => {
    this.setState({
      loading : false
    })
    this.props.addUser(this.state.inputValue)
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
        <button className='button-create' onClick={this.handleClick}>Create User</button>
        {!this.props.error && this.props.users && this.props.users.length > 0&& <UsersTable />}
        <Modal
        show={this.state.modalVisibile|| this.props.editUser}
        onClose={this.handleClose}
        children={<input
            id='inputValue'
            type='text'
            defaultValue={this.props.editUser ? this.props.editUserValue :this.state.inputValue}
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
          users : state.dataReducer.users,
          editUser: state.dataReducer.editUser,
          editUserValue: state.dataReducer.editUserValue,
          editUserIndex: state.dataReducer.editUserIndex
})

const mapDispatchToProps = dispatch => ({
          addUser: (data) => dispatch(addUser(data)),
          editModalInputValue : (data) => dispatch(editModalInputValue(data)),
          toggleEditUserModal : () => dispatch(toggleEditUserModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
