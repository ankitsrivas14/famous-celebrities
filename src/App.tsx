import './App.css'
import Collapsible from "./design-system/Collapsible/Collapsible"
import CelebrityInfo from './components/shared/CelebrityInfo/CelebrityInfo'
import Celebrities from './data/celebrities.json'
import { useState } from 'react'


function App() {
  const [activeCelebrityId, setActiveCelebrityId] = useState<null | number>(null);

  const handleCollapsibleClick = (id: number) => {
    setActiveCelebrityId(activeCelebrityId === id ? null : id)
  }

  return (
    <div className="App">
      {Celebrities.map(celebrity => (
        <Collapsible 
          key={celebrity.id} 
          id={celebrity.id} 
          isOpen={activeCelebrityId === celebrity.id}
          onClick={handleCollapsibleClick}
          picture={celebrity.picture}
        >
          <CelebrityInfo 
            description={celebrity.description} 
          />
        </Collapsible>
      ))}
    </div>
  )
}

export default App
