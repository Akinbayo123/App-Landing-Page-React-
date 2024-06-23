import './index.css'
import Nav from "./views/Nav.jsx"
import Hero from "./views/Hero.jsx"
import Features from "./views/Features.jsx"
import Testimonial from "./views/Testimonial.jsx"
import Team from './views/Team.jsx'
import { Footer } from './views/Footer.jsx'
function App() {
    return (
        <main>
            <Nav/>
            <Hero/>
            <Features/>
            <Testimonial/>
            <Team/>
            <Footer/>

        </main> 
       
    );
}

export default App