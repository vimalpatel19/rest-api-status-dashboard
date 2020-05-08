import React from 'react';
import { Card, CardContent, Chip, Typography } from '@material-ui/core';
import { Alert, Skeleton } from '@material-ui/lab';

import Fetch from '../hooks/Fetch.js';
import Properties from './SecondaryProperties.js';

function Status(props) {
    const data = Fetch(props.input.url);

    const main = props.input.properties.filter(elem => elem.kind === 'main');
    const secondary = props.input.properties.filter(elem => elem.kind === "secondary");

    return(
        <div>
            {
                data === undefined
                ?
                (
                    <div>
                        <Skeleton animation="wave" height={95} />
                        <Skeleton animation="wave" variant="text" width="35%" />
                        <Skeleton animation="wave" variant="text" width="35%" />
                        <Skeleton animation="wave" variant="rect" height={45 * secondary.length} />
                    </div>
                )
                :
                (
                    <Card variant="outlined">
                        <CardContent>
                            <div style={{ paddingBottom: 12 }}>
                                {
                                    data !== null ?
                                    (<Alert variant="filled" severity="success"><Typography variant="h6">{props.input.service}</Typography></Alert>)
                                    :
                                    (<Alert variant="filled" severity="error"><Typography variant="h6">{props.input.service}</Typography></Alert>)
                                }
                            </div>
                            
                            {renderMainProperties(data, main)}

                            <div style={{ paddingTop: 12, paddingLeft: 30, paddingRight: 30 }}>
                                    <Properties secondaryProps={secondary} result={data} />
                            </div>
                        </CardContent>
                    </Card>
                )
            }
        </div>
    );
}

function renderMainProperties(data, main) {
    if (data !== null) {
        return (
            main.map((elem) => (<Chip label={data[elem.field]} color="secondary" size="medium" style={{ fontSize: 15 }} />))
        );
    }
}

export default Status;