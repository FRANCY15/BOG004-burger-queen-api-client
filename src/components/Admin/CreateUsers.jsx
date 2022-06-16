import React, {useState, useEffect} from 'react'
import '../../assets/css/FormOrders.css'
import '../../assets/css/TableOrders.css'
import { FormGroup, Label, Input } from 'reactstrap'


const intialForm = {
    email: '',
    password: '',
    roles: {
        admin:false
    }
}

const CreateUsers = ({createData, updateData, editColaborator, setEditColaborator}) => {

const [form, setForm] = useState(intialForm);
const [email, setEmail] = useState('')
const [password, setPassword] = useState('');
const [rol, setRol] = useState({admin:false});

useEffect(() => {
    if(editColaborator){
        setForm(editColaborator)
    }else{
        setForm(intialForm)
    }
}, [editColaborator])


const handleSubmit = (e) => {
    e.preventDefault();
    if(!form){
        alert('Incomplete data!')
        return
    }
    form.email = email;
    form.password = password;
    form.roles = {admin:rol};
    
    createData(form)
    alert('Successful registration!')
    handleReset()
}


const handleReset = () => {
    setEmail('')
    setPassword('')
    setEditColaborator(null)
}


  return (
    <>
        <h3 className='Title'>Create Users</h3>
        <form className='Form-order' onSubmit={handleSubmit}>
            <label htmlFor="user">User Name: </label>
            <input 
            type="email" 
            name="user" 
            placeholder='User Name'
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="password"></label>
            <input 
            type="password" 
            name="password" 
            placeholder='Password' 
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <FormGroup>
                <Input 
                id='rol2'
                type="radio" 
                value= {false}
                checked={rol === false ? true : false}
                onChange={(e) => {
                    setRol(e.target.value && false);
                  }}/>
                <Label htmlFor="rol2">Not is Admin</Label>
                <Input
                 id='rol1'
                 type="radio" 
                 value= {true}
                 checked={rol === true ? true : false}
                 onChange={(e) => {
                    setRol(e.target.value && true);
                  }}
                 />
                 <Label>Is Admin</Label>
            </FormGroup>
            <input type="submit" value='Create' onClick={handleSubmit}/>
            <input type="reset" value='Clear' onClick={handleReset}/>
        </form>
    </>
  )
}

export default CreateUsers