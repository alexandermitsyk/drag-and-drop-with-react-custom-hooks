import {
	createContext,
	useContext,
    useState
} from 'react';
import { deepClone } from '../helpers/utils';
import LabelType from '../constants/LabelType';

const AppContext = createContext();

const defaultData = [
    {
        title: 'Task Ready', 
        items: [{
            id: 1,
            label: 'task__tag--copyright',
            labelText: 'Copywriting',
            content: 'Konsep hero title yang menarik',
        }, {
            id: 2,
            label: 'task__tag--design',
            labelText: 'UI Design',
            content: 'Icon di section our services',
        }],
    }, {
        title: 'In Progress', 
        items: [{
            id: 3,
            label: 'task__tag--illustration',
            labelText: 'Illustration',
            content: 'Send Advert illustrations over to production company.',
        }],
    }
]

export function AppWrapper({
	children
}) {
    const [tasks, setTasks] = useState(defaultData);
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(null);
    const [selectedList, setSelectedList] = useState(-1);

    const show = (modalType, listIndex = -1) => {
        setIsOpen(!isOpen);
        setModal(modalType);

        if (listIndex !== -1) {
            setSelectedList(listIndex);
        }
    }

    const cancel = () => {
        setIsOpen(false);
        setModal(null);
        setSelectedList(-1);
    }

    const addToList = (listTitle) => {
        setTasks((oldList) => {
            const newList = deepClone(oldList);
            newList.push({
                title: listTitle,
                items: [],
            });

            return newList;
        });

        setIsOpen(false);
    };

    const removeList = (listIndex) => {
        if (listIndex !== -1) {
            setTasks((oldList) => {
                const newList = deepClone(oldList);
                newList.splice(listIndex, 1);

                return newList;
            });
        }
    }

    const addTaskToList = (listIndex, content) => {
        if (listIndex !== -1) {
            setTasks((oldList) => {
                const newList = deepClone(oldList);

                newList[listIndex].items.push({
                    id: newList[listIndex].items.length + 1,
                    label: content.label,
                    labelText: LabelType.getName(content.label),
                    content: content.title,
                });

                return newList;
            });

            setIsOpen(false);
            setSelectedList(-1);
        }
    }

    const removeTaskFromList = (listIndex, itemIndex) => {
        if (listIndex !== -1) {
            setTasks((oldList) => {
                const newList = deepClone(oldList);
                newList[listIndex].items.splice(itemIndex, 1);

                return newList;
            });
        }
    }

    const sharedState = {
        show,
        modal,
        isOpen,
        cancel,
		tasks,
        setTasks,
        addToList,
        removeList,
        addTaskToList,
        removeTaskFromList,
        selectedList,
	}

	return ( 
        <AppContext.Provider value={sharedState}> 
            {
                children
            } 
        </AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}