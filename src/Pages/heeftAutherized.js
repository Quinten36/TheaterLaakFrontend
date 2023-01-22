import {useEffect, useMemo, useState} from "react";
import { Nav } from 'react-bootstrap';
import gegevens from './../../package.json';
import './../Css/Doneer.scss'
import React from 'react'
import { getCookie, setCookie } from "../Cookie/Cookie";
import { useLocation } from 'react-router';

export default function Programming() {

  const location = useLocation();
  var DoneerToken = location.pathname.split('/')[2];

  if (DoneerToken.length > 0) 
    if (getCookie('doneerToken') == "") 
      setCookie('doneerToken', DoneerToken, 15);

  window.location.href = 'http://localhost:3000/Doneren';

  return (
    <>

    </>
  )
}