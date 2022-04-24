import Footer from 'components/Footer'
import Header from 'components/Header'
import { NextPage } from 'next'

const MainLayout: NextPage = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default MainLayout
