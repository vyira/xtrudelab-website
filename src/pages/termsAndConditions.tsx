import React from 'react'
import { Image, IImageProps, ImageFit } from '@fluentui/react'

function TermAndConditionsPage() {
    const imageProps: IImageProps = {
        src: 'https://cdn.worldvectorlogo.com/logos/onedrive-1.svg',
        height: 100,
        imageFit: ImageFit.centerContain
    }

    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet eros sed leo consectetur rhoncus. Suspendisse tristique dolor et lorem mollis dapibus. Donec consectetur nisl id euismod consectetur. Quisque libero purus, consectetur a enim vitae, malesuada ultricies dui. In vitae facilisis lectus. Donec tortor sem, sollicitudin nec vulputate non, vulputate a diam. Praesent porttitor lorem in ultrices porttitor. In vulputate ac urna eget elementum. Curabitur ac odio non diam mollis auctor sed ut justo. Duis id rhoncus odio, ut gravida ligula. Quisque maximus mollis efficitur.

    Sed feugiat lacinia lorem ut venenatis. Maecenas viverra vel nibh id fermentum. Cras sed tortor eu purus ornare vulputate ac id tellus. Integer id dui ut augue scelerisque ornare at at ex. Vivamus nec quam euismod, pellentesque urna vel, dictum augue. Cras pulvinar placerat urna, nec auctor felis vehicula vehicula. Pellentesque ut lorem in metus auctor laoreet at vitae arcu. Proin turpis neque, luctus eu augue eu, faucibus feugiat risus. Vestibulum eget enim quis risus lacinia feugiat non quis nisi. Vestibulum fermentum rhoncus neque sed vestibulum. Phasellus non sem et enim rhoncus consectetur id ac orci.
    
    Nullam elit risus, ornare ut faucibus interdum, suscipit at lacus. Phasellus tempor elementum felis eu ultricies. Mauris scelerisque tortor vel ipsum scelerisque, fringilla posuere leo luctus. Fusce tristique pulvinar erat ut volutpat. Vivamus eu turpis id est laoreet mollis vel sed orci. Maecenas dui dui, pellentesque eu turpis ut, tempus interdum massa. Cras malesuada, nunc elementum lacinia egestas, est arcu commodo sem, id hendrerit nulla purus vel dui. Nulla dapibus at velit nec semper. Donec a ex in mauris tempor scelerisque. Curabitur dictum lacus diam, vitae feugiat quam pharetra a. Donec et congue nibh. Suspendisse lacinia orci gravida erat efficitur rhoncus. Cras ultrices nunc lectus, ac bibendum metus malesuada ut. Donec et blandit risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed nec ligula non tortor aliquam tempus.`

    return (
        <React.Fragment>
            <div style={{
                width: '100%',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div>
                    <Image {...imageProps} />
                    Terms and Conditions
                    <br />
                    <br />
                    <div>{text}</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TermAndConditionsPage
