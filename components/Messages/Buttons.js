import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { observer } from 'mobx-react'
import css from '../../styles/message.css';
import Button from './Button'
import marked from 'marked'

class Buttons extends Component {
    rawMarkup(content) {
        return {__html: marked(content,{ sanitize:true , breaks: true,})
        // .replace(/^(?:<p>)?(.*?)(?:<\/p>)?$/, "$1")
        }
      }
    
render() {
    console.log("BUTTONS", this.props.store)
    console.log("OPTIONS",this.props)
    const time =  new Date().toLocaleTimeString('en-US', {hour: "numeric", minute: "numeric"}); 
  
    return(
        <div>
                 <div style={{fontFamily:'IBM Plex Sans',marginTop:'30px', marginLeft: this.props.author === 'me' ? '810px':'84px',fontSize: '12px'}}>
                   {time}
                 </div> 
                <div style={{display:'flex'}}>
                    <img src={`/static/icons/${
                    this.props.author === 'me'
                    ? 'Group26'
                    : 'Group24'
                    }.png`} style={{marginTop:'0px',marginRight:'8px',marginLeft: this.props.author === 'me' ? '1025px':'12px',width:'35px',height:'35px'}}/> 
                    <div style={{
                        backgroundColor: '#E3ECEC',
                        borderRadius: '18px',
                        maxWidth: '350px',
                        fontFamily:'IBM Plex Sans',
                        fontSize:'18px',
                        paddingLeft:'12px',
                        paddingRight:'12px',
                        float:'left',
                        marginRight:'10px',
                        marginLeft: this.props.author === 'me' ? '500px':'15px'}}
                        ref={el => this.scrollList = el}
                        dangerouslySetInnerHTML={this.rawMarkup(this.props.data.text)}
                        >            
                        {/* {this.props.data.text} */}
                    </div>         
                </div>
                <span style={{display:'inline-flex',marginLeft:'55px'}}>
                    {
                        this.props.options.map((tag, i) => {
                    return <Button store={this.props.store} tag={tag} key={i} />
                    })}
                </span>    
            
        </div>)

}
}

export default observer(Buttons)

