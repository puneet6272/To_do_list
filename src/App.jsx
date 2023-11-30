import { useEffect, useState } from 'react'
import './App.css'
import Items from './Components/Items'


function App() {


  const data = [{
    id: "e1",
    work: "Study"
  }, {
    id: "e2",
    work: "Cooking"
  }]



  const [newData, setNewData] = useState(data)

  const [editAbleVideo, setEditAbleVideo] = useState(null)

  const [vid,setVid] = useState({work:''})


  function submitData(e) {
    e.preventDefault()

    if(editAbleVideo){

      let index =  newData.findIndex(v=>v.id === vid.id)
      let res = [...newData]
      res.splice(index,1,vid)
      setNewData(res)

    }else{
      setNewData([...newData, {
        id: `${Math.random()}`,
        ...vid
      }])

    }
setVid({work:''})
  }



  function deleteItem(id) {
    setNewData(newData.filter((name) => name.id !== id))
  }


  function Edit(id) {
    console.log("object")

    let Edited_OBJ = newData.find((item) => item.id === id)
    setEditAbleVideo(Edited_OBJ)

  }



  useEffect(()=>{
    if(editAbleVideo)
    setVid(editAbleVideo)
  console.log(vid)
  },[editAbleVideo])

  return (
    <div className=' grid  place-items-center h-screen'>
      <div className='grid_container rounded-md md:w-[400px]'>


        <header className="grid_item flex justify-center items-center flex-col">


          <div className='  w-24'>
            <img src="../public/images/vecteezy_icon-hand-with-pencil-put-marks-in-calendar_20716207.png" alt="" />
          </div>

          <p className=' w-36 mt-1 ml-4  text-lg font-semibold'>Add your To Do</p>


          <form onSubmit={submitData}>


            <input type="text" placeholder='Enter Text Here' className='p-1 text-black rounded-l-md' onChange={(e) => setVid({...vid,[e.target.name]:e.target.value})} name='work' value={vid.work} />


            <button className=' bg-slate-300  text-black m-2 p-1 rounded-r-md hover:bg-slate-600 hover:text-white' type="submit">Add</button>

          </form>
        </header>


        <main className="overflow-auto">

          {
            newData.map((item) => (
              <Items
                deleteItem={deleteItem}
                Edit={Edit}
                id={item.id}
                key={item.id}
                work={item.work}
              />
            ))
          }
        </main>




      </div>
    </div>
  )
}

export default App
