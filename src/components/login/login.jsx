import { useState } from "react";


 
 
export const LoginUser = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
  
    const handleSubmit = (event) => {
        event.preventDefault();
            };
  
    return (
      <>
 
        <div
        style={{
            maxWidth: '50%',
            marginBottom: '30px',
           
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            margin: '0 auto',
        }}
    >
        <h2
            style={{
                margin: '0 0 20px 0',
                fontSize: '24px',
                color: '#333',
            }}
        >
        Login
        </h2>
        <form onSubmit={handleSubmit}>
            <label
                htmlFor="username"
                style={{
                    display: 'block',
                    margin: '10px 0 5px',
                    fontSize: '14px',
                    color: '#555',
                }}
            >
                Nome de usuário:
            </label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    boxSizing: 'border-box',
                    marginBottom: '15px',
                    fontSize: '14px',
                }}
            />
           
            <label
                htmlFor="password"
                style={{
                    display: 'block',
                    margin: '10px 0 5px',
                    fontSize: '14px',
                    color: '#555',
                }}
            >
                Password:
            </label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    boxSizing: 'border-box',
                    marginBottom: '15px',
                    fontSize: '14px',
                }}
            />
            <button
                type="submit"
                style={{
                    backgroundColor: '#28a745',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 15px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    width: '100%',
                    transition: 'background-color 0.3s ease',
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#218838'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#28a745'}
            >
                Entrar
            </button>
        </form>
    </div>
   
      </>
      
    );
  };
  
  
  
  