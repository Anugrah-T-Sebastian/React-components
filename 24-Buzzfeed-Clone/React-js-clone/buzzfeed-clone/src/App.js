import { useState, useEffect } from "react";
import Title from "./components/Title";
import QuestionsBlock from "./components/QuestionsBlock";
import AnswerBlock from "./components/AnswerBlock";

const App = () => {
  // STATES
  const [quiz, setQuiz] = useState(null);
  const [chosenAnswerItems, setChosenAnswerItems] = useState([]);
  const [unansweredQuestionIds, setUnansweredQuestionIds] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  // EFFECTS
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const unansweredIds = quiz?.content.map(({ id }) => id);
    setUnansweredQuestionIds(unansweredIds);
  }, [quiz]);

  useEffect(() => {
    if (unansweredQuestionIds) {
      if (unansweredQuestionIds.length <= 0 && chosenAnswerItems.length >= 1) {
        //scroll to answer block
        setShowAnswer(true);
        const answerBlock = document.getElementById("answer-block");
        answerBlock?.scrollIntoView({ behavior: "smooth" });
      }
      //scroll to highest unansweredQuestionIds
      const highestId = Math.min(...unansweredQuestionIds);
      const highestElement = document.getElementById(highestId);
      highestElement?.scrollIntoView({ behavior: "smooth" });
    }
  }, [unansweredQuestionIds, chosenAnswerItems, showAnswer]);
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
      {showAnswer && (
        <AnswerBlock
          answerOptions={quiz?.answer}
          chosenAnswers={chosenAnswerItems}
        />
      )}
    </div>
  );
};

export default App;
