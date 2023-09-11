function LuckyNumber() {
  const randomNumber = () => {
    return Math.floor(Math.random() * 60 + 1);
  };

  return (
    <>
      <h2 className="subtitle">Seus números da sorte da Mega-Sena são:</h2>
      <ul>
        <li>{randomNumber()}</li>
        <li>{randomNumber()}</li>
        <li>{randomNumber()}</li>
        <li>{randomNumber()}</li>
        <li>{randomNumber()}</li>
        <li>{randomNumber()}</li>
      </ul>
    </>
  );
}

export default LuckyNumber;
