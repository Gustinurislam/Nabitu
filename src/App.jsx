import Footer from "./components/Footer"
import GreenBox from "./components/GreenBox"
import Header from "./components/Header"
import Main from "./components/Main"
import SectionMember from "./components/SectionMember"

function App() {
  return (
    <div className="scrollbar scrollbar-thumb-[#195A32] scrollbar-track-white scrollbar-thumb-rounded h-screen">
      <Header />
      <Main />
      <SectionMember />
      <GreenBox />
      <Footer />
    </div>
  )
}

export default App
