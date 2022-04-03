import React, { useState } from 'react';
import { useAppContext } from '../context/appContext';

const AddList = () => {
    const [listTitle, setListTitle] = useState('');
    const { cancel, addToList } = useAppContext();

    const onChangeHandler = ({ target }) => {
        setListTitle(target.value);
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    Add list
                </div>
                <div className='modal-body'>
                    <input onChange={onChangeHandler} value={listTitle} placeholder='List name' className='modal-input'/>
                </div>
                <div className='modal-footer'>
                    <button className='primary-button button' onClick={
                        () => {
                            addToList(listTitle);
                            setListTitle('');
                        }
                    }>
                        Save
                    </button>
                    <button className='default-button button' onClick={
                        () => {
                            cancel();
                            setListTitle('');
                        }
                    }>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddList