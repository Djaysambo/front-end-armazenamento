
import { Header } from "../components/header/header";
import Footer from "../components/footer/footer";
import { LoginUser } from "../components/login/login";



export const Login = () => {
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
            <LoginUser/>
          
          </div>
          <Footer />
        </div>
      </>
    );
  };