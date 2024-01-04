import {Template, ImageCard} from '@/components'

export default function GaleriaPage(){
    return (
        <Template>
            <section className='grid grid-cols-4 gap-8'>
                <ImageCard nome='Paisagem' tamanho='10MB' dataUpload='01/01/2024' src='https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80'/>
                <ImageCard nome='Paisagem' tamanho='10MB' dataUpload='01/01/2024' src='https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80'/>
                <ImageCard nome='Paisagem' tamanho='10MB' dataUpload='01/01/2024' src='https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80'/>
                <ImageCard nome='Paisagem' tamanho='10MB' dataUpload='01/01/2024' src='https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80'/>
                <ImageCard nome='Paisagem' tamanho='10MB' dataUpload='01/01/2024' src='https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80'/>
                
            </section>
        </Template>
    )
}