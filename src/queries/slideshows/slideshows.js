import gql from "graphql-tag";

const SLIDESHOWS_QUERY = gql`  
  query Slideshows {
    slideshows {
        id
        published
        name
        creator
        created_at
        updated_at
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
  }
`;

export default SLIDESHOWS_QUERY;  