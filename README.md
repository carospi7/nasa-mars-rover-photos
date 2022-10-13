This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Mars Rover Photos

The API [Mars-photos](https://api.nasa.gov/mars-photos) is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers.

Along with querying by earth or sol date, results can also be filtered by the camera with which it was taken and responses will be limited to 25 photos per call with a dynamic loading.