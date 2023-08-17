import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [errorMessage, setErrorMessage] = useState();
    
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setErrorMessage({
                title: 'Invalid Username',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if (+enteredAge < 1) {
            setErrorMessage({
                title: 'Invalid Age',
                message: 'Please enter a valid age (must be greater than 0).'
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorMessageHandler = () => {
        setErrorMessage(null);
    }
    return (
        <>
        {errorMessage && <ErrorModal 
            title={errorMessage.title} 
            message={errorMessage.message}
            onAcknowledge={errorMessageHandler}/>}
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label 
                    htmlFor="username">
                    Username
                </label>
                <input 
                    id="username" 
                    type="text"
                    value={enteredUsername}
                    onChange={usernameChangeHandler} 
                />
                <label 
                    htmlFor="age">
                    Age (Years)
                </label>
                <input 
                    id="age" 
                    type="number"
                    value={enteredAge}
                    onChange={ageChangeHandler} 
                />
                <Button 
                    type="submit">
                    Add User
                </Button>
            </form>
        </Card>
        </>
    )
};

export default AddUser;