import React,{useState} from "react";

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Form is submitted");  
  }

  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className="flex flex-col lg:w-1/2 font-medium gap-5 p-10 ">
         <h1 className="text-4xl font-bold">Add Notes</h1>


        <input type="text" 
        placeholder="Enter notes heading"
        className="px-5 py-2 w-full outline-none border-2 rounded"
        />
        <textarea type="text" 
        placeholder="Write details"
        className="px-5 w-full h-30 py-2 outline-none border-2 rounded"
        />
        <button className="bg-white w-full text-black outline-none px-5 py-2 rounded">Add Notes</button>
      </form>

      <div className="bg-gray-800 lg:border-l lg:w-1/2  p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className='flex gap-5 flex-wrap mt-5 h-full overflow-auto'>
          <div className="h-52 w-47 rounded-2xl bg-white"></div>
          <div className="h-52 w-47 rounded-2xl bg-white"></div>
          <div className="h-52 w-47 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default App