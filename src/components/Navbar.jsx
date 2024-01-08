import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Shop from './Shop';

function Navbar() {

    // Initializing States
    const [data, setData] = useState(null);
    const [products, setProducts] = useState();
    const [toggle, setToggle] = useState(true);
    let toggleDrp = toggle ? false : true;
    const [textColor, setTextColor] = useState();

    const [show, setShow] = useState(false)

    // Handling
    const handleActiveTab = (key) => {
        const temp = key.target.getAttribute("data-key")
        if (temp == 1) {
            setTextColor("home");
        }
        if (temp == 2) {
            setTextColor("login");
        }
        if (temp == 3) {
            setTextColor("categories");
        }
        if (temp == 4) {
            setTextColor("cart");
        }
    }

    // Getting Categories Of All Products
    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);

    // Getting Products Data By Category
    async function ShowProducts (event) {
        console.log(event.target.getAttribute("id"));
        let url = 'https://dummyjson.com/products/category/' + event.target.getAttribute("id");
        const response = await fetch(url);
        const productsData =  await response.json();
        setProducts(productsData)
        console.log(productsData)
        setShow(true)
    }
    //         .then(response => response.json())
    //         .then(console.log)
    //         .then(response.json() => setProducts(response.json()))
    //         .then(setShow(true))
    //         .catch(error => console.error(error));
    // }

    return (
        <>
        <nav className='flex justify-between py-4 px-7 items-center text-white border-b border-slate-50/[0.06]'>
            <Link to="/" className='flex justify-center items-center gap-3 cursor-pointer'>
                <img src='images/logo.png' alt='Logo' width={30} className='select-none'></img>
                <h1 className='text-2xl font-bold opacity-85'>WebDeals</h1>
            </Link>
            <div className='w-3/5 relative'>
                <input type='text' placeholder='Search For Products' className='searchbox rounded-lg px-4 py-2 outline-none bg-slate-800 hover:bg-slate-700 relative inline-block w-full focus:bg-slate-700 duration-300 ease-in-out transition-all' />
                <img src='images/search.png' className='absolute top20 right-2 opacity-30' width={24} height={24} />
            </div>
            <Link to="/" data-key="1" className='text-hover-color cursor-pointer font-semibold opacity-85' onClick={handleActiveTab} style={{ color: textColor == "home" ? "#3aa9a7" : "#fff" }}>Home </Link>
            <Link to="/login" data-key="2" className='text-hover-color cursor-pointer font-semibold opacity-85' onClick={handleActiveTab} style={{ color: textColor == "login" ? "#3aa9a7" : "#fff" }}>Login</Link>
            <button onClick={handleActiveTab}><span data-key="3" className='text-hover-color cursor-pointer font-semibold relative opacity-85' id='categories' onClick={() => setToggle(toggleDrp)} style={{ color: textColor == "categories" ? "#3aa9a7" : "#fff" }}>Categories</span></button>
            <Link to="/cart" data-key="4" className='text-hover-color cursor-pointer font-semibold opacity-85' onClick={handleActiveTab} style={{ color: textColor == "cart" ? "#3aa9a7" : "#fff" }}>Cart</Link>
            {toggleDrp && <div className='drpdownContainer absolute bg-slate-800 text-white font-semibold text-sm rounded-lg w-56 overflow-auto'>
                {data ? data.map(item => (
                    <Link to="/shop" key={item} id={item} className='opacity-90 cursor-pointer py-2 px-4 hover:bg-slate-700 duration-100 ease-in-out transition-all capitalize block' onClick={ShowProducts}>{item.replaceAll("-", " ")}</Link>
                    )) : ""}
            </div>}
        </nav>
        
        {products ? <Shop status={show} product={products}/> : ""}
                    </>
    );
}

export default Navbar