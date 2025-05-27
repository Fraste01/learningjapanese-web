export type QuizProps = {
    id: number;
    question: string;
    answer: string;
    options: string[];
}

export type QuizConfigProps = {
    numberOfQuestions: number; //Minimum of 5 (example)
    argoments: string[]; //Kanji Dictionary Grammar
    selectedArgoments: string[]; //Using the dictionary + grammar + kanji pre-selected (give a list of the approved argoments from the dictionary/kanji/grammar pages)
    difficulty: string[]; //N5 N4 N3 N2 N1
    onConfigConfirmed: () => void;
}

export type QuizPointsProps = {
    kanji: number; //TODO: Add also what kanji I made mistakes to be able to show them to the user and give a feedback
    dictionary: number; //TODO: Add also what dictionary I made mistakes to be able to show them to the user and give a feedback
    grammar: number; //TODO: Add also what grammar I made mistakes to be able to show them to the user and give a feedback
}

//TODO: If I make a quiz, I need to save the points for each type (kanji/dictionary/grammar) for the user
//TODO: If I make too many mistakes on a quiz for an argoment I will automatically be removed from the list of approved argument