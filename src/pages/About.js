import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <div className="container">
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>About This Application</Card.Title>
                    <Card.Text>
                        Hey Guys, This is a full CRUD Application with the help of React.js. I have use Redux-Saga to perform all CRUD operation in this application. In this application also have Routing facility as well. For routing I have used React router version 6 and for design component using React Bootstrap. Thank you.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">Design and Developed by Samiul Sheikh</Card.Footer>
            </Card>
        </div>
    );
};

export default About;