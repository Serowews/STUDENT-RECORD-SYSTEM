import React from "react";

const StudentList = ({ students, deleteStudent }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.length === 0 ? (
          <p>No students added yet.</p>
        ) : (
          students.map((student) => (
            <li key={student.id}>
              {student.name} - {student.course} 
              <button onClick={() => deleteStudent(student.id)} style={styles.deleteButton}>
                ❌ Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

const styles = {
  deleteButton: {
    marginLeft: "10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default StudentList;

