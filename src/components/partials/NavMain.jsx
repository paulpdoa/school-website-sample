import React,{ useState,useEffect } from 'react'
import Header from './Header'
import Navbar from './Navbar'

// const [scroll,setScroll] = useState('');

//     window.addEventListener('scroll',() => {
//         if(window.scrollY >= 80) {
//             console.log('true')
//         } else {
//             console.log('false')
//         }
//     })

const NavMain = () => {

    

    return (
        <>
            <Header />
            <Navbar /> 
        </>
    )
}

export default NavMain
