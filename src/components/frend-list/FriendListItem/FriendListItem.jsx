import PropTypes from "prop-types";
import { imageSize } from "constants/imageSize";
import css from "./FriendListItem.module.css";

export const FriendListItem = ({ id, name, avatar, isOnline }) => {
  console.log({ id, name, avatar, isOnline });
  return (
    <li className={css.item} key={id}>
      <span
        className={`${css.status} ${isOnline ? css.online : css.ofline}`}
      ></span>
      <img
        className={css.avatar}
        src={avatar}
        alt={name}
        width={imageSize.sm}
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
