import React from "react";
import { connect } from "react-redux";
import {editUser,deleteUser,toggleEditUserModal} from "../../redux/actions/actions";

  let result;

class UsersTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  handleEditUsers = (value) =>{
    let editUserName = value
    this.props.editUser(editUserName)
    this.props.toggleEditUserModal()
    }

  handleDeleteUsers = (value) =>{
    let deleteUserName = value
    this.props.deleteUser(deleteUserName)
  }

  render(){
    if(this.props.users.length>0){
      result = this.props.users.map((item,index) => {
        return <div key={index} className='userList'><div className='listName' >{item}</div>
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
          users : state.dataReducer.users
})

const mapDispatchToProps = dispatch => ({
          editUser: (data) => dispatch(editUser(data)),
          deleteUser: (data) => dispatch(deleteUser(data)),
          toggleEditUserModal: () => dispatch(toggleEditUserModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
