import {useEffect, useMemo, useState} from "react";
import { Nav } from 'react-bootstrap';
import gegevens from './../../package.json';
import './../Css/Doneer.scss'
import React from 'react'
import Select from 'react-select'
import { setCookieDate } from "../Cookie/Cookie";
import {checkJWTToken, getJWTRole, GetJWTExp} from './../JWT/JWT'

export default function Programming() {
  const [amount, setAmount] = useState(null);

  if (checkJWTToken()) {
    var role = getJWTRole();
    if (role != 'Admin')
      window.location.href = 'http://localhost:3000/';
  }

  return (
    <>
      <div>
        <h1>Admin page pagina</h1>
        Link:<Nav.Link href="/reserveringOverview" className='headerItemLink'>Reservering overview</Nav.Link>
      </div>
    </>
  )

}

