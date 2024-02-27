import '../index.css';
import Button from './Button';

export default function SideBar({onAddStartProject, projects, onSelectProject, selectedProjectId}){
    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your projects</h2>
        <div>
        <Button onClick={onAddStartProject}> + Add new project </Button>
        </div>
        <ul className='mt-8'>
        {projects.map((project) => {
            let ClassesNAme = 'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800'
            if (project.id === selectedProjectId){
                ClassesNAme += ' bg-stone-800 text-stone-200'
            } else {
                ClassesNAme += ' text-stone-400'
            }
              return (
                <li key={project.id}>
                    <button onClick={() => onSelectProject(project.id)} className={ClassesNAme}>{project.title}</button>
                </li>
    
            )

        }
      
            

        
            

        )}
        </ul>
</aside>

    
  
}