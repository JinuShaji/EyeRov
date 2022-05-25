import React from 'react'
import "./Footer.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageIcon from '@mui/icons-material/Language';

function Footer() {
  return (
    <div className='footer'>
        <div className='info'>
            <div className='sec1'>
             <LanguageIcon/> <span className='LinkTag'> www.eyerov.com <br></br></span>
              <MailOutlineIcon/> <span className='LinkTag'>info@eyerov.com</span>
          </div> 
          <div className='centerBox'>
            @2021 EyeROV (IROV Technologies pvt.Ltd.)
          </div>
          <div className='RightBox'>
           Version 2.0.0
          </div>
        </div> 
    </div>
  )
}

export default Footer