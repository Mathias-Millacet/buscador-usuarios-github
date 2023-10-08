import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserInformation } from "../../api/github";
import { UserProps } from "../../types/user";
import UserCard from "../../components/UserCard/UserCard";
import { GoBackArrow } from "../../components/GoBackArrow/GoBackArrow";

const UserDescription = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const { userName } = useParams();

  useEffect(() => {
    const getUser = async () => {
      const res = await getUserInformation(userName);
      setUser(res);
    };
    getUser();
  }, [userName]);

  return (
    <>
      <GoBackArrow />
      {user && <UserCard {...user} />}
    </>
  );
};

export default UserDescription;
