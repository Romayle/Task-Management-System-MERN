import React from 'react';
import { useState } from 'react';

const TaskForm = ( {state, closeForm} ) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [importance, setImportance] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const task = {title, description, importance}

        const response = await fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if(response.ok) {
            setTitle('')
            setDescription('')
            setImportance(false)
            setError(null)
            console.log('new task added', json)
        }

        closeForm()
    }

    return (
        <>
            {state && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

                    <div className="bg-white rounded-lg shadow-lg mx-4 max-w-lg p-6">
                        
                        <h1 className="text-center text-2xl font-bold text-black sm:text-3xl">
                            Add Your Task To Be Done
                        </h1>

                        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
                            inventore quaerat mollitia?
                        </p>

                        <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">

                            <div>
                                <label htmlFor="task" className="sr-only">Task Title</label>
                                <div className="relative">
                                    <label className='font-medium text-gray-900'>Title</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter the task title..."
                                        onChange={(e) => setTitle(e.target.value)}
                                        value={title}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="OrderNotes" className="block text-sm font-medium text-gray-700"> Description </label>

                                <textarea
                                    id="OrderNotes"
                                    className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm p-2"
                                    rows="4"
                                    placeholder="Enter the task description..."
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                ></textarea>
                            </div>

                            <fieldset>
                                <legend className="sr-only">Checkboxes</legend>

                                <div className="space-y-2">
                                    <label
                                    htmlFor="Option1"
                                    className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                                    >
                                        <div className="flex items-center">
                                            &#8203;
                                            <input 
                                            type="checkbox" 
                                            className="size-4 rounded border-gray-300" 
                                            id="Option1"
                                            onChange={(e) => setImportance(e.target.checked)}
                                            checked={importance} />
                                        </div>

                                        <div>
                                            <strong className="font-medium text-gray-900"> Important </strong>

                                            <p className="mt-1 text-pretty text-sm text-gray-700">
                                            Select this option if and only the task is considered as Important.
                                            </p>
                                        </div>
                                    </label>
                                </div>

                            </fieldset>

                            <div className='flex flex-row gap-2'>
                                <button
                                    type="submit"
                                    className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                                    onClick={handleSubmit}
                                >
                                    Add Task
                                </button>

                                <button
                                    type="submit"
                                    className="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
                                    onClick={closeForm}
                                >
                                    Cancel
                                </button>
                            </div>

                            {error && <div>{error}</div>}


                        </form>

                    </div>
                </div>
            )}
        </>
    );
};

export default TaskForm;