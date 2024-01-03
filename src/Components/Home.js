import React, { Fragment } from 'react'
import {Button,Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employees from './Employees'
import { Link,useNavigate } from 'react-router-dom'

const Home = () => {
    let histroy = useNavigate()      
    const handleDelete = (id) => {
        var index = Employees.map(function(item) {  return item.id; }).indexOf(id);
        Employees.splice(index, 1); 
        histroy('/')

    }   
  return (
    <Fragment>
        <div style={{margin:"10rem"}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
               {
                     Employees && Employees.length > 0 ? Employees.map((item,index) => {
                        return(
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    
                                    <Button variant="danger" onClick={()=>handleDelete(item.id)}>Delete</Button>
                                    &nbsp;
                                    <Link to={`/edit/${item.id}`}>
                                    <Button variant="primary"onClick={()=>alert(item.id)}>Edit</Button>
                                    </Link>  
                                </td>
                            </tr>
                        
                        )}) 
                        : <tr><td colSpan="3">No Data Found</td></tr>


               }

                </tbody>
            </Table>
            <br></br>
            <Link to='/create' className='d-grid gap-2'>
                <Button size='lg'>Create</Button>
            </Link>

        </div>
    </Fragment>
  )
}

export default Home