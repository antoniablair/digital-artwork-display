import gql from "graphql-tag";

export const GET_SLIDESHOWS_QUERY = gql`  
  query Slideshows($slideshowPublishedStatus: Boolean!) {
    slideshows(where:{published:$slideshowPublishedStatus}) {
      id
      published
      name
      creator
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
          provider_metadata
        }
      }
    }
  }
`;

export const GET_SLIDESHOW_QUERY = gql`  
  query Slideshow($id: ID!) {
    slideshow(id: $id) {
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

export default GET_SLIDESHOWS_QUERY;  