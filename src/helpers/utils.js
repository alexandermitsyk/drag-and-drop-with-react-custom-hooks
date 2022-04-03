export const getStyles = (dragItem, params) => {
    const currentItem = dragItem.current;

    if (currentItem.grpI === params.grpI && currentItem.itemI === params.itemI) {
        return "dnd-item current"
    }

    return "dnd-item"
}

export const deepClone = (object) => {
    return JSON.parse(JSON.stringify(object));
}