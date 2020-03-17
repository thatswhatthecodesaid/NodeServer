import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Register.css'
class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 isLoader:false
        }
        this.submit = this.submit.bind(this)
    }

    async submit(event){
        event.preventDefault();
        this.setState({isLoader:true})
        let {email,number,password} = event.target;
        email = email.value;
        number = number.value;
        password = password.value;
        
        let response = await fetch('http://localhost:80/register/new/user',{
            method:'post',
            headers:{
                'Content-Type':'Application/json'
            },
            body:{
                email:email,
                number:number,
                password:password
            }
        })
        
    }

    render() {
        return (
            <div>
                <Navbar />
                <form className='jumbotron' onSubmit={this.submit}>
                    <a className='display-4'>Register Here</a><br /><br />
                    <div className='alert alert-success lead' style={{display:this.state.isLoader === true?'':'none'}}> <div className={this.state.isLoader === true?' spinner-border':''}></div></div>
                    <div className='form-group container' >
                        <input type='text' placeholder='Email' id='email' className='form-control' />
                    </div>
                    <div className='form-group container' >
                        <input type='number' placeholder='Phone Number' id='number' className='form-control' />
                    </div>
                    <div className='form-group container' >
                        <input type='password' placeholder='Password' id='password' className='form-control' />
                    </div>
                    <div className='form-group container' >
                        <button className={this.state.isLoader === true?'ourbtn btn btn-block btn-success disabled':'btn btn-block btn-success'}>Submit</button>
                        <button className={this.state.isLoader === true?'btn btn-block btn-danger disabled':'btn btn-block btn-danger'}>Already have an Account ? Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register
