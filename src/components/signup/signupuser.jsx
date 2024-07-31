import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";


export const SignUpUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const titleAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { duration: 2000 },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ username, email, password });
  };

  return (
    <>
    
      <div
        style={{
          maxWidth: "50%",
          marginBottom: "30px",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          margin: "0 auto",
        }}
      >
        <animated.h2
          style={{
            ...titleAnimation,
            margin: "0 0 20px 0",
            fontSize: "24px",
            color: "#333",
          }}
        >
          Sign Up
        </animated.h2>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="username"
            style={{
              display: "block",
              margin: "10px 0 5px",
              fontSize: "14px",
              color: "#555",
            }}
          >
            <animated.h2
              style={{
                ...titleAnimation,
                margin: "0 0 20px 0",
                fontSize: "24px",
                color: "#333",
              }}
            >
              Nome de usuário:
            </animated.h2>
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              boxSizing: "border-box",
              marginBottom: "15px",
              fontSize: "14px",
            }}
          />

          <label
            htmlFor="email"
            style={{
              display: "block",
              margin: "10px 0 5px",
              fontSize: "14px",
              color: "#555",
            }}
          >
            <animated.h2
              style={{
                ...titleAnimation,
                margin: "0 0 20px 0",
                fontSize: "24px",
                color: "#333",
              }}
            >
              Email:
            </animated.h2>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              boxSizing: "border-box",
              marginBottom: "15px",
              fontSize: "14px",
            }}
          />

          <label
            htmlFor="password"
            style={{
              display: "block",
              margin: "10px 0 5px",
              fontSize: "14px",
              color: "#555",
            }}
          >
            <animated.h2
              style={{
                ...titleAnimation,
                margin: "0 0 20px 0",
                fontSize: "24px",
                color: "#333",
              }}
            >
              Password:
            </animated.h2>
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              boxSizing: "border-box",
              marginBottom: "15px",
              fontSize: "14px",
            }}
          />

          <button
            type="submit"
            style={{
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              padding: "10px 15px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
              width: "100%",
              transition: "background-color 0.3s ease",
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
     
    </>
  );
};
