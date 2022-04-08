import { useState } from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import ListPatients from "./components/ListPatients";

function App() {

  const [patients, setPatients] = useState([]);
  const [patientToEdit, setPatientToEdit] = useState({});

  return (
    <div className="container mt-10 mx-auto text-center">
      <Header 

      />
      <div className="mt-12 md:flex">
        <Form 
          patients={patients}
          setPatients={setPatients}
          patientToEdit={patientToEdit}
          setPatientToEdit={setPatientToEdit}
        />
        <ListPatients 
          patients={patients}
          patientToEdit={patientToEdit}
          setPatientToEdit={setPatientToEdit}
        />
      </div>
    </div>
  )
}

export default App
