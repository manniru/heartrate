// in src/Dashboard.js
import React from 'react';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';

export default () => (
    <div>
<Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...<br />


            <Button variant="raised" color="primary" style={{margin: 10}}>
Primary
</Button>
<Button variant="raised" color="secondary" style={{margin: 10}}>
Secondary
</Button>
        </CardContent>

        <Button variant="raised" color="primary" style={{margin: 10}}>
Primary
</Button>
<Button variant="raised" color="secondary" style={{margin: 10}}>
Secondary
</Button>

    </Card>

<Button variant="raised" color="primary" style={{margin: 10}}>
Primary
</Button>
<Button variant="raised" color="secondary" style={{margin: 10}}>
Secondary
</Button>
    </div>
);
