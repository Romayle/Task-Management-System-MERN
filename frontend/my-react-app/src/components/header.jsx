import React from "react";
import { useState } from "react";

import DeletingList from "./deletingList";
import TaskForm from "./taskForm";

const Header = () => {

    const [taskPopUp, setTaskPopUp] = useState(false);
    const [deletePopUp, setDeletePopUp] = useState(false);

    const setTaskPopUpTrue = () => {
        setTaskPopUp(true);
    }

    const setTaskPopUpFlase = () => {
        setTaskPopUp(false);
    }

    const setDeletePopUpTrue = () => {
        setDeletePopUp(true);
    }

    const setDeletePopUpFlase = () => {
        setDeletePopUp(false);
    }


    return (
        <header className="bg-[#ebf0f6]">

            <div className=" max-w-screen-max px-4 py-8 sm:px-6 sm:py-8 lg:px-8">

                <div className="sm:flex sm:items-center sm:justify-between">

                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">Welcome Back, User!</h1>

                        <p className="mt-1.5 text-sm text-gray-500">Let's write a new set of Tasks! 🎉</p>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">

                        <button
                            className="block rounded-lg bg-[#7783ee] px-5 py-3 text-sm font-medium text-white transition hover:bg-black focus:outline-none focus:ring"
                            type="button"
                            onClick={setTaskPopUpTrue}>
                            Add Task
                        </button>

                        <button
                            className="block rounded-lg bg-[#ffffff] px-5 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white focus:outline-none focus:ring"
                            type="button"
                            onClick={setDeletePopUpTrue}>
                            Delete Task
                        </button>

                        {taskPopUp && <TaskForm state={taskPopUp} closeForm={setTaskPopUpFlase} />}

                        {deletePopUp && <DeletingList state={deletePopUp} closeList={setDeletePopUpFlase} />}

                    </div>
                    
                </div>

            </div>

        </header>
    )
}

export default Header