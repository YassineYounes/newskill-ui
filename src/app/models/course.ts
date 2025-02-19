import {Instructor} from "./instructor";

export interface Course {
  level?: string;
  reviewsCount?: number;
  instructor?: Instructor;
  inWishList?: boolean;
  id?: string;
  reviews?: any;
  rating?: number;
  courseLength?: number;
  numberOfLessons?: number;
  sections?: any;
  isCertified?: boolean;
  requirements?: any;
  skills?: any;
  description?: string;
  onSale?: boolean;
  salePercentage?: number;
  price?: number;
  category?: string;
  shortDescription?: string;
  thumbnail?: string;
  title?: string;
  content?: string;
  studentsNumber?: string;
  status?: string;
  lessons?: string;
  time?: string;
}
