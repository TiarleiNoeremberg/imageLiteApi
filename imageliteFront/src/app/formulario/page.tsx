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
                                <svg className="w-6 h-6 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"/>
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