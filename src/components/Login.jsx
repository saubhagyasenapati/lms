import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Outlet} from 'react-router-dom'
export default function Login() {
  return (
    <>
     <Link className="btn btn-info btn-lg" to="/login/loginlibrary">Login</Link>
     <Link className="btn btn-info btn-lg" to="/login/registerlibrary">Register</Link>
     <Outlet/>
  </>
  )
}


