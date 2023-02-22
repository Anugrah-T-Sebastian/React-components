1:59
//import AnswerBlock from "./AnswerBlock";
const QuestionBlock = ({
  question,
  chosenAnswerItems,
  setChosenAnswerItems,
  unansweredQuestionIds,
  setUnansweredQuestionIds,
  quizItemId,
}) => {
  const handleClick = () => {
    setChosenAnswerItems((prevState) => [...prevState, question.text]);
    setUnansweredQuestionIds(
      unansweredQuestionIds.filter((id) => id != quizItemId)
    );
  };
  return (
    <button
      className="question-block"
      onClick={handleClick}
      //disabled={!chosenAnswerItems.includes(question.text)}
    >
      <img src={question.image} alt={question.alt} />
      <h3>{question.text}</h3>
      <p>
        <a href={question.image}>{question.credit}</a>
        <a href="https://unsplash.com/"></a>
      </p>
    </button>
  );
};

export default QuestionBlock;
