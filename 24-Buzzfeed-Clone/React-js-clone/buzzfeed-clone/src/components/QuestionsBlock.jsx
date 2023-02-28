import { forwardRef } from "react";
import QuestionBlock from "./QuestionBlock";
const QuestionsBlock = (
  {
    quizItem,
    chosenAnswerItems,
    setChosenAnswerItems,
    unansweredQuestionIds,
    setUnansweredQuestionIds,
  },
  ref
) => {
  return (
    <div>
      <h2 ref={ref} id={quizItem.id} className="question-title">
        {quizItem.text}
      </h2>
      <div className="questions-container">
        {
          //console.log("Test:0", quizItem.answers)
          quizItem.questions.map((question, _index) => {
            return (
              <QuestionBlock
                key={_index}
                quizItemId={quizItem.id}
                setChosenAnswerItems={setChosenAnswerItems}
                chosenAnswerItems={chosenAnswerItems}
                unansweredQuestionIds={unansweredQuestionIds}
                setUnansweredQuestionIds={setUnansweredQuestionIds}
                question={question}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default forwardRef(QuestionsBlock);
