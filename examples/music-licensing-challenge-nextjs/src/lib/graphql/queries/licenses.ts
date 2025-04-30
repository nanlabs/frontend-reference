import { gql } from '@apollo/client';

export const GET_LICENSE_STATUS = gql`
  query GetLicenseStatus {
    allLicenseStatus {
      id
      status
    }
  }
`;
