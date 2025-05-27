export type KanjiCardProps = {
  id?: string;
  kanji: Kanji;
  accepted?: boolean;
  onAccept: () => void;
  onReject: () => void;
};

export type Kanji = {
  character: string;
  meaning: string;
  kunyomi?: string[];
  onyomi?: string[];
};

export const onAcceptKanjiCard = (kanjicard: KanjiCardProps) => {
  kanjicard.accepted = true;
}

export const onRejectKanjiCard = (kanjicard: KanjiCardProps) => {
  kanjicard.accepted = false;
}

//TODO: settings like number of kanji to learn before doing a quiz (later to be implemented and configured by the user)