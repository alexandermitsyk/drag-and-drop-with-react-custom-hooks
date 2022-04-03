import React from 'react';
import './App.css';

import DragAndDrop from './components/DragAndDrop';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import { AppWrapper } from './context/appContext';

function App() {
    return (
        <AppWrapper>
            <div className="App">
                <Navbar />
                <Modal />
                <header className="App-header">
                    <DragAndDrop />
                </header>
            </div>
        </AppWrapper>
    );
}

export default App;