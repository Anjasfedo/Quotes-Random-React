import React from 'react';
import './style.css';
import { useState } from 'react';
import {quotes} from './Quotes.js';

export default function App() {

  const [index, setIndex] = useState(0);
  const [nama, kutipan] = [quotes[index].nama, quotes[index].kutipan];

  const handleClicked = () => {
    setIndex(Math.floor(Math.random() * quotes.length));
  }
  // console.log(index)
  // console.log(quotes[index].kutipan)
  // const [key, value] = Object.entries(quotes)[index]
  // const [nama, kutipan] = [value.nama, value.kutipan]
  console.log(nama)
  console.log(kutipan)

  return (
    <div>
      <div class="card text-center col-md-6 mx-auto">
        <div class="card-header">
          <h5 class="card-title">{nama}</h5>
        </div>
        <div class="card-body" style={{ height: '90px' }}>
          <p class="card-text">{kutipan}</p>
        </div>
        <div class="card-footer text-body-secondary">
          <button onClick={handleClicked} className="btn btn-primary">Ubah Quotes</button>
        </div>
      </div>
    </div>
  );
};