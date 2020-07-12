import React from 'react'
import { Image, IImageProps, ImageFit } from '@fluentui/react'

function Products() {
    const imageProps: IImageProps = {
        src: 'https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png',
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

export default Products
