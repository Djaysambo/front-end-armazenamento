import React from "react";

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#004e89',
      position: 'relative',
      textAlign: 'center',
      bottom: '0',
      padding: '10px 0',
      width: '100%',
      borderTop: '2px solid #4CAF50',
      color: 'white',
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          color: 'aqua',
          fontWeight: 'bold',
        }}>
          <p style={{
            fontSize: '1.2em',
            marginBottom: '2px',
          }}>&copy; 2024 Djay-Sambo. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️ por Vicente Sambo</p>
        </div>
        <div style={{
          color: 'white',
          fontSize: '20px',
          margin: '0 10px',
        }}>
          <a href="https://www.facebook.com/seupagina" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '20px', margin: '0 10px' }}>
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://www.twitter.com/seupagina" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '20px', margin: '0 10px' }}>
            <i className="fab fa-twitter-square"></i>
          </a>
          <a href="https://www.instagram.com/seupagina" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '20px', margin: '0 10px' }}>
            <i className="fab fa-instagram-square"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
