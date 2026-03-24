import React,{useState} from "react";
import {X} from 'lucide-react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])
  
  const submitHandler = (e)=>{
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({title, details})
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className="flex flex-col lg:w-1/2 font-medium gap-5 p-10 ">
         <h1 className="text-4xl font-bold">Add Notes</h1>

        {/* Heading input */}
        <input type="text" 
        placeholder="Enter notes heading"
        className="px-5 py-2 w-full outline-none border-2 rounded"
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}    
        />

        {/* Detailed input */}
        <textarea type="text" 
        placeholder="Write details"
        className="px-5 w-full h-30 py-2 outline-none border-2 rounded"
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        />

        <button className="bg-white active:bg-gray-400 w-full text-black outline-none px-5 py-2 rounded">Add Notes</button>

      </form>

      <div className=" lg:border-l lg:w-1/2  p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className='flex gap-5 flex-wrap items-start justify-start mt-5 h-full overflow-auto'>
        
            {task.map(function(elem , idx){
              
              return <div key={idx} className=' relative h-50 w-45 rounded-xl p-4 text-black bg-cover
               bg-[url("https://i.pinimg.com/736x/c2/2e/4e/c22e4e66586460c15b1e48c607cd1dc7.jpg")]'>
                <h4 className="absolute cursor-pointer active:scale-{95} top-2 right-2 "><X size={18} strokeWidth={3} /></h4>
                <h3 className='leading-tight text-[18px] font-[650]'>{elem.title}</h3>
                <p className='mt-2 leading-tight font-medium text-gray-800'>{elem.details}</p>
              </div>
            })}

    
        </div>
      </div>
    </div>
  );
};

export default App