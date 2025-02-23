import {Instructor} from "./instructor";

export interface Course {
  createdAt?: string;
  updatedAt?: string;
  isFree?: boolean;
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
  categoriesName?: any;
  shortDescription?: string;
  thumbnail?: string;
  title?: string;
  content?: string;
  enrollmentsCount?: number;
  status?: string;
  lessons?: string;
  time?: string;
}
