import React from 'react';
import { Form } from 'react-bootstrap';

export default function AddTaskBody({ task, setTask, existingTitles, showInvalid }) {
    const [titleError, setTitleError] = React.useState('');
    const [descriptionError, setDescriptionError] = React.useState('');
    const [deadlineError, setDeadlineError] = React.useState('');
    const [priorityError, setPriorityError] = React.useState('');

    const handleValidityCheck = () => {
        if (!task.title) {
            setTitleError('Title is required');
        } else if (existingTitles.includes(task.title)) {
            setTitleError('Title already exists');
        } else {
            setTitleError('');
        }

        if (!task.description) {
            setDescriptionError('Description is required');
        } else {
            setDescriptionError('');
        }

        if (!task.deadline) {
            setDeadlineError('Deadline is required');
        } else {
            setDeadlineError('');
        }

        if (!task.priority) {
            setPriorityError('Priority is required');
        } else {
            setPriorityError('');
        }
    };

    const handleTitleChange = (e) => {
        const title = e.target.value;

        setTask((prevState) => ({
            ...prevState,
            title: title
        }));

        if (showInvalid) {
            handleValidityCheck();
        } else if (!title) {
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

        if (showInvalid) {
            handleValidityCheck();
        } else if (!description) {
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

        if (showInvalid) {
            handleValidityCheck();
        } else if (!deadline) {
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

        if (showInvalid) {
            handleValidityCheck();
        } else if (!priority) {
            setPriorityError('Priority is required');
        } else {
            setPriorityError('');
        }
    };

    React.useEffect(() => {
        if (showInvalid) {
            handleValidityCheck();
        }
    }, [showInvalid]);

    return (
        <Form>
            <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" value={task.title} onChange={handleTitleChange} isInvalid={!!titleError} />
                <Form.Control.Feedback type="invalid">
                    {titleError || (showInvalid && !task.title.length && 'Title is required') || (showInvalid && existingTitles.includes(task.title) && 'Title already exists')}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter description" value={task.description} onChange={handleDescriptionChange} isInvalid={!!descriptionError} />
                <Form.Control.Feedback type="invalid">
                    {descriptionError || (showInvalid && !task.description && 'Description is required')}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formDeadline">
                <Form.Label>Deadline</Form.Label>
                <Form.Control type="date" value={task.deadline} onChange={handleDeadlineChange} isInvalid={!!deadlineError} />
                <Form.Control.Feedback type="invalid">
                    {deadlineError || (showInvalid && !task.deadline && 'Deadline is required')}
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
                    {priorityError || (showInvalid && !task.priority && 'Priority is required')}
                </Form.Control.Feedback>
            </Form.Group>
        </Form>
    );
}
