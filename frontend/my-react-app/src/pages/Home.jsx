import { useEffect, useState } from 'react';

import SideMenu from '../components/sideMenu';
import SearchBar from '../components/searchBar';
import Header from '../components/header';
import TaskCard from '../components/taskCard';

const Home = () => {
    
    const [tasks, setTasks] = useState(null)

    useEffect(() => {
        const fetchTasks = async () => {
            const res = await fetch('api/tasks')
            console.log("response:", res);
            const json = await res.json()
            console.log("json:", json);

            if (res.ok) {
                setTasks(json)
            }
        }

        fetchTasks()
    }, [])

    return (
        <div className="flex h-screen">
            <SideMenu />
            <div className="flex-col flex-grow bg-[#ebf0f6] p-3">
                <SearchBar />
                <Header />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 lg:grid-cols-5 overflow-y-auto h-3/4 flex-wrap">
                    {tasks && tasks.map((task) => (
                        <TaskCard key={task._id} task={task} />
                    ))}                    
                </div>
            </div>
        </div>
    );
}

export default Home