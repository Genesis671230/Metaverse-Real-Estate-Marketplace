import React, { useContext, useEffect, useState } from 'react'
import { PanoramaContext } from '../../../states/panorama_context';

function Appartements() {

  const {datas, setDatas} = useContext(PanoramaContext);


  const [rooms, setRooms]=useState(0);
  const [yes, setYes]=useState(0);
  const [confort, setConfort]=useState(0);
  const [usableSurface, setUsableSurface]=useState("");
  const [floor, setFloor]=useState("");
  const [yearOfconstruction, setYearOfconstruction]=useState("");
  const [constructionType, setConstructionType]=useState("");
  const [partitioning, setPartitioning]=useState("");
  const [parkingType, setParkingType] = useState("");
  const [altitudeRegime, setAltitudeRegime] = useState();
  useEffect(() => {
     if (datas.estateType=="apartements" || constructionType !==""){
        setDatas({
            ...datas,
           rooms,
           Yes:yes,
           Confort:confort,
           UsableSurface:usableSurface,
           Floor:floor,
           YearsOfConstruction:yearOfconstruction,
           AltitudeRegime:altitudeRegime,
           constructionType:constructionType,
           partitioning,
           parkingType

        })
     }


    }, [rooms,yes,confort,parkingType,partitioning,usableSurface,constructionType,floor,yearOfconstruction,altitudeRegime])
    
    useEffect(() => {
    console.log(datas)
    }, [datas])

  return (
    <>
      <div className='mt-4 h-20 ' >
        <div className='h-12 grid  grid-cols-1' >
          <div className='flex flex-row gap-5 col-span-1' >
            <div className={`h-20 w-36 flex items-center bg-temp-gray2  flex-col justify-center text-white text-sm`} >
              <span className=' mb-2' >Rooms</span>
              <div className='flex items-center justify-center' >
                <a onClick={()=>rooms>0?setRooms(rooms-1):setRooms(0)} className=' cursor-pointer hover:border-white hover:text-white w-6 h-6 border rounded-full border-cyan-900  text-cyan-900 font-medium flex items-center justify-center' >-</a>
                <span className='w-10 flex items-center justify-center' >{rooms}</span>
                <a onClick={()=>setRooms(rooms+1)} className='w-6 h-6 border cursor-pointer hover:border-white hover:text-white rounded-full border-cyan-900  text-cyan-900 font-medium flex items-center justify-center' >+</a>
              </div>
            </div>
            <div className={`h-20 w-36 flex items-center bg-temp-gray2  flex-col justify-center text-white text-sm`} >
              <span className=' mb-2' >Yes</span>
              <div className='flex items-center justify-center' >
                <a onClick={()=>yes>0?setYes(yes-1):setYes(0)} className=' cursor-pointer hover:border-white hover:text-white w-6 h-6 border rounded-full border-cyan-900  text-cyan-900 font-medium flex items-center justify-center' >-</a>
                <span className='w-10 flex items-center justify-center' >{yes}</span>
                <a onClick={()=>setYes(yes+1)} className='w-6 h-6 border cursor-pointer hover:border-white hover:text-white rounded-full border-cyan-900  text-cyan-900 font-medium flex items-center justify-center' >+</a>
              </div>
            </div>
            <div className={`h-20 w-36 flex items-center bg-temp-gray2  flex-col justify-center text-white text-sm`} >
              <span className=' mb-2' >Confort</span>
              <div className='flex items-center justify-center' >
                <select name="confort" onChange={(e)=>setConfort(e.target.value)} value={confort} id="confort" className='w-24 text-center outline-none text-black'>
                  <option selected={confort!=0?true:false} value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="lux">lux</option>
                </select>
              </div>
            </div>
            <div className={`h-20 w-36 flex items-center bg-temp-gray2  flex-col justify-center text-white text-sm`} >
              <span className=' mb-2' >Usable surface</span>
              <div className='flex items-center justify-center' >
                <input onChange={(e)=>setUsableSurface(e.target.value)} type={'text'} className='w-14 text-center outline-none text-white border-b bg-temp-gray2 border-b-cyan-900 border-dashed' />
              </div>
            </div>
            <div className={`h-20 w-36 flex items-center bg-temp-gray2  flex-col justify-center text-white text-sm`} >
              <span className=' mb-2' >Floor</span>
              <div className='flex items-center justify-center' >
                <select name="floor" onChange={(e)=>setFloor(e.target.value)} value={floor} id="confort" className='w-24 text-center outline-none text-black'>
                  <option selected={confort!=0?true:false} value="semi-basement">Semi-basement </option>
                  <option value="parties">Partie</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="2">3</option>
                  <option value="2">4</option>
                  <option value="2">5</option>
                  <option value="2">6</option>
                </select>
              </div>
              
            </div>
            <div className={`h-20 w-36 flex items-center bg-temp-gray2  flex-col justify-center text-white text-sm`} >
              <span className=' mb-2' >Year of construction</span>
              <div className='flex items-center justify-center' >
                <input type={'text'} onChange={(e)=>setYearOfconstruction(e.target.value)} className='w-14 text-center outline-none text-white border-b bg-temp-gray2 border-b-cyan-900 border-dashed' />
              </div>
            </div>
          </div>
        </div>
      </div> 

      <div className='mt-6 h-20' >
      <div>
        <span className='text-base font-medium text-temp-gray' >ALTITUDE REGIME</span>
        <div className='mt-3 w-40 h-10 px-4 bg-[#eee]' >
          <input type="text" onChange={(e)=>setAltitudeRegime(e.target.value)} className='w-full bg-[#eee] h-full outline-none col-span-1' />
        </div>
      </div>
      </div>

      <div className='mt-6 h-20' >
        <span className='text-base font-medium text-temp-gray' >CONSTRUCTION</span>
        <div className='h-12 grid  grid-cols-1 mt-4'  >
          <div className='flex flex-row gap-5 col-span-1' >
            <a  onClick={()=>setConstructionType("nine")} className={`cursor-pointer h-10 w-36 flex items-center ${ constructionType!="nine"? "bg-temp-gray2" :"bg-cyan-900"} justify-center text-white text-sm hover:bg-cyan-700 `} >Nine</a>
            <a  onClick={()=>setConstructionType("old")} className={`cursor-pointer h-10 w-36 flex items-center ${ constructionType!="old"? "bg-temp-gray2" :"bg-cyan-900"} justify-center text-white text-sm hover:bg-cyan-700 `} >Old</a>
            <a  onClick={()=>setConstructionType("inconst")} className={`cursor-pointer h-10 w-36 flex items-center ${ constructionType!="inconst"? "bg-temp-gray2" :"bg-cyan-900"} justify-center text-white text-sm hover:bg-cyan-700 `} >In construction</a>
          </div>
        </div>
      </div>
      <div className='mt-6 h-20' >
        <span className='text-base font-medium text-temp-gray' >Partitioning</span>
        <div className='h-12 grid  grid-cols-1 mt-4'  >
          <div className='flex flex-row gap-5 col-span-1' >
            <a  onClick={()=>setPartitioning("to Order")} className={`cursor-pointer h-10 w-36 flex items-center ${ partitioning!="to Order"? "bg-temp-gray2" :"bg-cyan-900"} justify-center text-white text-sm hover:bg-cyan-700 `} >To order</a>
            <a  onClick={()=>setPartitioning("circular")} className={`cursor-pointer h-10 w-36 flex items-center ${ partitioning!="circular"? "bg-temp-gray2" :"bg-cyan-900"} justify-center text-white text-sm hover:bg-cyan-700 `} >Circular</a>
            <a  onClick={()=>setPartitioning("Detached")} className={`cursor-pointer h-10 w-36 flex items-center ${ partitioning!="Detached"? "bg-temp-gray2" :"bg-cyan-900"} justify-center text-white text-sm hover:bg-cyan-700 `} >Detached</a>
            <a  onClick={()=>setPartitioning("Not Recommended")} className={`cursor-pointer h-10 w-36 flex items-center ${ partitioning!="Not Recommended"? "bg-temp-gray2" :"bg-cyan-900"} justify-center text-white text-sm hover:bg-cyan-700 `} >Not recommanded</a>
            <a  onClick={()=>setPartitioning("Car")} className={`cursor-pointer h-10 w-36 flex items-center ${ partitioning!="car"? "bg-temp-gray2" :"bg-cyan-900"} justify-center text-white text-sm hover:bg-cyan-700 `} >Car</a>
          </div>
        </div>
      </div>

      <div className='mt-6 h-20' >
        <span className='text-base font-medium text-temp-gray' >PARKING</span>
        <div className='h-12 grid  grid-cols-1 mt-4'  >
          <div className='flex flex-row gap-5 col-span-1' >
            <a  onClick={()=>setParkingType("go")} className={`cursor-pointer h-10 w-36 flex items-center ${ parkingType!="go"? "bg-temp-gray2" :"bg-cyan-900"} justify-center text-white text-sm hover:bg-cyan-700 `} >Go</a>
            <a  onClick={()=>setParkingType("garage")} className={`cursor-pointer h-10 w-36 flex items-center ${ parkingType!="garage"? "bg-temp-gray2" :"bg-cyan-900"} justify-center text-white text-sm hover:bg-cyan-700 `} >Garage</a>
            <a  onClick={()=>setParkingType("suppraterrnane")} className={`cursor-pointer h-10 w-36 flex items-center ${ parkingType!="suppraterrnane"? "bg-temp-gray2" :"bg-cyan-900"} justify-center text-white text-sm hover:bg-cyan-700 `} >Supraterrane</a>
            <a  onClick={()=>setParkingType("underground")} className={`cursor-pointer h-10 w-36 flex items-center ${ parkingType!="underground"? "bg-temp-gray2" :"bg-cyan-900"} justify-center text-white text-sm hover:bg-cyan-700 `} >underground</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Appartements