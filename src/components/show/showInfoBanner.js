
import './../../css/show.scss';
import React, { useState, useEffect } from 'react';
import gegevens from './../../../package.json';

function Show(props) {
  const [programId, setProgramId] = useState([])
  const [group, setGroup] = useState([])
  var listItems;

  //check if there has been a new program request
  if (props.programId !== programId) {
    // console.log(props.programId)
    setProgramId(props.programId)
  }

  //retrieve the artists of the band
  useEffect(() => {
    if (programId !== undefined) {
      console.log(programId)
      fetch(`http://${gegevens.ipadress}:${gegevens.port}/api/artist/byBand/`+props.groupId)
      .then(resp => resp.json())
      .then((data) => {console.log(data);setGroup(data) })
    } 
  }, [programId])

    //add the artist to a list to add to the DOM
    
    if (group !== undefined || group !== []) {
      console.log(group)
      listItems = group.map((artist, index) =>
        <span key={artist.id}>{artist.name}{index !== group.length-1 ? ', ' : ''}</span> 
      )
    }
    

  return (
    <section>
      {/* maak api call voor genres op te halen */}
      <h3 className='showGenre'>Genre</h3>
      <h2 className='showTitel'>{props.title}</h2>
      <div className='showArtistHolder'>
        {/* add list of artists to DOM */}
        {listItems !== null && listItems}
      </div>
    </section>
  );
}

export default Show;