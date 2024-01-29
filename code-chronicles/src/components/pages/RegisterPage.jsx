import { useState } from "react";


export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(event) {
        event.preventDefault();
        fetch('http://localhost:4000', {
            method: 'Post',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        })
    }
    return (
        <div>
            <h2>Code Chronicles</h2>
            <form className="register" onSubmit={register}>
                <h1>Register</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <button>Register</button>
            </form>
        </div>
    );
}; 