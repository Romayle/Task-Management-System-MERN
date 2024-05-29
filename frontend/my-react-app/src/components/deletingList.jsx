import React, { useState, useEffect } from 'react';

const DeletingList = ( {state, closeList} ) => {
    const [visibility, setVisibility] = useState(true);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Fetch tasks data from your backend API
        fetch('/api/tasks')
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    const handleCheckboxChange = (taskId) => {
        // Update the selected state of the task
        setTasks(tasks.map(task => {
            if (task._id === taskId) {
                return { ...task, selected: !task.selected };
            }
            return task;
        }));
    };

    const handleDeleteTasks = () => {
        tasks.map(task => {
            if (task.selected === true) {
                fetch('/api/tasks/:id', {
                    method: 'DELETE'
                })
            }
        })
    };

    return (
        <>
        {state && (<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

            <div className="bg-white rounded-lg shadow-lg mx-4 max-w-lg p-6 h-4/5 overflow-y-auto">
                
                <fieldset className="space-y-4">
                    <legend className="sr-only">Delivery</legend>
                    {tasks.map(task => (
                        <div key={task._id}>
                            <label
                                htmlFor={task.title}
                                className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                            >
                                <div>
                                    <p className="text-gray-700">{task.title}</p>
                                    <p className="mt-1 text-gray-900">{task.description}</p>
                                </div>
                                <input
                                    type="checkbox"
                                    name={task.title}
                                    id={task.title}
                                    className="size-5 border-gray-300 text-blue-500"
                                    checked={task.selected}
                                    onChange={() => handleCheckboxChange(task._id)}
                                />
                            </label>
                        </div>
                    ))}
                </fieldset>

                <div className='flex flex-row gap-2'>
                    <button
                        type="button"
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        onClick={handleDeleteTasks}
                    >
                        Delete Tasks
                    </button>

                    <button
                        type="button"
                        className="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
                        onClick={closeList}
                    >
                        Cancel
                    </button>
                </div>

            </div>

        </div>
        )}
        </>
    );
};

export default DeletingList;