import { QuizConfig } from "../components/QuizConfig";

export default function QuizPage() {

  const confirmConfig = () => {
    alert('Config Confirmed');
  }

  //TODO: At start I need to render the config then start the quiz as soon I get the approve of the config.
  return (
    <div>
      <QuizConfig 
        onConfigConfirmed={() => confirmConfig} numberOfQuestions={0} argoments={[]} selectedArgoments={[]} difficulty={[]} />
    </div>
  );
}