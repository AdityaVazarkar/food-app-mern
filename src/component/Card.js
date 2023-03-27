import React from 'react'
import '../index.css'
export default function Card() {
  return (
    <div style={{ margin: "1em" ,border:"solid" }}>
      <img src="https://source.unsplash.com/random/900×700/?burger" alt="Avatar" style={{ width: "300px", height: "300px"}} />
      <h5 className="card-title" >Card title</h5>
      <p className="card-text">
        Some thin is importent</p>
      <div className="container ">
        <select className='m-2  h-100 bg-success rounded' >
          {Array.from(Array(10), (e, iteam) => {
            return (
              <option key={iteam + 1} value={iteam + 1}>{iteam + 1}</option>
            )
          })}
        </select>
        <select className='m-2  h-100 bg-success rounded'>
          <option value="half">Half</option>
          <option value="full">full</option>
        </select>
        <div className='d-inline h-100 fs-5'>TotalPrice</div>
      </div>
    </div>



  )
}
