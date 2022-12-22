import React,{useState} from 'react'
import Header from './Header'

const quotes = [
  'The unspoken word never does harm.',
  'We are bits of stellar matter that got cold by accident, bits of a star gone wrong.',
  'The question should be, is it worth trying to do, not can it be done.',
]
function Apps() {

  const [quote, setQuote] = useState(quotes[0])

  function randomizeQuote(){
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomQuote)
  }



  return <div>


    <div>{quote}</div>
    <button onClick={randomizeQuote}> Click Me </button>
    </div>
}

export default Apps