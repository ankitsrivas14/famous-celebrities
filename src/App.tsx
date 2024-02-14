import './App.css'
import Collapsible from "./design-system/Collapsible/Collapsible"
import CelebrityInfo from './components/shared/CelebrityInfo/CelebrityInfo'


function App() {
  return (
    <div className="App">
      <Collapsible>
        <CelebrityInfo />
      </Collapsible>
    </div>
  )
}

export default App
