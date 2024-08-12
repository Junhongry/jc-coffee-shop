## Junhong & Cindy's Cafe
- Developed using Vite, React, Tailwind.
- Note to dev and self: Tailwind is mobile-design first. Meaning classname stylings with media break point are to specify what styling applies to what media sizes.
Breakpoint prefix	Minimum width	CSS
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }
- For example: className="text-white sm: text-black": text will be default white, but on screens larger than 640px then the text will be black. 


## Feature Ideas:

- Leading up to the event, the home page will be a count down timer/ rsvp 
- Need to design the home page
- Coffee menu with picture of drinks (pictures or drawn?)
- Menu: Cards with title and photo only? react card style
- Explanation of each drink when clicked. Maybe expanded card? 

Stretch: 
- Ordering system built in 
- Build in silly coffee/matcha personality quiz with the cute characters  ( need someone to draw them)

## Notes:


## Deployment:
 Deployment on Github pages. Under 1 GB, it will be free and can be hosted directly on the repo. 


## Install

```bash
npm install
```

> You can make sure you are running Node.js 18 with `nvm`. Run `nvm use` to set the Node.js 18 in this project.

## Develop

```bash
npm run dev
```

## Build

```bash
npm build
```

Preview:

```bash
npm run preview
```
