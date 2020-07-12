import React from 'react'
import { Image, IImageProps, ImageFit } from '@fluentui/react'

function About() {
    const imageProps: IImageProps = {
        src: 'https://xtrudelab.com/wp-content/uploads/2019/02/cropped-logo_transparent-e1549912329988-278x69.png',
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

export default About
