import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import ProblemSection from "./components/Problem/ProblemSection"
import ProblemGoals from "./components/ProblemGoals/ProblemGoals"
import Middle from "./components/Middle/Middle"
import AboutUsSection from "./components/Team/AboutUs"
import BelieveSection from "./components/BelieveSection/BelieveSection"
import ContactFormSection from "./components/ContactUs/ContactFormSection"
import Footer from "./components/Footer/Footer"
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Hero/>
      <ProblemSection/>
      <ProblemGoals/>
      <Middle />
      <AboutUsSection />
      <BelieveSection />
      <ContactFormSection />
      <Footer />
    </>
  )
}

export default App
