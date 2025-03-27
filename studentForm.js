import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !course) return alert("Please fill all fields!");
    await addStudent(name, course);
    setName("");
    setCourse("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input 
        type="text" 
        placeholder="Student Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        style={styles.input}
      />
      <input 
        type="text" 
        placeholder="Course" 
        value={course} 
        onChange={(e) => setCourse(e.target.value)} 
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Add Student</button>
    </form>
  );
};

// Styling
const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    width: "90%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #aaa",
  },
  button: {
    padding: "8px 15px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default StudentForm;
