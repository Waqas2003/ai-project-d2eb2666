import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/api/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:3000/api/students', newStudent);
    setNewStudent({});
  };

  const handleInputChange = (event) => {
    setNewStudent({ ...newStudent, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>Student Management System</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={newStudent.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={newStudent.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Roll Number:
          <input type="text" name="rollNumber" value={newStudent.rollNumber} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Course:
          <input type="text" name="course" value={newStudent.course} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Add Student</button>
      </form>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name} ({student.rollNumber}) - {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;