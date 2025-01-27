import { useState } from "react"
import { useLocation } from "react-router-dom"
import './css/Login.css';

function Login() {
    const [loginFormData, setLoginFormData] = useState({email: "", password: ""})

    const location = useLocation()
    console.log(location)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target
        setLoginFormData (prev => ({
            ...prev, [name] : value
        }))
    }

  return (
    <div className="login-container">
      { location.state?.message && <h3>{location.state.message}</h3> }
      <h1>Sign in to your account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        
        <input name="email" onChange={handleChange} type="email" placeholder="Email" value={loginFormData.email}  />
        <input name="password" onChange = {handleChange} type="password" placeholder="Password" value={loginFormData.password}  />

        <button type="submit">Login</button>

      </form>

    </div>
  )
}

export default Login