# Temporary dependency overrides

- Reviewed: 2026-10-05
- Next review due: 2027-01-03

## `decode-uri-component@0.5.0`

Scope this override to the `react-native-expo-router` and
`react-native-expo-router-with-shared-routes` examples.

Both lockfiles resolved `decode-uri-component@0.2.2` through
`expo-router@57.0.19` → `query-string@7.1.3`. GitHub advisory
[GHSA-vcc3-ghjq-m6fr](https://github.com/advisories/GHSA-vcc3-ghjq-m6fr)
states versions through `0.4.2` are vulnerable to denial of service from
excessive CPU use when decoding malformed percent-encoded input; `0.5.0` is the
first patched release. `query-string` currently accepts only `0.4.x`, so a
scoped npm override is required without moving these Expo SDK 57 examples to
Expo Router 58.

Recheck the upstream dependency range and advisory by 2027-01-03. Remove the
overrides when an Expo SDK 57-compatible dependency update admits the patched
release directly. Renew only with current evidence and a new review date.
