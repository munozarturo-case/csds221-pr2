import React from 'react';
import { Form } from 'react-bootstrap';

export default function AddTaskBody({ task, setTask }) {
    const handleTitleChange = (e) => {
        setTask((prevState) => ({
            ...prevState,
            title: e.target.value
        }));
    };

    const handleDescriptionChange = (e) => {
        setTask((prevState) => ({
            ...prevState,
            description: e.target.value
        }));
    };

    const handleDeadlineChange = (e) => {
        setTask((prevState) => ({
            ...prevState,
            deadline: e.target.value
        }));
    };

    const handlePriorityChange = (e) => {
        setTask((prevState) => ({
            ...prevState,
            priority: event.target.value
        }));
    };

    return (
        <Form>
            <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" value={task.title} onChange={handleTitleChange} />
            </Form.Group>
            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter description" value={task.description} onChange={handleDescriptionChange} />
            </Form.Group>
            <Form.Group controlId="formDeadline">
                <Form.Label>Deadline</Form.Label>
                <Form.Control type="date" value={task.deadline} onChange={handleDeadlineChange} />
            </Form.Group>
            <Form.Group controlId="formPriority">
                <Form.Label>Priority</Form.Label>
                <div>
                    <Form.Check inline type="radio" label="High" name="priority" value="high" checked={task.priority === 'high'} onChange={handlePriorityChange} />
                    <Form.Check inline type="radio" label="Med" name="priority" value="med" checked={task.priority === 'med'} onChange={handlePriorityChange} />
                    <Form.Check inline type="radio" label="Low" name="priority" value="low" checked={task.priority === 'low'} onChange={handlePriorityChange} />
                </div>
            </Form.Group>
        </Form>
    );
}
