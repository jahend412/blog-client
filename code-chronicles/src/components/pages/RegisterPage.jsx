import React from "react";

export default function RegisterPage() {
    return (
        <div>
            <h2>Code Chronicles</h2>
            <form className="register">
                <h1>Register</h1>
                <input
                    type="text"
                    placeholder="Username" />
                <input
                    type="password"
                    placeholder="Password" />
                <button>Register</button>
            </form>
        </div>
    );
}; 