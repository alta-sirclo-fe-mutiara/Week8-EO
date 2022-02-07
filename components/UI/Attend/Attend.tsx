import styles from "../../../styles/detail.module.css";

type Props = {
  image: string | null;
};
const Attend: React.FC<Props> = ({ image }) => {
  return (
    <img
      src={image ? image : "/image/image-default.webp"}
      alt="Picture of our Logo"
      className={`${styles["img-attend"]} rounded-circle`}
    />
  );
};

export default Attend;
