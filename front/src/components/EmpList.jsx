import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table"; // 테이블 형식에 컴포넌트를 가져다 사용 

export default function EmpList() {
  const [emplist, setEmpList] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/')
      .then(res => setEmpList(res.data));//res 까지는 객체이기 때문에 res.data로
  }, []);
  return (
    <>
      <h2>⌜ Employees ⌟</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>번호</th>
            <th>사원아이디</th>
            <th>사원명</th>
            <th>입사일</th>
            <th>부서</th>
            <th>폰번호</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          {emplist.map(list =>
            <tr>
              <td>{list.rnum}</td>
              <td>{list.emp_id}</td>
              <td>{list.emp_name}</td>
              <td>{list.hire_date}</td>
              <td>{list.dept_id}</td>
              <td>{list.phone}</td>
              <td>{list.email}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}