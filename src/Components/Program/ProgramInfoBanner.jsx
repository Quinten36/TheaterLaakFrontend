import './../../Css/Program.scss';

function ProgramInfoBanner(props) {
  //Unwrap props to const
  const group = props.program.group;
  const genres = props.program.genres;

  //Generates the html for artist names
  function GetArtistItems(){
    //Need to return when group data is not loaded
    if (group == undefined || group == []) return;
    
    //If Loaded return the artists
    return group.artists.map((artist, index) =>
      <span key={artist.id}>{artist.name}{index !== group.artists.length-1 ? ', ' : ''}</span> 
    )
  }

  //Generates the html for genre names
  function GetGenres() {
    //If the data does not exist or there is no genre return nothing
    if(genres == undefined || genres.length == 0) return;

    //If loaded return the div with genres
    return <div>
      {genres.length > 1 ? "Genres" : "Genre" }<br/>
      {genres.map((genre, index) =>
        <span key={genre.id}>{genre.name}{index !== genres.length-1 ? ', ' : ''}</span> 
      )} 
    </div>;
  }

  return (
    <section>
      <h3 className='programGenre'>{GetGenres()}</h3>
      <h2 className='programTitle'>{props.program.title}</h2>
      <div className='programArtistHolder'>
        {/* add list of artists to DOM */}
        {GetArtistItems()}
      </div>
    </section>
  );
}

export default ProgramInfoBanner;