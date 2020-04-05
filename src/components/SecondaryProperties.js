import React from 'react';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    main: {
      paddingTop: 2,
      paddingBottom: 2
    }
  });

function SecondaryProperties(props) {
    const classes = useStyles();

    return(
        <div>
            {props.secondaryProps.map((elem) => (
                renderProperty(props.result, elem, classes)
            ))}
        </div>
    );
}

function renderProperty(result, property, style) {
    if (result === null) {
        return;
    }
    else {
        if (result[property.field] === true) {
            return (<Alert severity="success" className={style.main}>{property.label}</Alert>);
        }
        else if (result[property.field] === false) {
            return (<Alert severity="error" className={style.main}>{property.label}</Alert>);
        }
        else {
            return (<Alert severity="info" className={style.main}>{property.label}: {convertToString(result[property.field])}</Alert>);
        }
    }
}

function convertToString(value) {
    if (value !== undefined) {
        let str = value.toString();
        return str.toUpperCase();
    }
    return value;
}

export default SecondaryProperties;