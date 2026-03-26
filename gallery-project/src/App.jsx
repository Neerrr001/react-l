import {useState , useEffect} from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  useEffect(function(){
    getData()
  }, [index])

  const getData = async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }

  let printUserData = <h3 className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-500 text-xs font-semibold'>Loading...</h3>

  if(userData.length > 0){
    printUserData = userData.map(function(elem, idx){

      return <div className=''>
        <a href={elem.url} target='_blank'>
        <div className='h-50 w-60 overflow-hidden rounded-xl'>
          <img className='h-full w-full object-cover'src={elem.download_url} alt="" />
        </div>
        <h2 className='font-medium text-lg '>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-y-auto h-screen p-4  text-white'>

      <div className='flex h-[85%] p-4 flex-wrap gap-5'>
        {printUserData}
      </div>

      <div className='flex mt-4 justify-center items-center p-4 gap-4'>
        <button
         className='bg-emerald-400 text-white cursor-pointer active:scale-95 font-medium px-4 py-2 rounded-xl '
         onClick={()=>{
          if(index>1){
          setIndex(index-1)
          setUserData([])
          }
         }}>
         Prev
        </button>
        <h4 className='font-medium'>Page {index}</h4>
        <button
         className='bg-emerald-400 text-white cursor-pointer active:scale-95 font-medium  px-4 py-2 rounded-xl '
         onClick={()=>{
           setUserData([])
          setIndex(index+1)
         }}>
          Next
        </button>
      </div>
    </div>
  )
}

export default App
