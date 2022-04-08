import { useState, useEffect } from 'react';
import Error from './Error';

function Form({patients, setPatients, patientToEdit, setPatientToEdit}) {

  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [dischargeDate, setDischargeDate] = useState("");
  const [symptom, setSymptom] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(patientToEdit).length > 0) {
      setPetName(patientToEdit.petName);
      setOwnerName(patientToEdit.ownerName);
      setEmail(patientToEdit.email);
      setDischargeDate(patientToEdit.dischargeDate);
      setSymptom(patientToEdit.symptom);
    }
  }, [patientToEdit]);

  const generateKeyId = () => {
    const random = Math.random().toString(36).slice(2);
    const date = Date.now().toString(36);
    return random + date;
  } 

  const handleSubmit = (event) => {
    event.preventDefault();

    //Form validation
    if([petName, ownerName, email, dischargeDate, symptom].includes("")) {
      setError(true);
      return;
    } 
    setError(false);
          
    const newPatient = {
      petName, 
      ownerName, 
      email, 
      dischargeDate, 
      symptom
    }

    if(patientToEdit.id) {
      // Editing appointment
      newPatient.id = patientToEdit.id;
      const updatedPatients = patients.map( patientState => patientState.id === patientToEdit.id ? newPatient : patientState);
      setPatients(updatedPatients);
      setPatientToEdit({})

    } else {
      // New Appointment
      newPatient.id = generateKeyId()
      setPatients([...patients, newPatient])
    }
    
    // Restart Form
    setPetName("");
    setOwnerName("");
    setEmail("");
    setDischargeDate("");
    setSymptom("");

  }

  return(
    <>
      <div className="md:w-1/2 lg:w-2/5 mb-10">
        <h2 className="font-black text-3xl">Tracking Patients</h2>
        <p className="text-lg mt-5 mb-5">
          Add Patients and 
          <span className="text-indigo-500 font-bold">&nbsp;manage them</span>
        </p>

        <form 
          onSubmit={handleSubmit}
          action=""
          className="bg-white shadow-xl rounded-xl py-10 px-5 mt-14"
        >
          {error && 
            <Error>Please complete all required fields</Error>
          }
          <div className="text-left mb-5">
            <label 
              htmlFor="pet"
              className="block font-bold text-gray-700 uppercase"
            >Pet Name</label>
            <input 
              id="pet"
              type="text"
              placeholder="Pet's name"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={petName}
              onChange={(event) => setPetName(event.target.value)}
            />
          </div>

          <div className="text-left mb-5">
            <label 
              htmlFor="owner"
              className="block font-bold text-gray-700 uppercase"
            >Owner</label>
            <input 
              id="owner"
              type="text"
              placeholder="Owner's name"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={ownerName}
              onChange={(event) => setOwnerName(event.target.value)}
            />
          </div>

          <div className="text-left mb-5">
            <label 
              htmlFor="email"
              className="block font-bold text-gray-700 uppercase"
            >Email</label>
            <input 
              id="email"
              type="email"
              placeholder="Owner's email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="text-left mb-5">
            <label 
              htmlFor="date"
              className="block font-bold text-gray-700 uppercase"
            >Discharge Date</label>
            <input 
              id="date"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={dischargeDate}
              onChange={(event) => setDischargeDate(event.target.value)}
            />
          </div>

          <div className="text-left mb-5">
            <label 
              htmlFor="symptom"
              className="block font-bold text-gray-700 uppercase"
            >Symptoms</label>
            <textarea 
              name="symptom"
              id="symptom"
              cols="30" 
              rows="10"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe the symptoms"
              value={symptom}
              onChange={(event) => setSymptom(event.target.value)}
            ></textarea>
          </div>

          <input 
            type="submit" 
            value={ patientToEdit.id ? "Save Edition" : "Create Appointment"}
            className="border-2 w-full p-2 mt-2 text-white bg-indigo-700  rounded-md hover:bg-indigo-500 cursor-pointer"
          />
        </form>
      </div>
      
    </>
  );
}

export default Form;