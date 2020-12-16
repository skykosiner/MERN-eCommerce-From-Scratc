import bcrypt from "bcrypt";

const users = [
  {
    name: "Admin User",
    email: "yoni@kosiner.co.uk",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "John@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "Jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
