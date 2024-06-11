import Massage from "@/../public/service-icons/massage.png";
import Phisio from "@/../public/service-icons/phisio.png";
import Consult from "@/../public/service-icons/consult.png";
import Teip from "@/../public/service-icons/teip.png";
import Manip from "@/../public/service-icons/manipulation.png";
import Real from "@/../public/service-icons/real.png";

export const services = [
  {
    id: 1,
    image: Massage,
    label: "Масаж",
    description:
      "Vestibulum a consectetur justo. Suspendisse ut suscipit magna",
    services: [
      "Лікувальний (оздоровчий) масаж спини",
      "Загальний оздоровчий масаж 90хв.",
      "Загальний оздоровчий масаж 60хв.",
      "Загальний спортивний масаж",
      "Масаж вагітних",
      "Лімфодренажний масаж",
      "Міофасціальний масаж обличчя",
      "Дитячий масаж",
    ],
  },
  {
    id: 2,
    image: Phisio,
    label: "Фізіотерапія",
    description:
      "Vestibulum a consectetur justo. Suspendisse ut suscipit magna",
    services: [
      "Ударно-хвильова терапія 1 зона",
      "Ударно-хвильова терапія 2 зони",
      "Лазеротерапія високої інтенсивності 1 зона",
      "Лазеротерапія високої інтенсивності 2 зони",
      "Постановка вакуумних банок",
      "Міостимуляція",
      "ТЕНС-терапія",
      "Пресотерапія",
      "Магнітотерапія",
      "Голкотерапія",
    ],
  },
  {
    id: 3,
    image: Consult,
    label: "Консультація вертебролога",
    description:
      "Vestibulum a consectetur justo. Suspendisse ut suscipit magna",
    services: ["Консультація первинна", "Консультація повторна"],
  },
  {
    id: 4,
    image: Teip,
    label: "Тейпування",
    description:
      "Vestibulum a consectetur justo. Suspendisse ut suscipit magna",
    services: ["Кінезіотейпування 1 зона", "Кінезіотейпування 2 зони"],
  },
  {
    id: 5,
    image: Manip,
    label: "Маніпуляції",
    description:
      "Vestibulum a consectetur justo. Suspendisse ut suscipit magna",
    services: [
      "Паравертебральні ін'єкції (без препарату)",
      "PRP - терапія (плазмотерапія)",
    ],
  },
  {
    id: 6,
    image: Real,
    label: "Реабілітація дорослих",
    description:
      "Vestibulum a consectetur justo. Suspendisse ut suscipit magna",
    services: ["Індивідуальне заняття з фізичним терапевтом"],
  },
];
