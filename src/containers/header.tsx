import { IImageProps, Image, FontSizes } from '@fluentui/react';
import React from "react";
import { Link } from 'react-router-dom';
import { XtrudeIconSq } from '../core/resources/images/';
import { Urls } from '../core/urls';
import './style.scss';

function Header() {
    const imageProps: IImageProps = {
        src: XtrudeIconSq,
        height: '52px'
    }

    return (
        <div className={"header-rav"}>
            <div className={"header-image-rav"}>
                <Image {...imageProps} />
                <div style={{ fontSize: FontSizes.xxLarge, margin: "8px" }}>Xtrude Lab Private Limited</div>
            </div>
            <div className={"header-links-rav"}>
                {/* {[Urls.home, Urls.products, Urls.services, Urls.about].map((item: string, index: number) => {
                    return (
                        <div className={"ul-li-rav"} key={index}>
                            <Link to={item} className={"header-link-button-rav"}>{item}</Link>
                        </div>
                    )
                })} */}
                <div className="ul-li-rav">
                    <Link to={Urls.home} className={"header-link-button-rav"}><div>Home</div></Link>
                </div>
                <div className="ul-li-rav">
                    <Link to={Urls.products} className={"header-link-button-rav"}><div>Products</div></Link>
                </div>
                <div className="ul-li-rav">
                    <Link to={Urls.services} className={"header-link-button-rav"}><div>Services</div></Link>
                </div>
                <div className="ul-li-rav">
                    <Link to={Urls.about} className={"header-link-button-rav"}><div>About Us</div></Link>
                </div>
                <div className="ul-li-rav">
                    <Link to={Urls.tc} className={"header-link-button-rav"}><div>Terms &amp; Conditions</div></Link>
                </div>
            </div>
        </div>
    )
}

export default Header