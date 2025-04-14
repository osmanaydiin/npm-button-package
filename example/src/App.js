import React from 'react'

import { BismillahBtn } from 'bismillah-btn'
import 'bismillah-btn/dist/index.css'

const App = () => {
  return <BismillahBtn 
    isDark={false} 
    text="Bismillah" 
    width="200px" 
    height="60px" 
    onClick={() => alert('Bismillah')} 
  />
}

export default App
