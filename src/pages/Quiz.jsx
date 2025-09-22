import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Tests from "../components/Tests";

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
  return (
    <section className="container quiz-container">
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {quizzes && <Tests quizzes={quizzes} />}
    </section>
  );
}

export default Quiz;
