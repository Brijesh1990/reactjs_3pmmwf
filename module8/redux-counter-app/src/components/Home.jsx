import React from 'react'
import { connect } from 'react-redux'
import { Container,Row } from 'react-bootstrap'
const Home=({count,increment,decrement})=> {
  return (
    <div>
      <Container className='w-50 p-5 shadow mx-auto'>
        <h2>Counter App using redux architectures</h2>
        <hr />
        <p className='text-center fs-3'>The count of data : {count}</p>
        <p className='text-center fs-5'>
        <button type='button' className='btn btn-sm btn-primary text-white' onClick={increment}>+</button> &nbsp;
        <button type='button' className='btn btn-sm btn-danger text-white' onClick={decrement}>-</button>
        </p>

      </Container>
    </div>
  )
}

const mapStateToProps=state=>({
    count:state.count
})

const mapDispatchToProps=dispatch=>({
    increment:()=>dispatch({type:'INCREMENT'}),
    decrement:()=>dispatch({type:'DECREMENT'}),
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
