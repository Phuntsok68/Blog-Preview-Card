export default function App() {
  return (
    <div className="app">
      <Image />
      <Content />
    </div>
  );
}
function Image() {
  return (
    <img
      src="./illustration-article.svg"
      alt="pic"
      className="background-img"
    ></img>
  );
}
function Content() {
  return (
    <div className="content">
      <button>Learning</button>
      <h3>Published 21 Dec 2023</h3>
      <h1>HTML & CSS foundations</h1>
      <p>
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <div className="profile">
        <img
          src="./image-avatar.webp"
          alt="profile"
          className="profile-img"
        ></img>
        <h2>Greg Hooper</h2>
      </div>
    </div>
  );
}
