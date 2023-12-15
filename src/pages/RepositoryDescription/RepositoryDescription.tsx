import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getRepositoryInformation } from "../../api/github";
import { RepositoryProps } from "../../types/repository";
import RepositoryCard from "../../components/RepositoryCard/RepositoryCard";
import { GoBackArrow } from "../../components/GoBackArrow/GoBackArrow";

const RepositoryDescription = () => {
  const [repositoryInformation, setRepositoryInformation] =
    useState<RepositoryProps | null>(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const repositoryUrl = queryParams.get("url");

  useEffect(() => {
    const getRepository = async () => {
      const res = await getRepositoryInformation(repositoryUrl);
      setRepositoryInformation(res);
    };
    getRepository();
  }, [repositoryUrl, location]);

  return (
    <>
      <GoBackArrow />
      {repositoryInformation && <RepositoryCard {...repositoryInformation} />}
    </>
  );
};

export default RepositoryDescription;
