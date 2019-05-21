const users = [
  { email: 'john.doe@example.com', password: '12345', firstName: 'John', lastName: 'Doe' },
  { email: 'jane.doe@example.com', password: '12345', firstName: 'Jane', lastName: 'Doe' },
  { email: 'tom.doe@example.com', password: '12345', firstName: 'Tom', lastName: 'Doe' },
  { email: 'blair.doe@example.com', password: '12345', firstName: 'Blair', lastName: 'Doe' },
  { email: 'kate.doe@example.com', password: '12345', firstName: 'Kate', lastName: 'Doe' }
];

function login(email, password) {
  return new Promise((resolve, reject) => {
    resolve(users.find(user => user.email === email && user.password === password));
  });
}

const usersService = {
  login
};
export default usersService;
