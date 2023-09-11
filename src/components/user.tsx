const user = {
  name: 'Fábio',
  lastName: 'Lessa',
};

function User() {
  return <span>{`Olá, ${user.name} ${user.lastName}`}</span>;
}

export default User;
