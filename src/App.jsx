import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Component/Watch/Watch'

function App() {

  const [watches, setWatches] = useState([]);

  // useEffect(() => {
  //   fetch('watches.json')
  //     .then(res => res.json())
  //     .then(data => setWatches(data));
  // }, [])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/reyad-hasan/watches-data/main/watches.json')
      .then(res => res.json())
      .then(data => setWatches(data));
  }, [])

  // const watches = [
  //   {
  //     "id": 1,
  //     "name": "Apple Watch Series 7",
  //     "price": 399.99
  //   },
  //   {
  //     "id": 2,
  //     "name": "Galaxy Watch 4",
  //     "price": 249.99
  //   },
  //   {
  //     "id": 3,
  //     "name": "Fitbit Versa 3",
  //     "price": 179.95
  //   },
  //   {
  //     "id": 4,
  //     "name": "Garmin Forerunner 945",
  //     "price": 549.99
  //   },
  //   {
  //     "id": 5,
  //     "name": "Fossil Gen 5",
  //     "price": 249.00
  //   }
  // ];



  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
