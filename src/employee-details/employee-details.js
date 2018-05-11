import React from 'react';


const EmployeeDetails=(props)=>{
  const {empId} =  props.match.params;
  return(
    <div>
      <h1>You are on Employee details page</h1>
      <h4> The selected Employee ID is {empId}</h4>
    </div>
  )
}

export default EmployeeDetails;
