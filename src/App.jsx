import React, { useState } from 'react';
import './App.css';

function ComponentA(props) {
  return (
    <div>
      <h4>Your Balance : Rp{props.saldo}</h4>
    </div>
  );
}

function ComponentB(props) {
  return (
    <div>
      {props.saldo.map((item, index) => {
        return (
          <div key={index}>
            <p className='IE'>Rp{item}</p>
          </div>
        );
      })}
    </div>
  );
}

function App() {
  const [saldo, setSaldo] = useState([10000,]);
  const [uang, setUang] = useState("");
  const [masuk, setMasuk] = useState([]);
  const [keluar, setKeluar] = useState([]);

  function Count(e) {
    let total = saldo - (-uang);

    setSaldo(total);

    e.preventDefault();
    setUang("");

    if (uang > 0) {
      setMasuk([...masuk, uang]);
    } else if (uang < 0) {
      setKeluar([...keluar, uang]);
    }
  }


  return (
    <div className="App">
      <div>
        <h1 className='head'>EXPENSE TRACKER</h1>

        <hr className='garis' />
        <ComponentA saldo={saldo}/>

        <div>
          <input type="number" value={uang} 
            onChange={(e) => setUang(e.target.value)} 
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                Count(e)
              }
            }}
            placeholder = "Enter Amount" 
          />

        </div>
        <div>
          <button type="submit" name='submit' className='BTN' onClick={Count}>Count</button>
        </div>

        <hr className='garis' />

        <div className='box'>
          <div className='kotak'>
            <p className='IE'>
              INCOME
            </p>
            <hr className='line' />
            <hr className='line' />
          <ComponentB saldo={masuk} />

          </div>
          <br />
          <div className='kotak'>
            <p className='IE'>
              EXPENSES
            </p>
            <hr className='line' />
            <hr className='line' />

          <ComponentB saldo={keluar} />
          </div>

        </div>


      </div>
    </div>
  );
}

export default App;
