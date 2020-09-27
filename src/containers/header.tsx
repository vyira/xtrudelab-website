import { IImageProps, Image, FontSizes, Stack, IStackTokens } from '@fluentui/react';
import React from "react";
import { Link } from 'react-router-dom';
import { XtrudeIconSq } from '../core/resources/images/';
import { IXLinks, URLS } from '../core/db/urls';
import './style.scss';

function Header() {
    const imageProps: IImageProps = {
        src: XtrudeIconSq,
        height: '48px',
    }
    const stackTokens: IStackTokens = {
        childrenGap: 10,
        padding: 10,
    }

    const LinkText = () => {
        return (
            <Stack horizontal tokens={stackTokens}>
                {[URLS.home, URLS.products, URLS.services, URLS.about].map((link: IXLinks, index: number) => {
                    return (
                        <div className={"ms-Grid-col ms-sm12 ms-md3 ms-lg3 ul-li-rav"} key={link.id}>
                            <Link to={link.path} className={"header-link-button-rav"}>{link.title}</Link>
                        </div>
                    )
                })}
            </Stack>
        )
    }

    return (
        <div className={'ms-Grid header-rav'} dir={"ltr"}>
            <div className={"ms-Grid-row"}>
                <div className={'ms-Grid-col ms-sm12 ms-md12 ms-lg4'}>
                    <Stack horizontal className={"ms-Grid-col ms-sm12 ms-md12"} tokens={stackTokens}>
                        <Stack.Item align={"auto"}><Image {...imageProps} /></Stack.Item>
                        <Stack.Item align={"auto"}><div style={{ fontSize: FontSizes.xLarge }} className={"ms-hiddenLgUp"}>Xtrude Lab Private Limited</div></Stack.Item>
                    </Stack>
                </div>
                <div className={'ms-Grid-col ms-sm12 ms-md12 ms-lgPush2 ms-lg6'}>
                    <LinkText />
                </div>
            </div>
        </div>
    )
}

export default Header