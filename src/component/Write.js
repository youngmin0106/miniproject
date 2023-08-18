import { Component, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";



class Write extends Component {
    render() {
        return (


            <div className="write">
                <Form>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Label className="title-bg">제목</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="title-bg">내용</Form.Label>
                        <Form.Control as="textarea" />
                    </Form.Group>
                </Form>
                <Button variant="info">작성완료</Button>
                <Button variant="secondary">취소</Button>
            </div>
        );
    }
}

export default Write;