# Temporary dependency resolutions

## `ajv` — review by 2027-01-03

The state-management workspace resolves `ajv` to `^6.14.0` only below
`@angular-devkit/core`. `@datorama/akita` depends on `schematics-utilities`, which
depends on `@angular-devkit/core@8.3.29`; that package pins `ajv` exactly to
`6.12.3`. Dependabot therefore cannot update the vulnerable dependency from the
existing graph.

The resolution selects the latest compatible v6 release (currently 6.15.0) while
preserving the Ajv 6 API expected by Angular DevKit. It is scoped to the
`@angular-devkit/core` dependency path rather than every Ajv consumer in the
workspace. Remove it once the upstream dependency no longer pins the vulnerable
version, or obtain renewed approval before extending the review date.

Validation: frozen Yarn install passed; `yarn why ajv` shows 6.15.0 under
`reactive-akita → @datorama/akita → schematics-utilities → @angular-devkit/core`;
the reactive Akita example build passed on Vite 8.3.2 / TypeScript 7.0.2.

Evidence: [Dependabot security update run 37347837705](https://github.com/nanlabs/frontend-reference/actions/runs/37347837705)
reported `latest-resolvable-version: 6.12.3` and
`lowest-non-vulnerable-version: 6.14.0`.
