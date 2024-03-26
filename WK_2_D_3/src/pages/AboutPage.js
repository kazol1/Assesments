import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

const AboutPage = () => {
    const [count, setCount] = useState(0);

    return (
        <Container className='mt-5'>
            <p>Counter: {count}</p>
            <Button variant='primary' onClick={() => setCount(count + 1)}>
                Increase
            </Button>
            <Button variant='danger' onClick={() => setCount(count - 1)}>
                Decrease
            </Button>

            <div className='mt-4'>
                <h3>About Us</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam luctus dui ac tortor volutpat, eget gravida quam
                    finibus. Sed ut velit id risus aliquam bibendum. Nullam
                    hendrerit orci ut suscipit vestibulum.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Nullam luctus dui ac
                    tortor volutpat, eget gravida quam finibus. Sed ut velit id
                    risus aliquam bibendum. Nullam hendrerit orci ut suscipit
                    vestibulum.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nullam luctus dui ac tortor volutpat, eget
                    gravida quam finibus. Sed ut velit id risus aliquam
                    bibendum. Nullam hendrerit orci ut suscipit vestibulum.
                </p>
            </div>
        </Container>
    );
};

export default AboutPage;
