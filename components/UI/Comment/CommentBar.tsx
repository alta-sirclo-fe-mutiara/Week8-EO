import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import styles from "../../../styles/detail.module.css";
import { tokenLocal } from "../../../utils/formatDate";
import {
  MUTATION_CREATE_COMMENT,
  QUERY_USER_BY_ID,
} from "../../../utils/queries";

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
  const tokenId = tokenLocal("users");
  const [textSearch, setTextSeach] = useState<string>("");
  const [createComment] = useMutation(MUTATION_CREATE_COMMENT);
  const { loading, data } = useQuery(QUERY_USER_BY_ID, {
    variables: { id: tokenId },
    context: {
      headers: {
        Authorization: `Bearer ` + token,
      },
    },
  });

  const handleChange = (e: any) => {
    setTextSeach(e.target.value);
  };
  const handleCommentBar = () => {
    setTextSeach(".............");
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
      setIsComment([...isComment, data.data.createComment]);
    });
  };

  if (loading) {
    return <p>Loading....</p>;
  }

  const thumbImage = data.usersByID.avatar || null;

  return (
    <div className="d-flex flex-row gap-4">
      <div className="col-1">
        <img
          src={thumbImage ? thumbImage : "/image/image-default.webp"}
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
