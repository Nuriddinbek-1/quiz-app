import MainLists from "../components/MainLists";

function Home() {
  return (
    <section className="container home-container">
      <div className="home-content">
        <h1 className="home-title">
          <span>Welcome to the</span>
          <span>Frontend Quiz</span>
        </h1>
        <p>Pick a subject to get started</p>
      </div>
      <div className="home-nav-list">
        <MainLists />
      </div>
    </section>
  );
}

export default Home;
