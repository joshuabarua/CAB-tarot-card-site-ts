export interface CardType {
	type: string;
	name_short: string;
	name: string;
	value: string;
	value_int: number;
	meaning_up: string;
	meaning_rev: string;
	desc: string;
	suit?: string;
	img?: string;
}

export interface CardResponse {
	nhits: number;
	cards: CardType[];
}

export interface CardsJSON {
	cards: CardJSONImageType[];
}

export interface CardJSONImageType {
	name: string;
	number: string;
	img: string;
}

export type User = boolean;

export interface ChatMsg {
	author: string;
	date: number;
	text: string;
}

export interface ChatMsgWithId extends ChatMsg {
	id: string;
}
