import { FriendList } from "components/frend-list/FriendList/FriendList";
import { Profile } from "components/social-profile/Profile/Profile";

import friends from "friend-list/friends.json";
import user from "social-profile/user.json";

export const App = () => {
  console.log(Profile, user);
  return (
    <>
      <FriendList friends={friends} />
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
};
