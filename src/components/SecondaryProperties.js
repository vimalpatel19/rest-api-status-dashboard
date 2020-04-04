import React from 'react';
import { Table, TableBody, TableRow, TableCell, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    noLines: {
        borderBottom: "none",
        paddingBottom: 0,
    }
});

function SecondaryProperties(props) {
    const classes = useStyles();

    return(
        <Table size="small" style={{ width: "auto" }}>
            <TableBody>
                {props.secondaryProps.map((elem) => (
                    <TableRow key={elem.label}>
                        <TableCell className={classes.noLines}>{elem.label}</TableCell>
                        {
                        props.result !== null
                            ?
                            (<TableCell className={classes.noLines}>{convertToString(props.result[elem.field])}</TableCell>)
                            :
                            (<TableCell className={classes.noLines}></TableCell>)
                        }
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

function convertToString(value) {
    if (value !== undefined) {
        let str = value.toString();
        return str.toUpperCase();
    }
    return value;
}

export default SecondaryProperties;