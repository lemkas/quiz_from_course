import React from "react";
import classes from "./ActiveQuiz.module.css";
import AnswersList from "./AnswersList/AnswersList";

export default function ActiveQuiz(props) {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.QuizQuestion}>
        <span>
          <strong>2.</strong>&nbsp; How are you?
        </span>

        <small>4 из 12</small>
      </p>
      <AnswersList answers={props.answers} />
    </div>
  );
}
