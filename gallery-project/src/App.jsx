import {useState} from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])

  const getData = async()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=25')
    
    setUserData(response.data)
  }

  let printUserData = 'No user available'

  if(userData.length > 0){
    printUserData = userData.map(function(elem, idx){

      return <div>
        <a href={elem.url} target='_blank'>
        <div className='h-40 w-44 overflow-hidden rounded-xl'>
          <img className='h-full w-full object-cover'src={elem.download_url} alt="" />
        </div>
        <h2 className='font-medium text-lg '>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <button
        onClick={getData}
        className='bg-green-600 active:scale-95 px-5 py-2 mb-4 rounded '>
        Get data
      </button>
      

      <div className='flex flex-wrap gap-3'>
        {printUserData}
      </div>
    </div>
  )
}

export default App
