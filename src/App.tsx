// App.tsx
import React from 'react'
import SomeExampleComponent from './components/aboutMe/aboutMe';
import ClickCount from './components/footer/footer';



const App: React.FC = () => {
  return (
    <div>
    
      <SomeExampleComponent />
      <ClickCount />
    </div>
  )
}

export default App
