import * as empRepository from '../repository/empRepository.js';

export async function getList(req, res) {
  //db 연동
  const rows = await empRepository.getList();
  //결과전송
  res.json(rows);
}


