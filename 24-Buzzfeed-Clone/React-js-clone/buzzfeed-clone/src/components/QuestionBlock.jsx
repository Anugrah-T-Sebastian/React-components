const QuestionBlock = ({
  question,
  chosenAnswerItems,
  setChosenAnswerItems,
  unansweredQuestionIds,
  setUnansweredQuestionIds,
  quizItemId,
}) => {
  const handleClick = () => {
    setChosenAnswerItems((prevState) => [...prevState, question?.text]);
    setUnansweredQuestionIds(
      unansweredQuestionIds.filter((id) => id != quizItemId)
    );
  };

  const validPick =
    !chosenAnswerItems?.includes(question?.text) &&
    !unansweredQuestionIds?.includes(quizItemId);

  return (
    <button
      className="question-block"
      onClick={handleClick}
      disabled={validPick}
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
