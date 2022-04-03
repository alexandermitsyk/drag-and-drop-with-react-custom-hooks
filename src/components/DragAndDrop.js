import React from 'react';
import { useAppContext } from '../context/appContext';
import { getStyles } from '../helpers/utils';
import useDragHandlers from '../hooks/useDragHandlers';
import ModalType from '../constants/ModalType';

const DragAndDrop = () => {
    const { tasks, show, removeList, removeTaskFromList } = useAppContext();
    const {
        dragItem,
        dragging,
        handletDragStart,
        handleDragEnter,
    } = useDragHandlers();

    return (
        tasks.length > 0 ? <div className="drag-n-drop">
            {tasks.map((grp, grpI) => (
                <div
                    key={grp.title} 
                    className="dnd-group"
                    onDragEnter={dragging && !grp.items.length?(e) => handleDragEnter(e,{ grpI, itemI: 0 }):null}
                >
                <div className='group-title'>
                    {grp.title}
                    <button onClick={() => removeList(grpI)} class="project-column-heading__options">
                        <img src='./icons/pencil.svg' alt='Delete list' />
                    </button>
                </div>
                    {grp.items.map((item, itemI) => (
                        <div
                            draggable 
                            onDragStart={(e) => handletDragStart(e, { grpI, itemI })}
                            onDragEnter={dragging ? (e) => handleDragEnter(e, { grpI, itemI }) : null}
                            key={`${grpI}-list-${itemI}-element`} 
                            className={dragging ? getStyles(dragItem, { grpI, itemI }) : "dnd-item"}
                        >
                            <div className='task-header'>
                                <span className={item.label}>{item.labelText}</span>
                                <button className='remove-task' onClick={() => removeTaskFromList(grpI, itemI)}>
                                    <img src='./icons/trash.svg' alt='Delete list' />
                                </button>
                            </div>
                            <p>
                                {item.content}
                            </p>
                        </div>
                    ))} 
                    <button className='primary-button button fluid' type='submit' onClick={() => show(ModalType.AddTask, grpI)}>Add task</button>
                </div>
            ))}
        </div> : null
    )
}

export default DragAndDrop;