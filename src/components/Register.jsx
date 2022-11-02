import React from 'react'

export default function Register() {
  return (
    <>
    <h1>Register</h1>
    <form classNameName="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4 validationDefault01" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4 validationDefault01" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-md-6" id="main_menu">
    <label for="inputState validationDefault01 " className="form-label">Course Enrolled</label>
    <select id="inputState" className="form-select">
      <option value="Btech" >Btech</option>
      <option value="Law">Law </option>
      <option value="Management">Management</option>
      <option value="Architecture" >Architecture</option>
      <option value="Mtech" >Mtech</option>
      <option value="Fashion" >Fashion</option>
    </select>
  </div>
  <div className="col-md-6 " id="sub_menu">
    <label for="inputState validationDefault01" className="form-label">Branch</label>
    <select id="inputState" className="form-select">
    
    </select>
  </div>
  <div className="col-md-6">
    <label for="inputState validationDefault01" className="form-label">Semester</label>
    <select id="inputState" className="form-select">
      <option >1st Semester</option>
      <option >2nt Semester</option>
      <option >3rd Semester</option>
      <option >4th Semester</option>
      <option >5th Semester</option>
      <option >6th Semester</option>
      <option >8th Semester</option>
      <option >None</option>
    </select>
  </div>

  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>

</>
  )
}
