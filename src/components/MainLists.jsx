import { Link } from "react-router-dom";

// Custom hooks
import { useFetch } from "../hooks/useFetch";

function MainLists() {
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch("https://json-api.uz/api/project/nuriddinbek-quiz/quizzes");
  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="menu-list">
        {quizzes &&
          quizzes.data.map((item) => {
            return (
              <Link
                to={`/quiz/${item.title.toLowerCase()}`}
                key={item.title}
                className="menu-item header-logo">
                <figure style={{ backgroundColor: item.color }}>
                  <img src={item.icon} alt="" />
                </figure>
                <span>{item.title}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default MainLists;
