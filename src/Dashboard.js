// in src/Dashboard.js
import React from 'react';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import RemitaDashboard from './heart_rate/RemitaDashboard'

export default () => (
    <div>
<Card>
        <CardHeader title="Welcome to the administration Dashboard" />
        <CardContent>Cloud-Based Realtime Heart Rate Monitoring System<br />


            <Button variant="raised" color="primary" style={{margin: 10}}>
Primary
</Button>
<Button variant="raised" color="secondary" style={{margin: 10}}>
Secondary
</Button>

        <RemitaDashboard />

        </CardContent>

        
        


    </Card>




    </div>
);
