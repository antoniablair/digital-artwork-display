import gql from "graphql-tag";

const ARTWORKS_QUERY = gql`  
  query Artworks {
    artworks {
      id
      name
      published
      media {
        name,
        alternativeText,
        caption,
        width,
        height,
        formats,
        hash,
        ext,
        mime,
        size,
        url,
        previewUrl,
        provider,
        provider_metadata,
        created_at,
        updated_at
      }
    }
  }
`;

export default ARTWORKS_QUERY;  