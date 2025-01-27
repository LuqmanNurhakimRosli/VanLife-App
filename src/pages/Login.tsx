import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../api";
import './css/Login.css';

interface LoginResponse {
    user: { id: string; name: string; };
    token: string;
}

interface ErrorResponse {
    message: string;
}

function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });
    const [status, setStatus] = useState<"idle" | "submitting">("idle");
    const [error, setError] = useState<ErrorResponse | null>(null);

    const location = useLocation();
    const navigate = useNavigate();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");
        loginUser(loginFormData)
            .then((data: LoginResponse) => {
                console.log('Login successful, navigating to /host');
                setError(null);
                localStorage.setItem("loggedin", String(true))
                navigate("/host", {replace: true})
            })
            .catch((error: ErrorResponse) => {
                console.error('Login error:', error);
                setError(error);
            })
            .finally(() => setStatus("idle"));
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setLoginFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <div className="login-container">
            {location.state?.message && <h3>{location.state.message}</h3>}
            <h1>Sign in to your account</h1>
            {error?.message && <h3>{error.message}</h3>}

            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email"
                    value={loginFormData.email}
                    disabled={status === "submitting"}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                    disabled={status === "submitting"}
                />

                <button disabled={status === "submitting"}>
                    {status === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </form>
        </div>
    );
}

export default Login;