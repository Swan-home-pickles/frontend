import chicken from "../../assets/Products/Chicken/chicken_pickle.jpeg";
import natukodi from "../../assets/Products/Chicken/Natukodi-pickle.jpeg";
import chickengoungura from "../../assets/Products/Chicken/chicken_goungra_boneless.jpg";
import chickenboneless from "../../assets/Products/Chicken/chicken bonless.jpg";
import chickenkeema from "../../assets/Products/Chicken/chicken-Keema-Pickle.jpg";

const chickenDetails = [
  {
    images: chicken,
    name: "Chicken Pickle",
    price: {
      "250grms": 250,
      "500grms": 500,
      kg: 1000,
    },
  },
  {
    images: chickenboneless,
    name: "Chicken Boneless",
    price: {
      "250grms": 325,
      "500grms": 650,
      kg: 1300,
    },
  },
  {
    images: chickengoungura,
    name: "Gongura Boneless",
    price: {
      "250grms": 350,
      "500grms": 700,
      kg: 1400,
    },
  },
  {
    images: chickenkeema,
    name: "Chicken Kheema Pickle",
    price: {
      "250grms": 350,
      "500grms": 700,
      kg: 1400,
    },
  },
  {
    images: natukodi,
    name: "Natukodi Pickle",
    price: {
      "250grms": 400,
      "500grms": 800,
      kg: 1600,
    },
  },
];

export default chickenDetails;
