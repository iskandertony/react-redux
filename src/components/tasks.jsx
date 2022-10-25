import { useSelector } from "react-redux";

const Tasks = ({handleDelete}) => {

 
  
  const tasks = useSelector((store) => store.tasks);

  return (
    <div className="input-value">
      {tasks.map((item, index) => (
        <div key={index}>
          {item}
          <button onClick={handleDelete}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
