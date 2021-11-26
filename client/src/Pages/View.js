import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import axios from "axios";

const View = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState();
  const [peopleList, setPeopleList] = useState([]);
  const [show, setShow] = useState(false);
  const [action, setAction] = useState("");
  const [editId, setEditId] = useState();

  const handleClose = () => {
    setShow(false);
  };
  const handleShowAdd = () => {
    setAction("Add");
    setShow(true);
  };
  const handleShowEdit = (id, first_name, last_name, age, birthdate) => {
    setAction("Edit");
    setEditId(id);
    setName(first_name);
    setSurname(last_name);
    setAge(age);
    setBirthday(birthdate);
    setShow(true);
  };

  const handleAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age);
  };

  const getPeople = async () => {
    let res = await axios.get("http://localhost:3001/people");
    let data = res.data;

    setPeopleList(data);
  };

  const addPerson = async () => {
    const obj = {
      fName: name,
      lName: surname,
      age: age,
      date: birthday,
    };
    await axios.post("http://localhost:3001/create", obj).then(() => {
      console.log("success");
    });

    setName("");
    setSurname("");
    setBirthday("");
    setAge(0);

    getPeople();
    handleClose();
  };

  const updatePerson = async (id) => {
    const obj = {
      updates: {
        first_name: name,
        last_name: surname,
        age: age,
        birthdate: birthday,
      },
      id: id,
    };
    await axios.put("http://localhost:3001/update", obj).then(() => {
      console.log("success");
    });

    setName("");
    setSurname("");
    setBirthday("");
    setAge(0);

    getPeople();
    handleClose();
  };

  const deletePerson = async (id) => {
    await axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then((response) => {
        setPeopleList(
          peopleList.filter((val) => {
            return val.id !== id;
          })
        );
        console.log("Deleted person " + id);
      });
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <Container style={{ marginTop: 20 }}>
      <h3 style={{ marginBottom: 20 }}>List of People</h3>
      {peopleList.length !== 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {peopleList.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.id}</td>
                  <td>{val.first_name}</td>
                  <td>{val.last_name}</td>
                  <td>{val.age}</td>
                  <td>
                    <Row>
                      <Col>
                        <Button
                          onClick={() => {
                            handleShowEdit(
                              val.id,
                              val.first_name,
                              val.last_name,
                              val.age,
                              val.birthdate
                            );
                          }}
                        >
                          Edit
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          variant="danger"
                          onClick={() => {
                            deletePerson(val.id);
                          }}
                        >
                          Delete
                        </Button>
                      </Col>
                    </Row>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}
      <Button onClick={handleShowAdd}>Add New Person</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{action} User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={action === "Add" ? addPerson : () => updatePerson(editId)}
          >
            <Form.Group className="mb-3">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={surname}
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Birthday"
                value={birthday}
                onChange={(e) => {
                  setBirthday(e.target.value);
                  handleAge(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Button variant="primary" type="submit">
                {action} User
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default View;
