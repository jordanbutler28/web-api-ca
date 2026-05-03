import React from "react";
import { getMovieCredits } from "../api/tmdb-api";
import PageTemplate from '../components/templateCastListPage';
import { useQuery } from '@tanstack/react-query';
import { useParams } from "react-router";
import Spinner from '../components/spinner';

const CastListPage = (props) => {

  const { id } = useParams();

  const { data, error, isPending, isError  } = useQuery({
    //React Query will cache result under this key
    queryKey: ['movieCredits', {id}],
    //function that fetches the data
    queryFn: getMovieCredits,
    //getMovieCreits(id)
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  //extracts cast array from tmdb response
  const cast = data.cast;

  return (
    <PageTemplate
      title="Cast List"
      casts={cast}
    />
  );

};
export default CastListPage;

