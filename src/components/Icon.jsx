import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({name}) => {
    return name.toLowerCase() === 'cross' ?
     <FaTimes style={icons}/> :
     name.toLowerCase() === 'circle' ?
     <FaRegCircle style={icons}/> :
     <FaPen style={icons}/>
}

const icons = {
    fontSize: '2rem'
}

export default Icon