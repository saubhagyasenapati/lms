import React from 'react'
import styled from 'styled-components'
import {GrPersonalComputer} from 'react-icons/gr'

export default function Facilities() {
   const data=[
    {
      icon:<GrPersonalComputer/>,
      title:"Computer Science Branch"
    },
    {
      icon:<GrPersonalComputer/>,
      title:"Electroincs Branch"
    },
    {
      icon:<GrPersonalComputer/>,
      title:"Civil Branch"
    },
    {
      icon:<GrPersonalComputer/>,
      title:"Mechanical Branch"
    },
    {
      icon:<GrPersonalComputer/>,
      title:"Fashion Branch"
    },
    {
      icon:<GrPersonalComputer/>,
      title:"Law Branch"
    }
    
   ];
  return (
    
   <Section id="facility">
       <div >
        <h1 className="facilitytitle">Open For </h1>
       </div>
       <div className="facilitybody">
       { 
        data.map((facility)=>{
          return(
            <div className="facility">
              <div className='icon'>
                <img src={facility.icon} alt="" />
              </div>
              <h3 className="title">{facility.title}</h3>
            </div>
          )
        })
      }
       </div>
      
   </Section>
  )
}

const Section=styled.section`
      padding:3rem 0rem; 
      .facilitytitle {
        font-size:4rem;
        letter-spacing:0.2rem;
        font-family: sans-serif;
        text-align:center;
      }    
    .facilitybody{
      padding:2rem 3rem;
      display:grid;
      grid-template-columns:repeat(6,1fr);
      gap:1rem;
      .facility 
      {
        display:flex;
        flex-direction:column;
        gap:1rem;
        padding:1rem;
        background-color:#f2f2f2;
        box-shadow:rgba(100,100,111,0.2)0px 7px 29px 0px;
        transition:0.3s ease-in-out;
        &:hover{
          transform:translateX(0.4rem) translateY(-1rem);
          box-shadow:rgba(0,0,0,0.35) 0px 5px 15px;
        }
        .title {
          font-size:1.6rem;
        }
        .icon{
          img{
            height:4rem;
          }
        }
      }
    } 
    @media only screen and (max-device-width: 1080px) 
    {
      .facilitytitle {
        font-size:3rem;
      } 
      .facilitybody{
      padding:1rem 1rem;
      display:grid;
      grid-template-columns:repeat(2,1fr);
      gap:1rem;
      .facility{ 
        .title {
          font-size:1rem;
        }
        .icon{
          img{
            height:2rem;
          }
        }
      }
      }
      
    } 
`;
