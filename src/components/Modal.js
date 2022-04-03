import React from 'react'
import { useAppContext } from '../context/appContext';
import AddList from './AddList';
import AddTask from './AddTask';
import ModalType from '../constants/ModalType';

const Modal = () => {
    const { isOpen, modal} = useAppContext();

    const renderModals = () => {
        switch (modal) {
            case ModalType.AddList:
                return <AddList />        
            case ModalType.AddTask:
                return <AddTask />        
            default:
                break;
        }
    }

    return (
        isOpen ? renderModals() : null
    )
}

export default Modal;