import { useSelector } from "react-redux"

const Tasks = () => {

    const tasks = useSelector(store => store.tasks)

    return (
        <div>
            {tasks.map((item, index) =>
                <div key={index}>{item}</div>
            )}
        </div>
    )
}

export default Tasks