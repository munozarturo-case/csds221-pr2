import React from 'react';
import { Form, Navbar, Container, Nav, Button, Table } from 'react-bootstrap';
import { FaBars, FaPlus } from 'react-icons/fa';
import TaskDialog from '@/components/TaskDialog';
import AddTaskBody from '@/components/AddTaskBody';

import 'toastr/build/toastr.min.css';
import toastr from 'toastr';

toastr.options = {
  positionClass: 'toast-bottom-right',
};

export default function Home() {
  const [showDialog, setShowDialog] = React.useState(false);
  const [dialogMode, setDialogMode] = React.useState('');

  const [tasks, setTasks] = React.useState([]);
  const [task, setTask] = React.useState({ title: null, description: null, deadline: null, priority: null, isComplete: false });

  const [actionIsValid, setActionIsValid] = React.useState(false);
  const [triedConfirm, setTriedConfirm] = React.useState(false);

  React.useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const handleConfirm = () => {
    if (dialogMode === 'add') {
      handleAddTask();
    } else if (dialogMode === 'edit') {
      handleUpdateTask();
    }

    setTriedConfirm(true);
  }

  const handleAddTask = () => {
    if (actionIsValid) {
      setTasks([...tasks, task]);
      setTask({ title: null, description: null, deadline: null, priority: null, isComplete: false });
      setShowDialog(false);
      toastr.success('Task added successfully');
    }
  };

  const handleUpdateTask = () => {

    setShowDialog(false);
  };

  const handleCancel = () => {
    setActionIsValid(false);

    setShowDialog(false);
  };

  const handleUpdateClick = () => {
    setDialogMode('edit');
    setShowDialog(true);
  };

  const EditTaskBody = () => {
    return (
      <>
        <p>Edit Task Body</p>
      </>
    );
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" className="mb-4">
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars className="align-middle" />
        </Navbar.Toggle>
        <Container className="d-flex justify-content-center">
          <Navbar.Brand className="d-flex align-items-center">
            <FaBars className="mr-2 align-middle" />
            FRAMEWORKS
          </Navbar.Brand>
        </Container>
        <Nav className="ml-auto mr-2">
          <Button variant="primary" style={{ "margin-right": "10px" }} onClick={() => {
            setDialogMode('add');
            setShowDialog(true);
          }}>
            <FaPlus className="align-middle" /> Add
          </Button>
        </Nav>
      </Navbar>
      <TaskDialog
        show={showDialog}
        title={dialogMode === 'add' ? 'Add Task' : 'Edit Task'}
        body={dialogMode === 'add' ?
          <AddTaskBody
            task={task}
            setTask={setTask}
            existingTitles={tasks.map((e) => e.title)}
            setActionIsValid={setActionIsValid} /> :
          <EditTaskBody />}
        onConfirm={handleConfirm}
        onCancel={handleCancel} />
      <Container className="my-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="table-header">Task</th>
              <th className="table-header">Description</th>
              <th className="table-header">Deadline</th>
              <th className="table-header">Priority</th>
              <th className="table-header">Is Complete</th>
              <th className="table-header">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Add your task items here */}
          </tbody>
        </Table>
      </Container>
    </>
  );
};