import {InputText, Template} from '@/components'

export default function FormularioPage(){
    return (
        <Template>
            <section className='flex flex-col items-center justify-center my-5'>
                <h5 className='mt-3 mb-10 text-3xl font-bold tracking-tight text-gray-900'>Nova Imagem</h5>
                <form>
                    <div className='grid grid-cols-1'>
                        <label className='block text-sm font-medium leading-6 text-gray-600'>Name: *</label>
                        <InputText placeholder='Type the image name'/>
                    </div>

                    <div className='mt-5 grid grid-cols-1'>
                        <label className='block text-sm font-medium leading-6 text-gray-600'>Tag: *</label>
                        <InputText placeholder='Type the tag comma separated'/>
                    </div>

                    <div className='mt-5 grid grid-cols-1'>
                        <label className='block text-sm font-medium leading-6 text-gray-600'>Image: *</label>
                        <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                            <div className='text-center'>
                                <svg className="w-6 h-6 text-gray-800 dark:text-gray-400" aria-hidden="true"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M19,13a1,1,0,0,0-1,1v.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.7L9.41,11.12a2.85,2.85,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h7a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.46,20Zm13-1a.89.89,0,0,1-.18.53L13.31,15l.7-.7a.77.77,0,0,1,1.1,0L18,17.21ZM22.71,4.29l-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L18,4.41V10a1,1,0,0,0,2,0V4.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,22.71,4.29Z"/>
                                </svg>
                                <div className='mt-4 flex text-sm leading-6 text-gray-400'>
                                    <label className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600'>
                                        <span>Click to upload</span>
                                        <input type='file' className='sr-only'/>
                                    </label>

                                </div>
                            </div>

                        </div>
                    </div>

                </form>
            </section>
        </Template>
        
        )
}