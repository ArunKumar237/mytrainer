import React, { useEffect, useState } from 'react'
import './Calendersub.css'


const Calendersub = (props) => {
  const [tabledata, settable] = useState([])

  useEffect(() => {
    if (Array.isArray(props.table)) {
      settable(props.table)
    }
  }, [props.table])

  // sorting date
  const sortDate = (e) => {
    const column = e.target.getAttribute('data-column')
    const order = e.target.getAttribute('data-order')

    const sorted = [...tabledata].sort((a, b) => {
      const dateA = new Date(a[column]);
      const dateB = new Date(b[column]);

      // Handle comparison based on the desired order
      if (order === 'asc') {
        e.target.setAttribute('data-order', 'desc')
        return dateA - dateB
      } else {
        e.target.setAttribute('data-order', 'asc')
        return dateB - dateA
      }
    })
    settable(sorted)
  }

  //sortNumbers
  const sortNum = (e) => {
    const column = e.target.getAttribute('data-column')
    const order = e.target.getAttribute('data-order')

    const sorted = [...tabledata].sort((a, b) => {
      // Convert string numbers to actual numbers if necessary
      const numberA = typeof a[column] === 'string' && !isNaN(a[column]) ? parseFloat(a[column]) : a[column];
      const numberB = typeof b[column] === 'string' && !isNaN(b[column]) ? parseFloat(b[column]) : b[column];

      if (order === 'asc') {
        e.target.setAttribute('data-order', 'desc')
        return numberA - numberB
      } else {
        e.target.setAttribute('data-order', 'asc')
        return numberB - numberA
      }
    })
    settable(sorted)
  }

  //sorting string
  const sortStr = (e) => {
    const column = e.target.getAttribute('data-column')
    const order = e.target.getAttribute('data-order')

    const sorted = [...tabledata].sort((a, b) => {
      if (order === 'asc') {
        e.target.setAttribute('data-order', 'desc')
        return a[column].localeCompare(b[column])
      } else {
        e.target.setAttribute('data-order', 'asc')
        return b[column].localeCompare(a[column])
      }
    })
    settable(sorted)
  }

  return (
    <div className='container my-4'>
      <h5>{props.course}:<span><img style={{ height: "2rem" }} src="https://img.icons8.com/matisse/100/000000/pdf.png" alt="" /></span></h5>
      <div className='rounded-top-3 border border-1 overflow-x-auto'>
        <table className="table table-hover table-bordered m-0 text-center">
          <thead>
            <tr>
              <th style={{ cursor: "pointer", userSelect: "none" }} className='bg-warning' onClick={sortDate} data-column="courseStartDate" data-order="desc" scope="col">Starts On</th>
              <th style={{ cursor: "pointer", userSelect: "none" }} className='bg-warning' onClick={sortNum} data-column="courseDuration" data-order="desc" scope="col">Duration</th>
              <th style={{ cursor: "pointer", userSelect: "none" }} className='bg-warning' onClick={sortNum} data-column="Class Time" data-order="desc" scope="col">Class Time</th>
              <th style={{ cursor: "pointer", userSelect: "none" }} className='bg-warning' onClick={sortNum} data-column="Class Days" data-order="desc" scope="col">Class Days</th>
              <th style={{ cursor: "pointer", userSelect: "none" }} className='bg-warning' onClick={sortStr} data-column="courseTrainerName" data-order="desc" scope="col">Trainer</th>
              <th style={{ cursor: "pointer", userSelect: "none" }} className='bg-warning' onClick={sortNum} data-column="batchNo" data-order="desc" scope="col">Batch #</th>
              <th style={{ cursor: "pointer", userSelect: "none" }} className='bg-warning' onClick={sortNum} data-column="courseFee" data-order="desc" scope="col">Fee</th>
              <th style={{ cursor: "pointer", userSelect: "none" }} className='bg-warning' onClick={sortNum} data-column="Actions" data-order="desc" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody id="myTable">
            {tabledata.map((rowdata, index) => (
              <tr key={index}>
                <td>{rowdata.courseStartDate}</td>
                <td>{rowdata.courseDuration}</td>
                <td>{rowdata.classTimingsFrom} to {rowdata.classTimingsTo}</td>
                <td>{rowdata.classScheduleFrom} to {rowdata.classScheduleTo}</td>
                {/* <td>{rowdata.courseTrainerName}</td> */}
                <td className='d-flex'>
                  <div className="d-flex gap-2 p-0 m-0">
                    <img className="rounded-circle" src="https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360" alt="" />
                    <div className="col d-flex flex-column align-items-start m-0 p-0">
                      <p className='m-0 p-0 lh-md w-auto text-decoration-underline'>{rowdata.courseTrainerName}</p>
                      <p className='m-0 p-0 lh-md w-auto fw-bold'>{rowdata.trainerQuali}</p>
                      <p className='m-0 p-0 lh-md w-auto'>{rowdata.trainerRole}</p>
                    </div>

                  </div>
                </td>
                <td>{rowdata.batchNo}</td>
                <td>{rowdata.courseFee}</td>
                <td><div className="btn btn-sm btn-primary">Register</div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Calendersub