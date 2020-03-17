import React,{Component} from 'react';
import './Navbar.css'; 

class Navbar extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className='Navbar'>
            <div className='left'><div>Home</div></div>
            <div className='center'>Right</div>
            <div className='right'>
                <button>
                <img width='50px' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAABmJLR0QA/wD/AP+gvaeTAAAArElEQVRoge3XsQ3DIBBGYStzXAvDA2IBvBLF3QKkjQSFkUKwlfeVLuCncPGOAwAAAN8mIjFGMzOznLP3fveiGSJSa20faq0isnvXZTHG1gkh7N51mZn1D1DVFXe9Vhw61FpbceySB5RS+o/nea64awnvff8TO+d275ohIiEEVVXVlNLD1gMA/h49sBU9MIEeGKEHboAeAAA8Gj2wFT0wgR4YoQdugB4AAAD4gTfPTkstNyGUHQAAAABJRU5ErkJggg==" />
                </button>
            </div>
            
            </div>
        )
    }
}
export default Navbar