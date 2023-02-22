import { useState, useEffect } from "react";
import Title from "./components/Title";
import QuestionsBlock from "./components/QuestionsBlock";

const App = () => {
  // STATES
  const [quiz, setQuiz] = useState(null);
  const [chosenAnswerItems, setChosenAnswerItems] = useState([]);
  const [unansweredQuestionIds, setUnansweredQuestionIds] = useState([]);
  // EFFECTS
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const unansweredIds = quiz?.content.map(({ id }) => id);
    setUnansweredQuestionIds(unansweredIds);
  }, [quiz]);
  // FUNCTIONS
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/quiz");
      const json = await response.json();
      setQuiz(json);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(chosenAnswerItems);
  console.log(unansweredQuestionIds);
  return (
    <div className="app">
      <Title title={quiz?.title} subTitle={quiz?.subtitle} />
      {quiz &&
        quiz?.content.map((contentItem) => {
          return (
            <QuestionsBlock
              key={contentItem.id}
              setChosenAnswerItems={setChosenAnswerItems}
              chosenAnswerItems={chosenAnswerItems}
              unansweredQuestionIds={unansweredQuestionIds}
              setUnansweredQuestionIds={setUnansweredQuestionIds}
              quizItem={contentItem}
            />
          );
        })}
    </div>
  );
};

export default App;
