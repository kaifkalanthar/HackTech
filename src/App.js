import AboutPage from "./component/aboutPage";
import ContactForm from "./component/contactForm";
import Footer from "./component/footer";
import HomePage from "./component/homePage";
import NavBar from "./component/navBar";
import PrizePage from "./component/prizePage";
import ProbStat from "./component/problemStatement";
import Sponsers from "./component/sponsers";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <AboutPage />
      <ProbStat />
      <PrizePage />
      <Sponsers/>
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
