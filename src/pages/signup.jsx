import { Header } from "../components/header/header";
import Footer from "../components/footer/footer";
import { SignUpUser } from "../components/signup/signupuser";

export const SignUp = () => {
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
        <SignUpUser/>
        </div>
        <Footer />
      </div>
    </>
  );
};