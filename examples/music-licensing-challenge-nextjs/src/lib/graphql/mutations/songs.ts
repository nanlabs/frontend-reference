import { gql } from "@apollo/client";

export const UPDATE_SONG_LICENSE_STATUS = gql`
  mutation UpdateSongLicenseStatus($id: ID!, $licenseStatus: LicenseStatusEnum) {
    updateSong(id: $id, licenseStatus: $licenseStatus) {
      id
      licenseStatus
    }
  }
`;
