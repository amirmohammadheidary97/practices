import * as React from "react"
import Wave from "./Wave"

function Greeting ({ name }) {
  const [index, setIndex] = React.useState(0)
  const [waveIndex, setWaveIndex] = React.useState(0)

  const greetings = ['Hello', "Hola", "Bonjour"]

  const handleClick = () => {
    const nextIndex = index === greetings.length - 1
      ? 0
      : index + 1
    setIndex(nextIndex)
  }

  const handleWaveClick = () => {
    const nextIndex = waveIndex === 5
      ? 0
      : waveIndex + 1
    setWaveIndex(nextIndex)
  }

  const options = {
    animate: true,
    tone: waveIndex
  }

  return (
    <main>
      <h1>{greetings[index]}, {name}</h1>
      <button onClick={handleClick}>
        Next Greeting
      </button>
      <Wave onClick={handleWaveClick} options={options} />
    </main>
  )
}

export default function App () {
  return <Greeting name="Tyler" />
}
