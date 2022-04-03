import { useState, useRef } from 'react'
import { useAppContext } from '../context/appContext';
import { deepClone } from '../helpers/utils';

const useDragHandlers = () => {
    const { setTasks } = useAppContext();
    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();
    const dragNode = useRef();

    const handletDragStart = (e, params) => {
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd);

        setTimeout(() => {
            setDragging(true); 
        }, 0);
    }

    const handleDragEnter = (e, params) => {
        const currentItem = dragItem.current;

        if (currentItem !== e.target) {
            setTasks((oldList) => {
                let newList = deepClone(oldList);
                newList[params.grpI].items.splice(params.itemI, 0, newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0])
                dragItem.current = params;

                return newList
            });
        }
    }

    const handleDragEnd = () => {
        setDragging(false);
        dragNode.current.removeEventListener('dragend', handleDragEnd);
        dragItem.current = null;
        dragNode.current = null;
    }

    return {
        dragItem,
        dragging,
        handletDragStart,
        handleDragEnter,
        handleDragEnd,
    }
}

export default useDragHandlers