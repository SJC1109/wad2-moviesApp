import React from "react";
import PageTemplate from "../components/templateMoviePage";
import WordForm from '../components/wordForm'

const WordFormPage = props => {

  return (
      <PageTemplate movie={props.location.state.movie}>
          <WordForm movie={props.location.state.movie} />
      </PageTemplate>
  );
};
export default WordFormPage;