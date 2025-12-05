import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Button, Modal } from "react-bootstrap";

function Students() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8010/api/students")
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleShowDetails = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedStudent(null);
  };

  return (
    <Container fluid className="py-4">
      <h2 className="mb-4 text-center">Students List</h2>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id}>
              <td>{index + 1}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>
                <Button 
                  variant="info" 
                  size="sm" 
                  onClick={() => handleShowDetails(student)}
                >
                  Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal pour afficher les details*/}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Student Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedStudent && (
            <>
              <p><strong>firstName:</strong> {selectedStudent.firstName}</p>
              <p><strong>lastName:</strong> {selectedStudent.lastName}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Students;
