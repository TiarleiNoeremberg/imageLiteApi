'use client'

import {Template, ImageCard} from '@/components'
import { useState } from 'react'

export default function GaleriaPage(){

    const image1 = 'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638887178/EducationHub/photos/midtown-manhattan.jpg'
    const image2 = 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80'

    const [codigoImagem, setCodigoImage] = useState<number>(2);
    const [urlImage, setUrlImage] = useState<string>(image2);

    function mudarImagem(){
        if(codigoImagem == 1){
            setCodigoImage(2)
            setUrlImage(image2)
        } else {
            setCodigoImage(1)
            setUrlImage(image1)
        }

    }

    return (
        <Template>
            <button className='bg-gray-500' onClick={mudarImagem}>Clique para mudar</button>
            <section className='grid grid-cols-4 gap-8'>
                <ImageCard nome='Paisagem' tamanho='10MB' dataUpload='01/01/2024' src={urlImage}/>
                <ImageCard nome='Paisagem' tamanho='10MB' dataUpload='01/01/2024' src={urlImage}/>
                <ImageCard nome='Paisagem' tamanho='10MB' dataUpload='01/01/2024' src={urlImage}/>
                
            </section>
        </Template>
    )
}