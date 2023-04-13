import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
function App() {
  return (
    <div className="main">
      <header>
        <Navbar />
      </header>
      <section>
        Soy el contenido de la web
      </section>
      <Footer/>
    </div>
    )
}
export default App