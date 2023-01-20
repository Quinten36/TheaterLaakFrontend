import {useEffect, useMemo, useState} from "react";
import { Nav } from 'react-bootstrap';
import gegevens from './../../package.json';
import './../Css/Doneer.scss'
import React from 'react'
import Select from 'react-select'
import CheckAdmin from "../Util/CheckRole";

export default function Programming() {
  const [amount, setAmount] = useState(null);

  if(CheckAdmin()) return;

  return (
    <>
      <div>
        <h1>Admin page pagina</h1>
        Link:<Nav.Link href="/reserveringOverview" className='headerItemLink'>Reservering overview</Nav.Link>
      </div>
    </>
  )

}

