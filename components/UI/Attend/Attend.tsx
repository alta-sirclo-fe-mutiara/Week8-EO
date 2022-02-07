import styles from "../../../styles/detail.module.css";

type Props = {
  image: any;
};
const Attend: React.FC<Props> = ({ image }) => {
  const { avatar } = image;
  return (
    <img
      src={avatar ? avatar : "/image/image-default.webp"}
      alt="Picture of our Logo"
      className={`${styles["img-attend"]} rounded-circle`}
    />
  );
};

export default Attend;
