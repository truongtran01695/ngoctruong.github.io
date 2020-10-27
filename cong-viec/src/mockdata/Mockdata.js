import { v4 as uuidv4 } from 'uuid';

const Mockdata = [
  {
    id: uuidv4(),
    name: "Làm Báo cao CMS deadline 30/10",
    level: 2 // high
  },
  {
    id: uuidv4(),
    name: "Ngủ",
    level: 0 // low
  },
  {
    id: uuidv4(),
    name: "Làm Báo cao LTW1 deadline 30/10",
    level: 1 // medium
  },
  {
    id: uuidv4(),
    name: "Thiết kế module CMS",
    level: 0 // low
  },
  {
    id: uuidv4(),
    name: "Làm task",
    level: 2 // high
  },
  {
    id: uuidv4(),
    name: "muốn tổ chức giải đua xe tại Việt Nam vào năm 2020",
    level: 1 // medium
  }
];

export default Mockdata;