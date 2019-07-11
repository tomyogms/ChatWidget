import Link from 'next/link'
import Chat from '../components/chat'

export default () => (
    <div style={{maxWidth:'1980px',overflow:'hidden'}}>
        <div style={{height:'48px',marginLeft:'-8px',backgroundColor:'#7863EC',display:'flex',alignItems:'center'}}>
            <img src="/static/icons/Watson_White@4x.png"
                style={{marginLeft: '8%',width:'39px',height:'36px'}}/>
            <div style={{width: '188px',fontSize:'18px',color:'#fff',margin:'23px',fontFamily:'IBM Plex Sans'}}>Chat Widget</div>
        </div> 
       <Chat/>
    </div> 
)
