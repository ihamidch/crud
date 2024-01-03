import React from 'react'
import { Button, Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import { v4 as uuidv4 } from 'uuid';
import { link, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';

const Edit = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    let histroy = useNavigate()

        var index = Employees.map(function(item) {  return item.id; }).indexOf(id);
       
        const handleSubmit = (e) => {
            e.preventDefault();
            let a= Employees[index];
            a.name=name;
            a.email=email;
                histroy('/')
        }
        useEffect(() => {
            setName(localStorage.getItem('name'));
            setEmail(localStorage.getItem('email'));
            setId(localStorage.getItem('id'));
        }, [])

    
      
    
  return (
    <div>
    <Form className='d-grid gap-2' style={{ margin: "10rem" }}>
        <Form.Group className='mb-3' controlId='formName' >
            <Form.Control type="text" placeholder="Enter your Name" value={name} required onChange={(e) => setName(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formName'>
        <Form.Control type="email" placeholder="Enter your Email" value={email} required onChange={(e) => setEmail(e.target.value)}>
        </Form.Control>
    </Form.Group>
    <Button type='submit' on onClick={(e)=>handleSubmit(e)}>Update</Button>
</Form>

</div >
  )
}

export default Edit