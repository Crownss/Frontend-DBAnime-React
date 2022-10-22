import axios from "axios"
import moment from "moment"
import { useRef, useState } from "react"

export default function CardSchedule(){
    const [isOpen, setOpen] = useState(false)
    const [Data, setData] = useState({filter:"", type:""})
    const [Result, setResult] = useState([])
    const refSend = useRef(null)

    const onChangeInput = (event) => {
        event.preventDefault()

        const data = { ...Data }
        data[event.target.name] = event.target.value
        setData(data)
    }

    const onClick = () =>{
        if(Data.filter !== "" && Data.type !== ""){
            if(Data.type==="kids"){
                axios.get(process.env.REACT_APP_API_SCHEDULE+"?filter="+Data.filter+"&kids=true")
                .then((res)=>setResult(res.data.data))
                .catch((err)=>console.log(err.message))
            }else if(Data.type==="sfw"){
                axios.get(process.env.REACT_APP_API_SCHEDULE+"?filter="+Data.filter+"&sfw=true")
                .then((res)=>setResult(res.data.data))
                .catch((err)=>console.log(err.message))
            }else{
                axios.get(process.env.REACT_APP_API_SCHEDULE+"?filter="+Data.filter)
                .then((res)=>setResult(res.data.data))
                .catch((err)=>console.log(err.message))
            }
        }
        else{
            axios.get(process.env.REACT_APP_API_SCHEDULE)
            .then((res)=>setResult(res.data.data))
            .catch((err)=>console.log(err.message))
        }
    }

    // useEffect(()=>{
    //     axios.get(process.env.REACT_APP_API_SCHEDULE)
    //     .then((res)=>setResult(res.data))
    //     .catch((err)=>console.log(err.message))
    // })
    return (
        <>
        <div class="p-10 flex justify-start items-center space-x-4">
            <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" onClick={()=>setOpen(true)}>Filter Schedule</button>
        </div>
        {isOpen ? (<>
                    <div id="modal" class="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 modal">
                        <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">

                            <div class="flex justify-between items-center bg-blue-500 text-white text-xl rounded-t-md px-4 py-2">
                                <h3>Filter Schedule</h3>
                                <button onClick={() => setOpen(false)}>x</button>
                            </div>

                            <div class="w-full rounded-xl bg-white p-4 shadow-2xl shadow-white/40">
                                <div class="mb-4 grid grid-cols-2 gap-4">
                                <div class="flex flex-col">
                                    <label class="mb-2 font-semibold">Filter</label>
                                    <select onChange={onChangeInput} className="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" name="filter" id="">
                                        <option defaultValue={""}>Select</option>
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednesday">Wednesday</option>
                                        <option value="thursday">Thursday</option>
                                        <option value="friday">Friday</option>
                                        <option value="unknown">Unknown</option>
                                        <option value="other">Other</option>

                                    </select>
                                </div>
                                <div class="flex flex-col">
                                    <label class="mb-2 font-semibold">Type</label>
                                    <select onChange={onChangeInput} className="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" name="type" id="">
                                        <option defaultValue={"blank"}>Select</option>
                                        <option value="kids">Kids</option>
                                        <option value="sfw">Sfw</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div class="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
                                <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" onClick={onClick} ref={refSend}>Done</button>
                            </div>
                        </div>
                    </div></>
                    ):null}
            {Result ? Result.map(result => (
                <div key={result.mal_id}>
                    <div className="max-w-md mx-auto hover:shadow-xl overflow-hidden md:max-w-7xl rounded-3xl bg-black">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                            <a href={result.url} rel="noreferrer" target="_blank"><img className="w-full h-full rounded-2xl" src={result.images.webp.large_image_url} alt={result.title} /></a>
                            </div>
                            <div className="p-8">
                                <div className="tracking-wide text-sm text-indigo-500 font-semibold capitalize">compelted on: {moment(result.aired.from).format("ddd, DD-M-YYYY")} | {result.status}</div>
                                <a href={result.url} rel="noreferrer" target="_blank" className="block mt-2 text-xl leading-tight font-medium font-semibold transition duration-500 ease-in-out text-cyan-600 capitalize">{result.title} ({result.title_japanese ? result.title_japanese :"there's no japanese title"})</a>
                                <p className="mt-1 text-gray-500 indent-5">{result.synopsis ? result.synopsis:"not have synopsis yet"}<div className="mt-8"></div><div className="mt-1"></div>Episode: {result.episodes ? result.episodes:"null"}<div className="mt-1"></div>Type: {result.type ? result.type:"null"}<div className="mt-1"></div>Rating: {result.rating ? result.rating:"null"}
                                <div className="mt-1"></div>Genre&apos;s:<br/>{result.genres ? result.genres.map(genre => (<li key={genre.mal_id}>{genre.name}</li>)):"null"}
                                Trailer: {result.trailer.url ? <a href={result.trailer.url} className="font-bold text-cyan-500">Click Me</a>:"There's not trailer about "+result.title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10"></div>
                </div>
            )):""}
            <br />
            <br />
        </>
    )
}