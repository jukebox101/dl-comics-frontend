import React, {Component} from 'react'
import { render } from '@testing-library/react'

class SignUp extends Component {
    state = {
        username: "",
        password: ""
    }
        
    handleSubmit = e => {
        e.preventDefault();

        this.setState({ username: "", password: "" })

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...this.state
            }),
            })
            .then((response) => response.json())
            .then((r)=> console.log(r)
        )
    }

    handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }



    render() {
        return(
            <div className="sign-up">
                <h2 className="logo">Create an account</h2>
                <form className="text" onSubmit={this.handleSubmit}>
                    <label>Create a username: </label>
                    <input name="username" type="username" onChange={this.handleChange} value={this.state.username} required />
                    <br></br>
                    <label>Create a password: </label>
                    <input name="password" type="password" onChange={this.handleChange} value={this.state.password} required />
                    <input type="submit" value="Create Account" />
                </form>
            </div>
        )
    }
}

export default SignUp
