import React, { useState, useContext } from 'react'
import classes from './signup.module.css'
import { Link,useNavigate, useLocation } from 'react-router-dom'
import {auth} from '../../Utility/firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import {DataContext} from "../../Components/DataProvider/DataProvider"
import {Type} from "../../Utility/action.type"
import {ClipLoader} from 'react-spinners'
function Auth () {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn:false,
    signUp:false
  })

  const [{user}, dispatch] = useContext(DataContext)
  const navigate = useNavigate()
  const navStateData = useLocation()
  console.log(navStateData);
const authHandler = async(e) => {
  e.preventDefault()
 
  if(e.target.name == "signin"){
    setLoading({...loading, signIn:true})
    signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
      
      dispatch({
        type:Type.SET_USER,
        user:userInfo.user,
      })
      setLoading({ ...loading, signIn:false });
      navigate(navStateData?.state?.redirect || "/")
    }).catch((err)=>{
      setError(err.message)
      setLoading({ ...loading, signIn:false });
    })

  }else{
    setLoading({ ...loading, signUp:true });
    createUserWithEmailAndPassword(auth, email, password).then((userInfo)=>{
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user,
      });
      setLoading({ ...loading, signUp:false });
      navigate(navStateData?.state?.redirect || "/");
    }).catch((err)=>{
      setError(err.message);
      setLoading({ ...loading, signUp:false });
    })
  }
}


  
  return (
    <section className={classes.login}>
      <Link to={"/"} >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small 
          style={{
            padding:"5px",
            textAlign:"center",
            color:"red",
            fontWeight:"bold"
          }}>
            {navStateData?.state?.msg}
          </small>
        )

        }
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login_signInButton}
          >
            {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              " Sign In"
            )}
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login_registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            " Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth
