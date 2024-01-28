import React from "react";

export default function LoginPage() {
    return (
        <div>
            <h2>Code Chronicles</h2>
            <form className="login">
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="Username" />
                <input
                    type="password"
                    placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
    );
}; 