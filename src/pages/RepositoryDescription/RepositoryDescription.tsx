import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getRepositoryInformation } from "../../api/github";
import { ReposityProps } from "../../types/repository";
import RepositoryCard from "../../components/RepositoryCard/RepositoryCard";

const RepositoryDescription = () => {
  const [repositoryInformation, setRepositoryInformation] =
    useState<ReposityProps | null>(null);
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
      {repositoryInformation && <RepositoryCard {...repositoryInformation} />}
    </>
  );
};

export default RepositoryDescription;
