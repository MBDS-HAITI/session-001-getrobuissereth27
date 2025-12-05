import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Button, Modal } from "react-bootstrap";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8010/api/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleShowDetails = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  return (
    <Container fluid className="py-4">
      <h2 className="mb-4 text-center">Courses List</h2>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Course Name</th>
            <th>code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={course._id}>
              <td>{index + 1}</td>
              <td>{course.name}</td>
              <td>{course.code}</td>
              <td>
                <Button 
                  variant="info" 
                  size="sm" 
                  onClick={() => handleShowDetails(course)}
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
          <Modal.Title>Course Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCourse && (
            <>
              <p><strong>Name:</strong> {selectedCourse.name}</p>
              <p><strong>code:</strong> {selectedCourse.code}</p>
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

export default Courses;
