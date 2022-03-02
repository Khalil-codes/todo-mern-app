import React from "react";

const Header = () => {
    const user = true;
    return (
        <header className="header">
            <div className="logo">Todofy</div>
            <ul>
                {user ? (
                    <>
                        <li>
                            <span>Khalil</span>
                        </li>
                        <li>
                            <button className="btn">Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>Login</li>
                        <li>Register</li>
                    </>
                )}
            </ul>
        </header>
    );
};

export default Header;
