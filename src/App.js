import './App.css'
import FirstSection from './components/FirstSection'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header></Header>
      <FirstSection></FirstSection>
      <Introduction></Introduction>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </>
  )
}

export default App
