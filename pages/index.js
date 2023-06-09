import React from 'react';

import { Form, Navbar, Container, Nav, Button, Table } from 'react-bootstrap';

import { FaBars, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

import TaskDialog from '@/components/TaskDialog';
import AddTaskBody from '@/components/AddTaskBody';
import EditTaskBody from '@/components/EditTaskBody';

import moment from 'moment/moment';

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

  const [editIndex, setEditIndex] = React.useState(null);

  const [preLoadErrors, setPreLoadErrors] = React.useState(false);

  const handleConfirm = () => {
    if (dialogMode === 'add') {
      handleAddTask();
    } else if (dialogMode === 'edit') {
      handleUpdateTask();
    }
  }

  const handleAddTask = () => {
    if (task.title && !tasks.map(e => e.title).includes(task.title) && task.description && task.deadline && task.priority) {
      setTasks([...tasks, task]);
      setTask({ title: null, description: null, deadline: null, priority: null, isComplete: false });

      toastr.success('Task added successfully');

      setShowDialog(false);

    } else {
      toastr.error('Error adding task');

      setPreLoadErrors(true);
    }
  };

  const handleUpdateTask = () => {
    if (task.description && task.deadline && task.priority) {
      const newTasks = [...tasks];
      newTasks[editIndex] = task;

      setTasks(newTasks);
      setTask({ title: null, description: null, deadline: null, priority: null, isComplete: false });

      toastr.success('Task updated successfully');

      setShowDialog(false);

    } else {
      toastr.error('Error updating task');

      setPreLoadErrors(true);
    }
  };

  const handleCancel = () => {
    setTask({ title: null, description: null, deadline: null, priority: null, isComplete: false });
    setShowDialog(false);
    setPreLoadErrors(false);
  };

  const handleUpdateClick = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
    setDialogMode('edit');
    setShowDialog(true);
  };

  const handleDeleteClick = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);

    toastr.success('Task deleted successfully');
  };

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
        dialogIcon={dialogMode === 'add' ? <FaPlus /> : <FaEdit />}
        body={dialogMode === 'add' ?
          <AddTaskBody
            task={task}
            setTask={setTask}
            existingTitles={tasks.map((e) => e.title)}
            preLoadErrors={preLoadErrors}
          /> :
          <EditTaskBody
            task={task}
            setTask={setTask}
            preLoadErrors={preLoadErrors}
          />}
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
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{moment(task.deadline).format("MM/DD/YYYY")}</td>
                <td className="text-center">{task.priority.toUpperCase()}</td>
                <td className="text-center">
                  <Form.Check
                    type="checkbox"
                    checked={task.isComplete}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      setTasks(prevTasks => {
                        const newTasks = [...prevTasks];
                        newTasks[index].isComplete = isChecked;
                        return newTasks;
                      });
                    }}
                  />
                </td>
                <td className="text-center">
                  <div className="btn-group-vertical">
                    {!task.isComplete && <Button variant="primary" onClick={() => handleUpdateClick(index)}>
                      <FaEdit />
                      {' '}
                      Update
                    </Button>}

                    <Button variant="danger" onClick={() => handleDeleteClick(index)}>
                      <FaTrash />
                      {' '}
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};