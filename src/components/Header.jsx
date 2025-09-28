export default function Header(props) {
  return (
    <header className="app-header">
      <img  className= "logo" src="./public/podcast.png" alt="Podcast Logo" width="50" height="50"></img>
      <h1>{props.children}</h1>
    </header>
  );
}