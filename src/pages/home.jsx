import Footer from "../components/footer/footer";
import { Header } from "../components/header/header";
import { HomeInf } from "../components/home/home";

export const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <div
          style={{
            flex: 1,
          }}
        >
         <HomeInf/>
        </div>
        <Footer />
      </div>
    </>
  );
};
/*

const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', 
    }}>
      <Header />
      <div style={{
        flex: 1, 
      }}>
        <SignUpUser />
      </div>
      <Footer />
    </div>
  );
};

export default App;
*/
