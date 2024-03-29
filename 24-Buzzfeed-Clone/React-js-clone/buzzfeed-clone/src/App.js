import { useState, useEffect, createRef } from "react";
import Title from "./components/Title";
import QuestionsBlock from "./components/QuestionsBlock";
import AnswerBlock from "./components/AnswerBlock";

const App = () => {
  // STATES
  const [quiz, setQuiz] = useState(null);
  const [chosenAnswerItems, setChosenAnswerItems] = useState([]);
  const [unansweredQuestionIds, setUnansweredQuestionIds] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  // REFERENCES
  const refs = unansweredQuestionIds?.reduce((acc, id) => {
    acc[id] = createRef();
    return acc;
  }, {});
  const answerRef = createRef();

  // EFFECTS
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const unansweredIds = quiz?.content.map(({ id }) => id);
    setUnansweredQuestionIds(unansweredIds);
  }, [quiz]);

  useEffect(() => {
    if (chosenAnswerItems.length > 0) {
      if (showAnswer) {
        //scroll to answer block
        answerRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (unansweredQuestionIds.length <= 0 && chosenAnswerItems.length >= 1) {
        setShowAnswer(true);
      } else {
        //scroll to highest unansweredQuestionIds
        const highestId = Math.min(...unansweredQuestionIds);
        refs[highestId].current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [unansweredQuestionIds, chosenAnswerItems, showAnswer, answerRef, refs]);

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

  return (
    <div className="app">
      <Title title={quiz?.title} subTitle={quiz?.subtitle} />
      {refs &&
        quiz?.content?.map((contentItem) => {
          return (
            <QuestionsBlock
              key={contentItem.id}
              setChosenAnswerItems={setChosenAnswerItems}
              chosenAnswerItems={chosenAnswerItems}
              unansweredQuestionIds={unansweredQuestionIds}
              setUnansweredQuestionIds={setUnansweredQuestionIds}
              quizItem={contentItem}
              ref={refs[contentItem.id]}
            />
          );
        })}
      {showAnswer && (
        <AnswerBlock
          answerOptions={quiz?.answer}
          chosenAnswers={chosenAnswerItems}
          ref={answerRef}
        />
      )}
    </div>
  );
};

export default App;
