import React from 'react'
import { Image, IImageProps, ImageFit } from '@fluentui/react'

function Services() {
    const imageProps: IImageProps = {
        src: "https://discord.com/assets/fc0b01fe10a0b8c602fb0106d8189d9b.png",
        height: 100,
        imageFit: ImageFit.centerContain
    }
    return (
        <React.Fragment>
            <div>
                <Image {...imageProps} />
            </div>
        </React.Fragment>
    )
}

export default Services
