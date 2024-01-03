import React from 'react'
import { Button, Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import { v4 as uuidv4 } from 'uuid';
import { link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Add = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    let histroy = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
       const ids=uuidv4();
       let uniqueId=ids.slice(0,8);
       let a=name;
         let b=email;
         Employees.push({id:uniqueId,name:a,email:b});
            histroy('/')
    }
    return (
        <div>
            <Form className='d-grid gap-2' style={{ margin: "10rem" }}>
                <Form.Group className='mb-3' controlId='formName' >
                    <Form.Control type="text" placeholder="Enter your Name" required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formName'>
                <Form.Control type="email" placeholder="Enter your Email" required onChange={(e) => setEmail(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button type='submit' on onClick={(e)=>handleSubmit(e)}>Submit</Button>
        </Form>

    </div >
   
  )
}

export default Add