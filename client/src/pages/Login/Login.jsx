import './Login.css';
import React ,{useState} from 'react'
import undraw1 from '../../assest/undraw2.png'
import { login,signup } from '../../actions/auth'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const [isSignUp,setIsSignUp]=useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSwitch = () =>{
        setIsSignUp(!isSignUp);
    }

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleSubmit=(e) =>{
        e.preventDefault();
        if(!email && !password){
            alert("Please enter the Email and Password");
          }
          if(isSignUp){
            if(!name){
              alert("Please enter the name to continue");
            }
            dispatch(signup({name,email,password},navigate))
          }
          else{
            dispatch(login({email,password},navigate))
          }
          console.log({name,email,password});
    }

  return (
    <section className="main-container">
        <div className="login-container">
            <div className="login-img">
                <img src={undraw1} alt="undraw1" height={350} width={350} />
            </div>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    {isSignUp && 
                        <label htmlFor='name'>
                            <h4>Display Name</h4>
                            <input type="text" name='name' id='name' onChange={(e) => setName(e.target.value)} />
                        </label>
                        }
                    <label htmlFor="email">
                        <h4>Email</h4>
                        <input type="email" id='email' name='email' onChange={(e)=> setEmail(e.target.value)}/>
                    </label>

                    <label htmlFor="password">
                        <h4>Password</h4>
                        <input type="password" id='password' name='password' onChange={(e) => setPassword(e.target.value)}/>
                    </label>

                    {isSignUp && <p style={{ fontSize: "13px", color: "#666767" }}>Password must contain at at least eight <br /> characters,including at least 1 letter and 1 number </p>
                    }   

                    <button type='submit' className='main-btn'>{isSignUp ? 'SignUp' :'LogIn'}</button>
                    {isSignUp && <p style={{ fontSize: "13px", color: "#666767" }}>By clicking "Sign-Up",you agree with our <span style={{color: "#007ac6"}}>terms of <br />services,privacy policy</span> and <span style={{color: "#007ac6"}}>cookie policy</span> </p>}

                </form>

                <p className='switching'>
                    {isSignUp ? 'Already have an account ? ' : "Don't have an account ? "}
                    <button type='button' className='handle-btn' onClick={handleSwitch}>{!isSignUp ? 'SignUp' :'LogIn'}</button>
                </p>
            </div>
        </div>
    </section>
  )
}

export default Login