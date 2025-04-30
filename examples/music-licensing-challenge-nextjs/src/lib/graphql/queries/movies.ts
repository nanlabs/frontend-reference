import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query GetAllMovies {
    allMovies {
      id
      title
      year
      director
      description
      poster
      genres {
        id
        name
      }
      scenes {
        id
        movieId
        sceneNumber
        description
        tracks {
          id
          trackType
          songs {
            id
            title
            artist
            licenseStatus
          }
        }
      }
    }
  }
`;

export const GET_MOVIE_BY_ID = gql`
  query GetMovieById($id: ID!) {
    movie(id: $id) {
      id
      title
      year
      director
      description
      poster
      genres {
        id
        name
      }
      scenes {
        id
        movieId
        sceneNumber
        description
        tracks {
          id
          trackType
          songs {
            id
            title
            artist
            licenseStatus
          }
        }
      }
    }
  }
`;
