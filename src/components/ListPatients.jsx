import Patient from "./Patient";

function ListPatients({patients}) {

  if(patients.length === 0) {
    return(
      <div className="md:w-1/2 lg:w-3/5 mb-10">
        <h2 className="font-black text-3xl">Add patients</h2>
      </div>
    )
  }

  return(
    <div className="md:w-1/2 lg:w-3/5 mb-10">
      <h2 className="font-black text-3xl">Patients List</h2>
      <p className="text-xl mt-5">
        Manage your&nbsp;
        <span className="text-indigo-500 font-bold">appointments</span>
      </p>
      <div className="patient__container h-screen overflow-y-scroll mt-9">
        { patients.map((patient) => 
           <Patient 
             key={patient.id}
             patient={patient}
           />
        )}
      </div>
    </div>
  );
}

export default ListPatients;