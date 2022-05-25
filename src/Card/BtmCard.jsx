import React, { useState } from 'react'
import './BtmCard.css'
import axios from '../axios/axios'
import FolderIcon from '@mui/icons-material/Folder';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { useEffect } from 'react'


function BtmCard() {
  const [image,SetImage] = useState("")
  useEffect(() => {
    axios.get('/images').then((res)=>{
      console.log(res.data)
      SetImage(res.data)
    })
  }, [])
  
  return (
  <div>
    <div className='BottomCard' >
         <div className='Card1'>
             <div>
                 <h5 className='Text'>EyeROV Inspection</h5>
                 <img className='Img1' src={image.rovImage}/>
                 <div style={{display:'flex'}}>
                    <button className='btn1'><div style={{display:'flex'}}><FolderIcon/> <span className='btnTxt1'>Open Project</span></div></button>
                    <button className='btn2'><div style={{display:'flex'}}><InsertChartIcon/> <span className='btnTxt2'>Report Outcome</span></div></button>
                </div>
             </div>
         </div>
        <div>
        </div>

       <div className='Card2'>
       <div>
                 <h5 className='MainText'>Diver's Inspection </h5>
                 <img className='Img2' src={image.diverImage}/>
                 <div style={{display:'flex'}}>
                    <button className='btn1'><div style={{display:'flex'}}><FolderIcon/> <span className='btnTxt1'>Open Project</span></div></button>
                    <button className='SecondBtn'><div style={{display:'flex'}}><InsertChartIcon/> <span className='btnTxt2'>Report Outcome</span></div></button>
                </div>
             </div>
      </div>
    </div>
    <div className='btm'>
    </div>
  </div>
  )
}

export default BtmCard