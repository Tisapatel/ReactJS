import Navbar from './component/Navbar'
import Form from './component/Form'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container mt-4">
        <div className="mx-auto col-6">
          <Form />
        </div>
      </main>
    </>
  )
}

export default App
