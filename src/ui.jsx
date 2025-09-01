const { useState } = React;

function TaskForm({ onAdd }) {
  const [task, setTask] = useState({ id: '', hours: '', dependencies: '' });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const deps = task.dependencies
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    onAdd({ id: task.id, hours: parseInt(task.hours, 10), dependencies: deps });
    setTask({ id: '', hours: '', dependencies: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="id"
        value={task.id}
        onChange={handleChange}
        placeholder="Task ID"
        required
      />
      <input
        name="hours"
        type="number"
        value={task.hours}
        onChange={handleChange}
        placeholder="Hours"
        required
      />
      <input
        name="dependencies"
        value={task.dependencies}
        onChange={handleChange}
        placeholder="Dependencies (comma separated)"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [start, setStart] = useState('');
  const [schedule, setSchedule] = useState(null);

  const addTask = (task) => setTasks([...tasks, task]);

  const handleSchedule = () => {
    if (!start) return;
    try {
      const result = scheduler.scheduleTasks(tasks, new Date(start));
      setSchedule(result);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1>Project Estimation Timeline</h1>
      <TaskForm onAdd={addTask} />
      <div>
        <label>
          Start Date:
          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </label>
        <button onClick={handleSchedule}>Schedule</button>
      </div>
      {schedule && (
        <table border="1">
          <thead>
            <tr>
              <th>Task</th>
              <th>Start</th>
              <th>End</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(schedule).map((t) => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.start.toDateString()}</td>
                <td>{t.end.toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
