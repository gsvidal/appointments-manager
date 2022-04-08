function Patient({patient, setPatientToEdit}) {

  return(
    <div className="m-5 bg-white shadow-xl p-8 rounded-xl text-left">
      <p className="font-bold mb-3 uppercase text-gray-700">Pet Name:&nbsp;
        <span className="font-normal normal-case">{patient.petName}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">Owner:&nbsp;
        <span className="font-normal normal-case">{patient.ownerName}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">Email:&nbsp;
        <span className="font-normal normal-case">{patient.email}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">Discharge Date:&nbsp;
        <span className="font-normal normal-case">{patient.dischargeDate}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">Symptoms:&nbsp;
        <span className="font-normal normal-case">{patient.symptom}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="text"
          className="py-2 px-6 bg-indigo-700 hover:bg-indigo-500 text-white rounded-md "
          onClick={() => setPatientToEdit(patient)}
        >
          Edit
        </button>
        <button
          type="text"
          className="py-2 px-6 bg-red-700 hover:bg-red-500 text-white rounded-md "
        >
          Delete
        </button>
      </div>

    </div>
  );
}

export default Patient;