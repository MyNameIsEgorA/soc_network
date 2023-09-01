import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { sendMessage } from './redux/state';
import { newPostUpdate } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const renderLayout = (state) => {

    root.render(
        <React.StrictMode>
            <App messages={state.messages}
                people={state.people}
                sendMessage={sendMessage}
                CurrentMessageText={state.CurrentMessageText}
                newPostAreaUpdate={newPostUpdate} />
        </React.StrictMode>
    );
}