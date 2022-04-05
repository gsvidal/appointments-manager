import Patient from "./Patient";

function ListPatients() {
  return(
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl">Patients List</h2>
      <p className="text-xl mt-5">
        Manage your&nbsp;
        <span className="text-indigo-600 font-bold">appointments</span>
      </p>
      <div className="patient__container h-screen overflow-y-scroll mt-9">
        <Patient />
        <Patient />
        <Patient />
        <Patient />
        <Patient />
        <Patient />
        <Patient />
        <Patient />
      </div>
      
    </div>
  );
}

export default ListPatients;