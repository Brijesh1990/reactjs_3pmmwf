import React from 'react'
import { Container,Card,CardBody } from 'react-bootstrap'
import Data from './components/Data'

export default function App() {
  return (
    <div>
    <Container className=''>
      <nav className='nav navbar bg-primary p-5 navbar-expand-md'>
        <ul className='navbar-links'>
        <li><a href='' className='text-white fs-4'>Designer</a></li>
        <li><a href=''>Category</a></li>
        <li><a href=''>Attention</a></li>
        <li className='text-white fs-4'>Total users is :<span className='bi bi-person'></span><span className='badge badge-sm bg-danger'>{Data.length}</span></li>
        </ul>
      </nav>

      <div className='w-75 mx-auto bg-white p-5 mt-4'>
       
        {Data && Data.map((row)=>{
          return(
            <>
          <Card className='bg-primary text-white mt-5'>
          <CardBody className='p-4 mt-3'>
            <table className='table'>
              <tr>
                {/* <td>{row.id}</td> */}
                <td className='w-25'><img src={row.photo} alt='img' className='img-fluid w-75 rounded-circle' /></td>
                <td className='fs-4'>{row.name}</td>
                <td className='fs-5'>{row.age}</td>
                <td className='fs-5'>{row.address}</td>
                <td className='fs-5'>{row.phone}</td>
              </tr>
            </table>
          </CardBody>
        </Card>
     
            </>
          )
        })}   
      
      
      </div>

    </Container>
      
    </div>
  )
}
