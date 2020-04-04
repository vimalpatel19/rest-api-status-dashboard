import React from 'react';
import { Card, Typography, CardContent, Chip } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

import Fetch from '../hooks/Fetch.js';
import Properties from './SecondaryProperties.js';

function Status(props) {
    const data = Fetch(props.input.url);

    const main = props.input.properties.filter(elem => elem.property === 'main');
    const secondary = props.input.properties.filter(elem => elem.property === "secondary");

    return(
        <Card>
            <CardContent>
                <div style={{ paddingBottom: 5 }}>
                    <Typography variant="h5">
                        {props.input.service} {
                        data !== null ?
                            (<CheckCircleIcon style={{ color: green[500], fontSize: 25 }} />)
                            :
                            (<CancelIcon style={{ color: red[500], fontSize: 25 }} />)
                        }
                    </Typography>
                </div>
                
                {renderMainProperties(data, main)}

                <div style={{ paddingTop: 5 }}>
                    <Properties secondaryProps={secondary} result={data} />
                </div>
            </CardContent>
        </Card>
    );
}

function renderMainProperties(data, main) {
    if (data !== null) {
        return (
            main.map((elem) => (<Chip label={data[elem.field]} color="secondary" size="medium" />))
        );
    }
}

export default Status;