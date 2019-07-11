import React, { Component } from 'react';
import { observer } from 'mobx-react'
import css from '../../styles/message.css'


class TextMessage extends Component{
  render(){
    console.log("From TextMessage component",this.props.author, this.props.data.text)
    const time =  new Date().toLocaleTimeString('en-US', {hour: "numeric", minute: "numeric"}); 
    //const time = new Date().toLocaleTimeString();

    // Removed flex and used textAlign, used different margin for 'me' and 'them' 
    return( 
      <div>
        <div style={{fontFamily:'IBM Plex Sans', marginTop:'15px',marginLeft: this.props.author === 'me' ? '1150px':'86px',fontSize: '12px'}}>
         {time}
        </div>   
        <div style={{textAlign: this.props.author === 'me' ? 'right': 'left'}}>
        <img src={`/static/icons/${
              this.props.author === 'me'
                ? 'Group26'
                : 'Group24' //using float in below styling
              }.png`} style={{marginTop:'0px',float: this.props.author === 'me' ? 'right':'left', marginLeft: this.props.author === 'me' ? '0px':'12px',marginRight: this.props.author === 'me' ? '12px':'8px',width:'35px',height:'35px'}}/> 
          <div style={{
                  display: 'inline-block',
                  //added display as 'inline-block' and textAlign as 'left'
                  textAlign: 'left',
                  borderRadius: '18px',
                  fontFamily:'IBM Plex Sans',
                  fontSize:'18px',
                  paddingLeft:'12px',
                  paddingRight:'12px',
                  paddingTop:'8px',
                  paddingBottom:'8px',
                  //color:this.props.author === 'me' ? '#fff':'#000000',
                  color: this.props.author === 'me' ? '#FFFFFF':'#000000',
                  backgroundColor: this.props.author === 'me' ? '#7863EC':'#E3ECEC',
                  maxWidth: this.props.author === 'me' ? '270px':'470px',
                 //width: this.props.author === 'me' ? '270px':'470px',
                 marginLeft: this.props.author === 'me' ? '0px':'8px',
                 marginRight: this.props.author === 'me' ? '8px':'0px'
                }}>
              {this.props.data.text}
            </div>
            
          </div>    
          
        
      </div>
   
    )
  }
}
export default observer(TextMessage)