import React from "react";

const TaskCard = ({ task }) => {

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString(undefined, options);
      };

    return (
        <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
            <div className="rounded-[10px] bg-white p-4 sm:p-6 h-full">

                <time className="block text-xs text-gray-500">{formatDate(task.createdAt)}</time>

                <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                        {task.title}
                    </h3>
                    <p className="text-gray-500">
                        {task.description}
                    </p>
                </a>

                <div className="mt-4 flex flex-wrap gap-1">

                    {task.importance && (
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        Important
                    </span>)}

                </div>
            </div>
        </article>
    )
}

export default TaskCard