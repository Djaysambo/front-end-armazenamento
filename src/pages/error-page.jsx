import Footer from "../components/footer/footer";
import { Header } from "../components/header/header";


export const ErrorPage = () => {
  return (
    <>
      <Header />
      <main className="bg-red-600">
        <div className="">
          <h1 className="font-bold text-center text-lg">404</h1>
        </div>

      </main>
      <Footer/>

    </>
  );
};
