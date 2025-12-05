import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Button, Modal } from "react-bootstrap";

function Grades() {
  const [grades, setGrades] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8010/api/grades")
      .then(res => setGrades(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleShowDetails = (grade) => {
    setSelectedGrade(grade);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedGrade(null);
  };

  return (
    <Container fluid className="py-4">
      <h2 className="mb-4 text-center">Grades List</h2>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Student</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={grade._id}>
              <td>{index + 1}</td>
              <td>{grade.student}</td>
              <td>{grade.course}</td>
              <td>{grade.grade}</td>
              <td>
                <Button 
                  variant="info" 
                  size="sm" 
                  onClick={() => handleShowDetails(grade)}
                >
                  Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Grade Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedGrade && (
            <>
              <p><strong>Student:</strong> {selectedGrade.student}</p>
              <p><strong>Course:</strong> {selectedGrade.course}</p>
              <p><strong>Grade:</strong> {selectedGrade.grade}</p>
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

export default Grades;
