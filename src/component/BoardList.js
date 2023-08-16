import { Component } from "react";
import Table from "react-bootstrap/Table";


class BoardList extends Component {
   
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>공지</td>
                        <td>운영자</td>
                        <td>2023-08-15</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>공지</td>
                        <td>운영자</td>
                        <td>2023-08-15</td>
                    </tr>
                 
                </tbody>
            </Table>
        );
    }
}

export default BoardList;