import Header from "./components/Header";
import Form from "./components/Form";
import ListPatients from "./components/ListPatients";

function App() {

  return (
    <div className="container mt-10 mx-auto text-center">
      <Header />
      <div className="mt-12 md:flex">
        <Form />
        <ListPatients />
      </div>
    </div>
  )
}

export default App
