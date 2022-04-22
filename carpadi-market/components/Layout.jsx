import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

export default function Layout({children}) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}
