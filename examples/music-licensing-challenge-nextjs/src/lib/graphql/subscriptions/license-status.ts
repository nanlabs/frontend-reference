import { gql } from "@apollo/client";

export const LICENSE_STATUS_UPDATED = gql`
  subscription OnLicenseStatusUpdated($id: ID!) {
    licenseChanged(id: $id) {
      id
      artist
      licenseStatus
    }
  }
`;
