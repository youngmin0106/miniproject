import { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import './BoardList.css';

class BoardList extends Component {

    render() {
        return (
            <div className="board">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>선택</th>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th>내용</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="checkbox"></input>
                            </td>
                            <td>0</td>
                            <td>공지</td>
                            <td>운영자</td>
                            <td>2023-08-17</td>
                            <td>0817클라이언트 점검....</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox"></input>
                            </td>
                            <td>1</td>
                            <td>보스모집</td>
                            <td>player1</td>
                            <td>2023-08-19</td>
                            <td>19일 오후4시 발탄가실분 구....</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox"></input>
                            </td>
                            <td>2</td>
                            <td>길드모집</td>
                            <td>player2</td>
                            <td>2023-08-20</td>
                            <td>길드 모집합니다 문의는...</td>
                        </tr>
                     
                    </tbody>
                </Table>
                <div className="btn">
                <Button variant="info">글쓰기</Button>
                <Button variant="secondary">수정하기</Button>
                <Button variant="danger">삭제하기</Button>
                </div>
            </div>
        );
    }
}

export default BoardList;