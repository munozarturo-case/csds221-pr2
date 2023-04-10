import React from 'react';

import { Form } from 'react-bootstrap';

export default function AddTaskBody({ task, setTask, existingTitles, preLoadErrors = false }) {
    const [titleError, setTitleError] = React.useState('');
    const [descriptionError, setDescriptionError] = React.useState('');
    const [deadlineError, setDeadlineError] = React.useState('');
    const [priorityError, setPriorityError] = React.useState('');

    React.useEffect(() => {
        if (preLoadErrors) {
            if (!task.title) {
                setTitleError('Title is required');
            } else if (existingTitles.includes(task.title)) {
                setTitleError('Title already exists');
            }

            if (!task.description) {
                setDescriptionError('Description is required');
            }

            if (!task.deadline) {
                setDeadlineError('Deadline is required');
            }

            if (!task.priority) {
                setPriorityError('Priority is required');
            }
        }
    }, [preLoadErrors, task, existingTitles]);

    const handleTitleChange = (e) => {
        const title = e.target.value;

        setTask((prevState) => ({
            ...prevState,
            title: title
        }));

        if (!title) {
            setTitleError('Title is required');
        } else if (existingTitles.includes(title)) {
            setTitleError('Title already exists');
        } else {
            setTitleError('');
        }
    };

    const handleDescriptionChange = (e) => {
        const description = e.target.value;

        setTask((prevState) => ({
            ...prevState,
            description: description
        }));

        if (!description) {
            setDescriptionError('Description is required');
        } else {
            setDescriptionError('');
        }
    };

    const handleDeadlineChange = (e) => {
        const deadline = e.target.value;

        setTask((prevState) => ({
            ...prevState,
            deadline: deadline
        }));

        if (!deadline) {
            setDeadlineError('Deadline is required');
        } else {
            setDeadlineError('');
        }
    };

    const handlePriorityChange = (e) => {
        const priority = e.target.value;

        setTask((prevState) => ({
            ...prevState,
            priority: priority
        }));

        if (!priority) {
            setPriorityError('Priority is required');
        } else {
            setPriorityError('');
        }
    };

    return (
        <Form>
            <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" value={task.title} onChange={handleTitleChange} isInvalid={!!titleError} />
                <Form.Control.Feedback type="invalid">
                    {titleError}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter description" value={task.description} onChange={handleDescriptionChange} isInvalid={!!descriptionError} />
                <Form.Control.Feedback type="invalid">
                    {descriptionError}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formDeadline">
                <Form.Label>Deadline</Form.Label>
                <Form.Control type="date" value={task.deadline} onChange={handleDeadlineChange} isInvalid={!!deadlineError} />
                <Form.Control.Feedback type="invalid">
                    {deadlineError}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPriority">
                <Form.Label>Priority</Form.Label>
                <div>
                    <Form.Check inline type="radio" label="High" name="priority" value="high" checked={task.priority === 'high'} onChange={handlePriorityChange} isInvalid={!!priorityError} />
                    <Form.Check inline type="radio" label="Med" name="priority" value="med" checked={task.priority === 'med'} onChange={handlePriorityChange} isInvalid={!!priorityError} />
                    <Form.Check inline type="radio" label="Low" name="priority" value="low" checked={task.priority === 'low'} onChange={handlePriorityChange} isInvalid={!!priorityError} />
                </div>
                <Form.Control.Feedback type="invalid">
                    {priorityError}
                </Form.Control.Feedback>
            </Form.Group>
        </Form>
    );
}
