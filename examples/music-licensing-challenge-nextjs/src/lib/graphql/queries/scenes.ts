import { gql } from "@apollo/client";

export const GET_SCENES = gql`
  query GetAllScenes {
    allScenes {
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
`;

export const GET_SCENE_BY_ID = gql`
  query GetSceneById($id: ID!) {
    scene(id: $id) {
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
`;
