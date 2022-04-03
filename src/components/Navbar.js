import React from 'react'
import { useAppContext } from '../context/appContext';
import ModalType from '../constants/ModalType';

const Navbar = () => {
    const { show } = useAppContext();

    return (
        <div className='navbar'>
            <div className='brand'><h1>Task manager UI</h1></div>
            <div></div>
            <div className='menu'>
                <span></span>
                <span></span>
                <span></span>
                <button className='add-button' onClick={() => show(ModalType.AddList)} type="button">Add new list</button>
            </div>
        </div>
    )
}

export default Navbar