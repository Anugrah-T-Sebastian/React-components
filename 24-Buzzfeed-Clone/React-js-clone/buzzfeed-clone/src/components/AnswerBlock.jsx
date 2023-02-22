const AnswerBlock = ({ answer }) => {
  return (
    <div className="answer-block">
      <img src={answer.image} alt={answer.alt} />
      <h3>{answer.text}</h3>
      <p>
        <a>{answer.credit}</a>
        {" to "}
        <a href="https://unsplash.com/">Unsplash</a>
      </p>
    </div>
  );
};

export default AnswerBlock;
