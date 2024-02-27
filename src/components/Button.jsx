export default function Button({children, ...props}){
    return  <button  className='px-4 py-2 text-xs md:text-base rounded-md text-stone-400 bg-stone-700 hover:text-stone-200 hover:bg-stone-600' {...props}> {children}</button>

}