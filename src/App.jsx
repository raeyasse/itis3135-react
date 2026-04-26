import { Route, Routes, HashRouter } from "react-router"
import Index from './pages/index'
import Header from './components/header'
import Contract from './pages/contract'
import Footer from './components/footer'
import Cards from './pages/Cards'
import Product from './pages/Product'
import Documentation from './pages/Documentation'
import IntroForm from './pages/IntroForm'
import Inventory from './pages/Inventory'
import Survey from './pages/Survey'
import WebsiteEvaluations from './pages/WebsiteEvaluations'
import Slideshow from './pages/Slideshow'

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <main>
          <Routes>
            <Route index element={<Index />}></Route>
            <Route path="/contract" element={<Contract />}></Route>
            <Route path="/cards" element={<Cards />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/documentation" element={<Documentation />}></Route>
            <Route path="/survey" element={<Survey />}></Route>
            <Route path="/intro_form" element={<IntroForm />}></Route>
            <Route path="/inventory" element={<Inventory />}></Route>
            <Route path="/website_evaluations" element={<WebsiteEvaluations />}></Route>
            <Route path="/slideshow" element={<Slideshow />}></Route>
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App