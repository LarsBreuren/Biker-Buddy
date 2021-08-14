import ImageInterface from "./image";

export default interface AcfInterface {
  Header?: string;
  left_image?: ImageInterface;
  right_image?: ImageInterface;
  subtitle?: string;
  button_text?: string;
  header2?: string;
  case_image?: ImageInterface;
  grey_title?: string;
  case_text?: string;
  button_link?: string;
  category?: string;
}
