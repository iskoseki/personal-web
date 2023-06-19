import img4 from "../assets/images/projects-Images/chileTur.png";
import img3 from "../assets/images/projects-Images/full-copec.png";

export interface Project {
  id: number;
  name: string;
  img?: string;
  url: string;
}
export const Projectos: Project[] = [
  {
    id: 929213731,
    name: "Chiletur",
    img: img4,
    url: "https://www.chiletur.cl/",
  },
  {
    id: 29731,
    name: "Full Copec",
    img: img3,
    url: "https://www.chiletur.cl/",
  },
];
