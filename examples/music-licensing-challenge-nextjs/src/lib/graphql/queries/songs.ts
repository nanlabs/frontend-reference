import { gql } from "@apollo/client";

export const GET_SONG_BY_ID = gql`
  query GetSongById($id: ID!) {
    song(id: $id) {
      id
      title
      artist
      licenseStatus
    }
  }
`;
