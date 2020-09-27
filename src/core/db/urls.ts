export interface IXLinks {
    id: string,
    title: string,
    path: string,
}

const home_: IXLinks = {
    id: '1',
    title: 'Home',
    path: '/'
}
const products_: IXLinks = {
    id: '2',
    title: 'Products',
    path: '/products'
}
const services_: IXLinks = {
    id: '3',
    title: 'Services',
    path: '/services'
}
const about_: IXLinks = {
    id: '4',
    title: 'About Us',
    path: '/about'
}
const tNc_: IXLinks = {
    id: '5',
    title: 'Terms &amp; Conditions',
    path: '/termsAndConditions'
}
const noMatch_: IXLinks = {
    id: '6',
    title: 'Not Found 404',
    path: '*'
}
const pg500_: IXLinks = {
    id: '7',
    title: 'Internal Server Error',
    path: '/page500'
}

/**
 * Exporting the list of Pages
 */
export const URLS = {
    home: home_,
    products: products_,
    services: services_,
    about: about_,
    terms: tNc_,
    noMatch: noMatch_,
    err: pg500_
}