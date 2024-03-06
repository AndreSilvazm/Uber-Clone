import Header from '../Components/Header'
import LandingPage from '../Components/LandingPage/index'
import SecondLanding from '../Components/SecondLanding'
import AboutLanding from '../Components/AboutLanding'
import AppSection from '../Components/AppSection'

export default function Home() {
  return (
    <main>
      <Header/>
      <LandingPage/>
      <SecondLanding/>
      <AboutLanding/>
      <AppSection/>


    </main>
  );
}
