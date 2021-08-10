import React from 'react';

function Home({
    onIncrement,
    onDecrement,
    counter,
}) {
  return (
      <div>
          <button onClick={onIncrement}>
            Vous avez cliqué {counter} fois
          </button>
          <br /><br />
          <button onClick={onDecrement}>
              Diminuer la valeur du compteur
          </button>

    </div>
  );
};

export default Home;
