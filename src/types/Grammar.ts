export type GrammarProps = {
  id: number,
  type: string,
  name: string,
  description: string,
  accepted?: boolean,
  onAccept: () => void,
  onReject: () => void
};

//TODO: settings like number of grammar to learn before doing a quiz (later to be implemented and configured by the user)