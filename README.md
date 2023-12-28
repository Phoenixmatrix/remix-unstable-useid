# Repo with repo of unstable useId in Remix 2.4.X

- Install dependencies with pnpm
- Run the app: `pnpm dev`
- Open the devtools and look at the console
- Navigate to the bug route: [http:.//localhost:3000](http://localhost:3000/bug)

> Note, the issue seems to only happen in a file that uses `useId`, `useFetcher` and includes a component that itself uses `useId`

Notice the hydration issue

![image](https://github.com/Phoenixmatrix/remix-unstable-useid/assets/1071928/5f55182e-c87a-4093-b6b8-0a4c23f95d7e)
