// Copyright (c) TribuFu. All Rights Reserved.

import Head from "next/head";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Home() {
    const page = {
        title: "Heze",
        description: "Heze Design System",
    }

    return (
        <>
            <Head>
                <title>{page.title} Design</title>
                <meta name="description" content={page.description} />
            </Head>
            <Navbar className="shadow" variant="dark" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">{page.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
