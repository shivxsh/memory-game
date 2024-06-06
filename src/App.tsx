import GridCards from "./components/GridCards"

function App() {
  return (
    <div className="justify-center p-5 w-screen h-screen text-center m-0">

      <h1 className="font-bold text-5xl tracking-wide font-Honk mb-16">
        Memory Match
      </h1>

      <GridCards />

      <button className="text-5xl rounded-md cursor-pointer">
        🔄️
      </button>
    </div>
  )
}

export default App
