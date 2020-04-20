import React from "react";  
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, id, publishedStatuses }) => {  
  const { data, loading, error } = useQuery(query, {
    variables: { id: id, publishedStatuses: publishedStatuses }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query; 