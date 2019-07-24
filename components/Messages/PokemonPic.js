import React, { Component } from 'react';
import { observer } from 'mobx-react'

class PokemonPic extends Component {

    render() {
        console.log("Pokemon", this.props)
        return (
            <div style={{display:'inline-block'}}>
            <img src={`/static/icons/${
            this.props.author === 'me'
            ? 'Group26'
            : 'Group24'
            }.png`} style={{marginTop:'15px',marginRight:'8px',marginLeft: this.props.author === 'me' ? '1025px':'12px',width:'35px',height:'35px'}}/> 
          <div style={{
                  display: 'inline-block',
                  marginTop:'15px',
                  textAlign: 'left',
                  borderRadius: '18px',
                  fontFamily:'IBM Plex Sans',
                  fontSize:'18px',
                  paddingLeft:'12px',
                  paddingRight:'12px',
                  paddingTop:'8px',
                  paddingBottom:'8px',
                color: this.props.author === 'me' ? '#FFFFFF':'#000000',
                backgroundColor: this.props.author === 'me' ? '#7863EC':'#E3ECEC',
                maxWidth: this.props.author === 'me' ? '270px':'470px',
                marginLeft: this.props.author === 'me' ? '0px':'8px',
                marginRight: this.props.author === 'me' ? '8px':'0px'

                }}>
              {this.props.data.text}
             
            </div>   
            <div style={{display:'flex',flexDirection:'row',marginLeft:'62px',maxWidth:'750px', marginRight:'30px'}}>
            <div style={{marginTop:'15px'}} >
                <img src={`/static/icons/${this.props.data.pokemon}.png`} alt={"map_image"} height='200' width='200'/> 
            </div>    
            </div>
            </div>
           
            )
    }
}

export default observer(PokemonPic)

