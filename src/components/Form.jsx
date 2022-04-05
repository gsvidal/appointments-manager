import { useState, useEffect } from 'react';

function Form() {

  const [name, setName] = useState("ff");

  return(
    <>
      <div className="md:w-1/2 lg:w-2/5 mb-10">
        <h2 className="font-black text-3xl">Tracking Patients</h2>
        <p className="text-lg mt-5 mb-5">
          Add Patients and 
          <span className="text-indigo-500 font-bold">&nbsp;manage them</span>
        </p>

        <form 
          action=""
          className="bg-white shadow-xl rounded-xl py-10 px-5 mt-14"
        >
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
              value={name}
              onChange={(event) => setName(event.target.value)}
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
            ></textarea>
          </div>

          <input 
            type="submit" 
            value="Create appointment"
            className="border-2 w-full p-2 mt-2 text-white bg-indigo-700  rounded-md"
          />
        </form>
      </div>
      
    </>
  );
}

export default Form;