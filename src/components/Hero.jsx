import React from 'react'
import styled from  "styled-components";
import img from "../Asset/hero.jpg"
import Button from 'react-bootstrap/Button';
import Facilities from './Facilities';
import { Link } from 'react-router-dom';
export default function Hero() {
  return (
    <>
    <Section>
      <div className='Herosection'>
        <img className="Heroimg" src={img} alt="" />
        <h1 className='Title'>Welcome To Library</h1>
        <div className='button'>
          <Link className='btn btn-info btn-lg space' to="/login">Login</Link>
          <Link className='btn btn-info btn-lg space'to="/librarypass">Library Pass</Link>
          <Link className='btn btn-info btn-lg space' to="bookissue">Book Issue</Link>      
        </div>
    </div>
    </Section>
    <Facilities/>
   </>
  )
}

const Section=styled.section`
  
    padding:2rem ;
    .Herosection{
        img{
    width:100%;
    height:800px ;
    border-radius:2.5rem ;

    }
    .Title{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size:5rem ;
    
    }
    .button{
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      .space{
        margin:0.7rem ;
      }
    }
   }
  
`