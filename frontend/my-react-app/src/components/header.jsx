import React from "react";
import { useState } from "react";

import TaskPopUp from "./taskForm";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <header className="bg-[#ebf0f6]">

            <div className=" max-w-screen-max px-4 py-8 sm:px-6 sm:py-8 lg:px-8">

                <div className="sm:flex sm:items-center sm:justify-between">

                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">Welcome Back, Barry!</h1>

                        <p className="mt-1.5 text-sm text-gray-500">Let's write a new blog post! 🎉</p>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">

                        <button
                            className="block rounded-lg bg-[#ffffff] px-5 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white focus:outline-none focus:ring"
                            type="button">
                            Delete Task
                        </button>

                        <button
                            className="block rounded-lg bg-[#7783ee] px-5 py-3 text-sm font-medium text-white transition hover:bg-black focus:outline-none focus:ring"
                            type="button"
                            onClick={setIsOpen}>
                            Add Task
                        </button>

                        {isOpen && <TaskPopUp state={isOpen} closedModal={closeModal} />}

                    </div>
                    
                </div>

            </div>

        </header>
    )
}

export default Header