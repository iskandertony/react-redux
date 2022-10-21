import { useDispatch, useSelector } from 'react-redux';
import Button from './button';
import Input from './input';
import { addTask } from './../store/action';
import { useState } from 'react';

const TaskForm = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(addTask(input))
        setInput("")
    }


    console.log("input:", input);
    return (
        <div>
            <Input value={input} onChange={(e) => setInput(e.target.value)}></Input>
            <Button onClick={handleAdd}>add</Button>
        </div>
    )
}

export default TaskForm