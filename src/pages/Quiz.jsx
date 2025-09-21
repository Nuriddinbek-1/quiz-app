import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Quiz() {
  const { title } = useParams();

  useEffect(() => {
    document.title = "Quiz" + " " + title;
  }, [title]);

  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(
    `https://json-api.uz/api/project/nuriddinbek-quiz/quizzes?title=${title}`
  );
  console.log(quizzes);
  return (
    <section>
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
    </section>
  );
}

export default Quiz;
