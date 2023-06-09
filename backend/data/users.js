import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Pedrinho",
    email: "pedrinho@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmint: false,
  },
  {
    name: "Camilinha",
    email: "camilinha@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmint: false,
  },
];

export default users;
