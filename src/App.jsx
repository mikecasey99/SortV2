import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import HeaderComp from './components/HeaderComp'

function App() {

  const [output, setOutput] = useState([]);
  const [generate, setGenerate] = useState(false);


  function BubbleSort(){
    setOutput((current) => {
      let output = current.slice(0);
      let len = output.length;
      for (let i = 0; i < len; i++) {
          for (let j = 0; j < len; j++) {
              if (output[j] > output[j + 1]) {
                  let tmp = output[j];
                  output[j] = output[j + 1];
                  output[j + 1] = tmp;
              }
            }
      }
      return output;
    })
  }


  useEffect(() => {
    setOutput((current) => {
      current = [];
      for(let i = 0; i < 50; i++){
        current.push(Math.floor(Math.random() * 250) + 25);
      }
      return current;
    })
  },[generate])


  const display = output.map((height) => {
    let temp = {
      height : `${height}px`
    }
    return <div className='bar' style={temp} key={crypto.randomUUID()}>{height}</div>
  })

  return (
    <div className="App">
      <HeaderComp newArray={() => setGenerate(cur => !cur)} bubbleSort={() => BubbleSort()}/>
      <div className="bar-display">
        {display}
      </div>
    </div>
  )
}

export default App
