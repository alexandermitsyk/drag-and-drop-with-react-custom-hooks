import React, { useState } from 'react';
import { useAppContext } from '../context/appContext';
import LabelType from '../constants/LabelType';
const defaultObject = {
    title: '',
    label: LabelType.Copywriting,
    labelText: LabelType.getName(LabelType.Copywriting),
}

const AddTask = () => {
    const [content, setContent] = useState(defaultObject);
    const { cancel, addTaskToList, selectedList } = useAppContext();

    const onChangeHandler = ({ target }) => {
        setContent({
            ...content,
            [target.name]: target.value,
        });
    }

    return (
        <div className='modal'>
        <div className='modal-content'>
            <div className='modal-header'>
                Add task
            </div>
            <div className='modal-body'>
                <input onChange={onChangeHandler} value={content.title} name='title' placeholder='List name' className='modal-input' />
                <select className='modal-input' onChange={onChangeHandler} name='label'>
                    {
                        Object.keys(LabelType).map((label, index) => {
                            if (typeof LabelType[label] === 'function') return null;

                            return <option key={`label-dropdown-item-${index}`} value={LabelType[label]}>{LabelType.getName(LabelType[label])}</option>
                        })
                    }
                </select>
            </div>
            <div className='modal-footer'>
                <button className='primary-button button' onClick={
                    () => {
                        addTaskToList(selectedList, content);
                        setContent(defaultObject);
                    }
                }>
                    Save
                </button>
                <button className='default-button button' onClick={
                    () => {
                        cancel();
                        setContent(defaultObject);
                    }
                }>
                    Cancel
                </button>
            </div>
        </div>
    </div>
    )
}

export default AddTask;