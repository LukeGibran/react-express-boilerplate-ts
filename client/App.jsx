import React, { useEffect, useState } from 'react';
import './scss/main.scss';
import ReactImage from './assets/img/react.png';
import ExpressImage from './assets/img/express.png';
import TypescriptImage from './assets/img/typescript.png';

// Component
import Sample from './components/Sample';

const App = () => {
  const [status, setStatus] = useState({
    msg: '',
  });

  const { msg } = status;
  useEffect(() => {
    checkServerStatus();
    // eslint-disable-next-line
  }, []);

  const checkServerStatus = async () => {
    try {
      const res = await fetch('/api/welcome');
      const data = await res.json();

      setStatus({ ...status, msg: data.msg });
    } catch (err) {
      console.log(err);
      setStatus({ ...status, msg: 'Disconnected' });
    }
  };
  return (
    <div id="app">
      <h1>React / Express Boiler Plate</h1>
      <div className="powered">
        <h3>powered by:</h3>
        <img src={TypescriptImage} alt="" id="typescript" />
      </div>
      <div id="img">
        <img src={ReactImage} alt="" id="react" />
        <img src={ExpressImage} alt="" id="express" />
      </div>

      <h2>
        Server:{' '}
        <span className={msg === 'Disconnected' ? 'danger' : 'success'}>
          {msg}
        </span>
      </h2>
      <Sample />
    </div>
  );
};

export default App;
