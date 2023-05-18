import React, { useState } from 'react';
import { Button, Container, Form, InputGroup, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addValue, handleExcessiveUser, increaseIdValue, setUserInformation } from '../store/reducers/UserInfoSlice';

const FormField = () => {
  const dispatch = useDispatch();
  const users = useSelector((state)=> state.userInform.users);
  const usersValue = useSelector((state)=> state.userInform.userValues);
  const [userName,setUserName]= useState("");
  const [userValue,SetUserValue]= useState("");
  const [nameState,setNameState]= useState("")
  const [valueState,setValueState]= useState("")


  const numberOfUsers = useSelector((state)=> state.userInform.id);
  const numberOfUsersLength =users.length;
  // console.log(users);
  // const valueCounter = [];

  const handleName=(e)=>{
    setUserName(e.target.value);
  }
  const handleValue=(e)=>{
    SetUserValue(e.target.value);
  }
  
  const onInput1= e=>{
    setNameState(e.target.value);
  }
  const onInput2= e=>{
    setValueState(e.target.value);
  }
  const handleSubmit=()=>{
    // e.preventDefault();
    // let numberOfUsers=0;
    if(numberOfUsersLength <5){
      // if(numberOfUsersLength!=cValue){
      //   dispatch(updateCounterValue(numberOfUsersLength))
      // }
      // numberOfUsers = cValue;

      const singleUser = {counter: numberOfUsers,fname: userName,value:userValue}
      dispatch(setUserInformation(singleUser));
      dispatch(addValue(Number(userValue)))
      dispatch(increaseIdValue());
      
      setValueState("")
      setNameState("")
    }
    else{
      handleValueCounter();
    }
    
  }


  const handleValueCounter=()=>{
    const maxValue = usersValue.reduce((a, b) => Math.max(a, b), -Infinity);
    const minValue = usersValue.reduce((a, b) => Math.min(a, b));

    const newUser = dispatch(handleExcessiveUser(maxValue))

    // console.log(maxValue)
  }




  

  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="fname"
          type='text'
          onBlur={handleName}
          onInput ={onInput1}
          value={nameState}
        />
        <Form.Control
          placeholder="Value"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="value"
          type='number'
          onBlur={handleValue}
          onInput ={onInput2}
          value={valueState}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={()=>handleSubmit()}>
          Button
        </Button>
      </InputGroup>

      <Container>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Counter</th>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {
          users && users.map((user)=>{
            const {counter,fname,value} = user;
            return (
              <tr key={user.counter}>
              <td>{counter}</td>
              <td>{fname}</td>
              <td>{value}</td>
            </tr>
            )
          })
        }
      </tbody>
    </Table>
    </Container>
    </div>
  )
}

export default FormField
