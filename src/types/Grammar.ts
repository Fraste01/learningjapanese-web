export type GrammarProps = {
  type: string,
  name: string,
  description: string,
  accepted?: boolean,
  onAccept: () => void,
  onReject: () => void
};

export const onAcceptGrammar = (grammar: GrammarProps) => {
  grammar.accepted = true;
}

export const onRejectGrammar = (grammar: GrammarProps) => {
  grammar.accepted = false;
}

//TODO: settings like number of grammar to learn before doing a quiz (later to be implemented and configured by the user)