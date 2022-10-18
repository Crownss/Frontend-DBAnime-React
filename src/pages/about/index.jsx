import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '../components/navbar'

export default function About() {
  return (
    <>
      <Navbar />
      <h1 className="font-bold text-center capitalize text-xl">This web has build with <a href="https://reactjs.org" className="transition duration-500 ease-in-out hover:text-blue-500" rel="noreferrer" target="_blank">React</a></h1>
      <div className="mt-5"></div>
      <h1 className="font-bold text-center">wanna ask something ?  <a target="_blank" rel="noreferrer" href="https://instagr.am/abcdefuck._.you">Click Here<FontAwesomeIcon icon={faInstagram} /></a></h1>
    </>
  )
}
