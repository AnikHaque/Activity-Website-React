import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ActivityButton.css';

const ActivityButton = () => {

        const notify = () => toast("Congratulation For completing your Activity !");

    return (
        <div>
            <button onClick={notify} className='activity-button'>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default ActivityButton;