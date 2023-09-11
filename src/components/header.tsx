import User from './user';

function Header() {
  function luckyNumber() {
    return Math.floor(Math.random() * 60 + 1);
  }

  return (
    <header>
      <h1 className="greeting">
        Olá,
        {' '}
        <User />
        <img src="https://i.imgur.com/rqvLd3q.png" alt="" />
      </h1>
      <h2 className="subtitle">Seus números da sorte da Mega-Sena são:</h2>
      <ul>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
        <li>{luckyNumber()}</li>
      </ul>
    </header>
  );
}

export default Header;
