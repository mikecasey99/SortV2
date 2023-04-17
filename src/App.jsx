import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import HeaderComp from './components/HeaderComp'
import isArraySorted from 'is-array-sorted';


function App() {

  const [output, setOutput] = useState([]);
  const [generate, setGenerate] = useState(false);
  const [inSort, setInSort] = useState('none');

  if(inSort === 'bubble'){
    BubbleSort();
  }
  else if(inSort === 'selection'){
    selectionSort()
  }

  function BubbleSort(){
    if(isArraySorted(output)){
      console.log('DONE!')
      setInSort('none');
    }
    else{
      setTimeout(() => {
        setOutput((current) => {
          let output = current.slice(0);
          let len = output.length;
          let temp = null;
          for (let j = 0; j < len; j++) {
              if (output[j] > output[j + 1]) {
                  let tmp = output[j];
                  output[j] = output[j + 1];
                  output[j + 1] = tmp;
              }
          }
          return output;
        })
      }, 50)
    }
  }

  function selectionSort(){
    if(isArraySorted(output)){
      console.log('DONE!')
      setInSort(false);
    }
    else{
      setTimeout(() => {
        setOutput((current) => {
          let output = current.slice(0);
          let n = output.length;
          for(let i = 0; i < n; i++) {
              // Finding the smallest number in the subarray
              let min = i;
              for(let j = i+1; j < n; j++){
                  if(output[j] < output[min]) {
                      min=j; 
                  }
               }
               if (min != i) {
                   // Swapping the elements
                   let tmp = output[i]; 
                   output[i] = output[min];
                   output[min] = tmp;
                   break;      
              }
          }
          return output;
        })
      }, 50)
    }
  }




  useEffect(() => {
    setOutput((current) => {
      current = [];
      for(let i = 0; i < 70; i++){
        current.push(Math.floor(Math.random() * 450) + 25);
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
      <HeaderComp newArray={() => setGenerate(cur => !cur)} bubbleSort={() => setInSort('bubble')}
      selectionSort={() => setInSort('selection')}/>
      <div className="bar-display">
        {display}
      </div>
    </div>
  )
}

export default App
