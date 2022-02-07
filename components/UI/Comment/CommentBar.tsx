import { useMutation } from "@apollo/client";
import { useState } from "react";
import styles from "../../../styles/detail.module.css";
import { MUTATION_CREATE_COMMENT } from "../../../utils/queries";

type CommentProps = {
  token: string;
  eventId: number;
  setIsComment: any;
  isComment: any;
};
const CommentBar: React.FC<CommentProps> = ({
  token,
  eventId,
  setIsComment,
  isComment,
}) => {
  const [textSearch, setTextSeach] = useState<string>("");
  const [createComment] = useMutation(MUTATION_CREATE_COMMENT);
  const handleChange = (e: any) => {
    setTextSeach(e.target.value);
  };
  const handleCommentBar = () => {
    setTextSeach("");
    createComment({
      variables: {
        eventId,
        comment: textSearch,
      },
      context: {
        headers: {
          Authorization: `Bearer ` + token,
        },
      },
    }).then((data) => {
      // console.log(data.data.createComment);
      setIsComment([...isComment, data.data.createComment]);
    });
  };
  return (
    <div className="d-flex flex-row gap-4">
      <div className="col-1">
        <img
          src="https://www.markuptag.com/images/image-six.jpg"
          alt="Picture of our Logo"
          className={`${styles.img}  rounded-circle`}
        />
      </div>
      <div className="d-flex flex-column gap-2 col-10 ps-4">
        <textarea
          className="form-control"
          placeholder="Add Comment"
          onChange={handleChange}
        />
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-green text-white"
            onClick={handleCommentBar}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentBar;
