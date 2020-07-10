import React from "react";
import { FontSizes, Image, IImageProps, ImageFit } from '@fluentui/react'
import customTheme from "../core/theme";
import CompanyImage from '../core/resources/images/logo_transparent_2.png'
import { Consts } from '../core/constants'

function Header() {
    const imageProps: IImageProps = {
        src: CompanyImage,
        imageFit: ImageFit.contain,
        alt: Consts.XLPL,
        height: 78
    }
    return (
        <div style={{
            backgroundColor: customTheme.palette.neutralLighterAlt,
            maxHeight: '144px'
        }}>
            <div>
                <div>
                    <Image
                        {...imageProps}
                    />
                </div>
                <div style={{ fontSize: FontSizes.xxLarge }}>
                    Xtrude Lab
                </div>
            </div>
        </div>
    )
}

export default Header