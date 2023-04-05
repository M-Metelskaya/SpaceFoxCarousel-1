export interface ICardFox {
  id: number;
  name: string;
  description: string;
  img: string;
  gender: string;
  color: string;
  age: string;
  location: string;
  profession: string;
  specialization: string;
  population: number;
  flights: number;
  stars: number;
  energy: number;
  fav_genre: string;
  progress: {
    param1: number;
    param2: number;
    param3: number;
  };
}

export const cardFoxData: ICardFox[] = [
  {
    id: 0,
    name: "Space Fox",
    description:
      "Surgical specialist in the field of medicine, who is distinguished by high precision in his work.",
    img: "images/fox_card1.png",
    gender: "Male",
    color: "White",
    age: "5",
    location: "Earth",
    profession: "Healer",
    specialization: "Surgeon",
    population: 1000,
    flights: 21,
    stars: 583,
    energy: 1237,
    fav_genre: "Resourcefulness",
    progress: {
      param1: 20,
      param2: 80,
      param3: 10,
    },
  },

  {
    id: 1,
    name: "Space Fox",
    description:
      "She has a degree in biochemistry, is distinguished by high intelligence and prudence.",
    img: "images/fox_card2.png",
    gender: "Female",
    color: "Red",
    age: " 7",
    location: "Earth",
    profession: "Scientist",
    specialization: "Biochemist",
    population: 300,
    flights: 9,
    stars: 480,
    energy: 1900,
    fav_genre: "Discipline",
    progress: {
      param1: 10,
      param2: 15,
      param3: 90,
    },
  },
  {
    id: 2,
    name: "Space Fox",
    description:
      "Has a fast response and excellent health Successfully completed a pilot training course.",
    img: "images/fox_card4.png",
    gender: "Male",
    color: "Red",
    age: "8",
    location: "Earth",
    profession: "Military",
    specialization: "Pilot",
    population: 1500,
    flights: 15,
    stars: 461,
    energy: 2007,
    fav_genre: "Tactics",
    progress: {
      param1: 90,
      param2: 80,
      param3: 20,
    },
  },
  {
    id: 3,
    name: "Space Fox",
    description:
      "Successfully completed a training course for a young fighter and was awarded a medal for courage.",
    img: "images/fox_card3.png",
    gender: "Female",
    color: "White",
    age: "4",
    location: "Earth",
    profession: "Military",
    specialization: "Infantryman",
    population: 550,
    flights: 14,
    stars: 349,
    energy: 2500,
    fav_genre: "Courage",
    progress: {
      param1: 50,
      param2: 30,
      param3: 70,
    },
  },
];
