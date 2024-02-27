import noProjectImage from '../assets/logo.png';
import Button from './Button';
export default function NoProjectSelected({onAddStartProject}){
    return <div className="mt-24 text-center w-2/3">
        <img className='w-16 h-16 object-caontain mx-auto' src={noProjectImage} alt='An empty task list'/>
        <h2 className='text-xl font-bold text-stone-500 my-4'>No Pproject Selected</h2>
        <p className='text-stone-400 mb-4'>Select a project or add a new one</p>
        <p>
        <Button onClick={onAddStartProject}>Create new project </Button> 
        </p>
    </div>
}