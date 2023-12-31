import React, {useState} from "react";
import {CardType} from "../../types/types";
import TarotCardModal from "./TarotCardModal";
import styles from "./cardStyles.module.css";

interface TarotCardProps {
	card: CardType;
	num: number;
	idx: number;
}

const TarotCard = ({card, num, idx}: TarotCardProps) => {
	const {name, img} = card;

	const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const handleCardClick = () => {
		setIsModalOpen(true);
		setSelectedCard(card);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedCard(null);
	};

	const getTransformStyle = (num: number, idx: number): React.CSSProperties => {
		idx++;
		const curl = Math.pow(num, 2) * 10;
		const deg = idx > 1 ? -idx * 3 : 2;
		let degs = deg / 9;
		// let down = initialDown / 2;
		const initialOver = curl;
		let over = initialOver / 10;

		if (num > 1) {
			degs -= deg / idx;
			// down -= initialDown / (num - 1);
			over -= initialOver / (num - 1);
		}

		const hoverTransform = `translateY(-100px) translateX(${
			-50 + over * -1
		}%) rotate(${degs}deg)`;
		const baseTransform = `translateX(${-50 + over * -1}%) rotate(${degs}deg)`;

		return {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-evenly",
			flexDirection: "column",
			textAlign: "center",
			border: "1px solid black",
			marginLeft: "-175px",
			width: "300px",
			height: "425px",
			color: "black",
			backgroundColor: "white",
			transform: isHovered && !isModalOpen ? hoverTransform : baseTransform,
			borderRadius: "25px",
			zIndex: idx,
			transition: "transform ease 0.7s",
			cursor: "pointer",
		};
	};

	return selectedCard ? (
		<TarotCardModal
			card={card}
			isModalOpen={isModalOpen}
			idx={idx}
			num={num}
			onClose={handleCloseModal}
		/>
	) : (
		<div
			onMouseEnter={() => setIsHovered(!isModalOpen)}
			onMouseLeave={() => setIsHovered(false)}
			style={getTransformStyle(num, idx)}
			className={styles.tarotCard}
			key={idx}
			onClick={handleCardClick}
		>
			<h2 style={{fontSize: "30px", letterSpacing: "5px", fontWeight: 400}}>
				{name}
			</h2>
			<img src={img} style={{width: "180px"}} title={name} alt={name} />
		</div>
	);
};

export default TarotCard;
