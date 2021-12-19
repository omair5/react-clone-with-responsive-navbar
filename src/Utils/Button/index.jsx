import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#3B833A',
        borderColor: '#28a745',
        padding: '10px 15px',
        color: 'white',
        fontSize: '16px',
        letterSpacing: '1px',
        fontWeight: 'bolder',
        outline: 'none',
        border: ' none',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'block',
        transition: 'all 0.5s ease',
        '&:hover': {
            opacity: 0.9
        }
    },
}));

const Button = ({ innerText, type, HandleButtonClick }) => {
    const classes = useStyles();
    return (
        <button className={classes.button} type={type} onClick={HandleButtonClick}>
            {innerText}
        </button>
    );
}

export default React.memo(Button);