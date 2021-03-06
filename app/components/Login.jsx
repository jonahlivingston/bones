import React from 'react'
import {TextInputField, Card, Button, Heading} from 'evergreen-ui'
import {connect} from 'react-redux'
import {login} from '../reducers/auth'
import {Link} from 'react-router'

export class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.onChange=this.onChange.bind(this)
    this.onLoginClick = this.onLoginClick.bind(this)
  }
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onLoginClick(){
    console.log("email", this.state.email)
    console.log('passowrd', this.state.password)
    this.props.login(this.state.email, this.state.password)
  }
  render(){
    return(
      <div >
        <Card
        background="tint2" 
        style={{marginLeft:'auto', marginRight:'auto'}}
        height={350}
        width={500}
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="default"
        marginTop={140}
        flexDirection="column"
        >
          <div style={{height:'75px', width:'200px', backgroundColor:'black'}}/>
          <TextInputField marginTop={20} width={200} label={"Email"} display="block" name="email" placeholder={'johndoe@gmail.com'} onChange={this.onChange}/>
          <TextInputField width={200} label={"Password"} display="block" name="password" placeholder={'********'} onChange={this.onChange}/>
          <Button display={'flex'} justifyContent="center" appearance="primary" intent="none" width={200} onClick={this.onLoginClick}>Login</Button>
        </Card>
        <Card
        background="tint2" 
        style={{marginLeft:'auto', marginRight:'auto'}}
        height={30}
        width={500}
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="default"
        marginTop={5}
        flexDirection="column"
        >
        <Heading>New to SurfDb? <Link to={'/signup'}>Sign Up</Link></Heading>
      </Card>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login(email, password) {
      dispatch(login(email, password))
  }
})

export default connect(undefined, mapDispatchToProps)(Login)
