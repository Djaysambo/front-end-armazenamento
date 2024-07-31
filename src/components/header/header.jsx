import { Link, useSearchParams } from "react-router-dom";

export const Header = () => {
  const [setSearchParams] = useSearchParams();

  function handleSearchForm(e) {
    e.preventDefault();
    const searchString = e.target.search.value;

    setSearchParams({ search: searchString });
  }
  return (

    <>
      <header style={{ backgroundColor: '#004e89', padding: '8px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        
        <div style={{ borderRadius: '50%', overflow: 'hidden', width: '50px', height: '50px', marginRight: '10px' }}>
          <img src="/image1.jpg" alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
        </div>
        <h1 style={{ borderRadius: "2px", color: "aqua", margin: '0 10px' }}>Djay-Sambo Bytes4f</h1>
      </div>
          
        <nav style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          margin: '0 auto',
          maxWidth: '100%',
          paddingRight: '10px',
          flexWrap: 'wrap'
        }}>
          <Link
            to="/"
            style={{
              margin: '0 10px',
              color: 'aqua',
              textDecoration: 'none',
              padding: '8px',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease'
            }}
          >
            Home
          </Link>
          <Link
            to="/login"
            style={{
              margin: '0 10px',
              color: 'aqua',
              textDecoration: 'none',
              padding: '8px',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease'
            }}
          >
            login
          </Link>
          <Link
            to="/sign-up"
            style={{
              margin: '0 10px',
              color: 'aqua',
              textDecoration: 'none',
              padding: '8px',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease'
            }}
          >
            Sign-up
          </Link>
        </nav>
      </header>

    </>

  );
};
