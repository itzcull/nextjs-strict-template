import Footer from "components/Footer"
import Header from "components/Header"
import { NextPage } from "next"

const MainLayout: NextPage = ({ children }) => {
  // Heading & Footer
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
