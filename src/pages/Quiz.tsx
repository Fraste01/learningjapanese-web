import { useState } from "react";
import { QuizConfig } from "../components/QuizConfig";
import { QuizQuestion } from "../components/QuizQuestion";

export default function QuizPage() {
  //TODO: Get the config from the QuizConfig and then start the quiz
  //TODO: Get the questions from backend.
  const [config,setConfig] = useState<boolean>(false);
  

  const confirmConfig = () => {
    setConfig(true);
  }

  //TODO: At start I need to render the config then start the quiz as soon I get the approve of the config.
  return (
    <div>
    { config ? (<div>
        <QuizQuestion />
      </div>) : (<div>
        <QuizConfig 
          onConfigConfirmed={() => confirmConfig()} numberOfQuestions={0} argoments={[]} selectedArgoments={[]} difficulty={[]} />
      </div>
    )

    }
    </div>
  );
}