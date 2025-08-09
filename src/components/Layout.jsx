import TopBanner from './TopBanner'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBanner />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
