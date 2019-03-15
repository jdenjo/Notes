import React from "react";
import QuestionDetails from "./QuestionDetails";
import AnswerDetails from "./AnswerDetails";
import "../styles/page.css"

// Composing components together
// Demo: Question Show Page
function QuestionShowPage() {
    return (
      <main>
        <QuestionDetails
          title="What is your favourite colour?"
          body="Red, green, blue, magenta, etc."
          author={{ full_name: "Bridge Troll" }}
          view_count={100}
          created_at={new Date()}
        />
        <h2>Answers</h2>
        <AnswerDetails
        body = "Red."
        author = {{ full_name: "Kyle So" }}
        created_at={new Date()}      
        />
  
        <AnswerDetails
        body = "Red."
        author = {{ full_name: "Kyle So" }}
        created_at={new Date()}      
        />
  
        <AnswerDetails
        body = "Red."
        author = {{ full_name: "Kyle So" }}
        created_at={new Date()}      
        />
  
        
      </main>
    );
  }

  export default QuestionShowPage;