import { db } from '../db/database.js';

export async function getList() {
  const sql = `select row_number() over(order by emp_id) rnum,
  emp_id, emp_name, left(hire_date, 10) as hire_date, d.dept_name as dept_id, phone, email
  from employee e, department d
  where e.dept_id = d.dept_id;`;
  return db
    .execute(sql)
    .then(rows => rows[0]);
}