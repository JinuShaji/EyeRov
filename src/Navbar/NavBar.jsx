import React from 'react'
import "./Nav.css"
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';

function NavBar() {
  const Logo = "https://media-exp1.licdn.com/dms/image/C510BAQESRqetFW3ctg/company-logo_200_200/0/1519897457481?e=2147483647&v=beta&t=SbDY9M3SGPRZvc5Ip5pUulXIKSys7RiAenxN44VPVPc";

  return (
    <div className="navBar"> 
        <div style={{display:'flex'}}>
             <div>
                <img className='navLogo' src={Logo} alt="" />
             </div>

              <div>
                <h1><span className='eColor'>E</span><span className='ROV'>yeROV</span></h1>
              </div>

              <div>
                <h1><span className='eColor' style={{marginLeft:'10px'}}>V</span><span className='ROV'>isualization</span></h1>
              </div>

              <div>
                <h1><span className='eColor'>a</span><span className='rov'>nd</span></h1>
              </div>

              <div>
                <h1><span className='eColor'>A</span><span className='rov'>nalytics</span></h1>
              </div>

              <div>
                <h1><span className='eColor'>P</span><span className='rov'>latform</span></h1>
              </div>

              <div className='Option'>
                   <div className='homeIcon'> <HomeIcon/></div>
                   <div style={{marginTop:15}}><h2> <b>Home</b></h2></div>
                   <div className='homeIcon'> <InfoIcon/></div>
                   <div style={{marginTop:15}}><h2> <b>About</b></h2></div>
                   <div className='homeIcon'> <ForumIcon/></div>
                   <div style={{marginTop:15}}><h2> <b>Support</b></h2></div>
              </div>
        </div>
    </div>
  )
}

export default NavBar;