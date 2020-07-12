import React from 'react'
import { Image, ImageFit, IImageProps } from '@fluentui/react'

function Home() {
    const imageProps: IImageProps = {
        src: "https://firebasestorage.googleapis.com/v0/b/drive-assets.google.com.a.appspot.com/o/Asset%20-%20Drive%20Icon512.png?alt=media",
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

export default Home
