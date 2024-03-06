<div style="display: flex; flex-direction: column; align-items: center; gap: 10px">

![favicon](/public/icon.svg)

# mirfandev.tech

</div>

## My Personal Website

My first portofolio personal web built with [Next.js](https://nextjs.org/) and deployed with [Vercel](https://vercel.com/)

## Screenshoot

![screenshoot](/src/app/assets/mirfan-page.png)

### Built with

- Next.js
- CSS module
- React icons

### What I learned

Apliying active link on navigation bar based on section id can be done with location.hash

```js
useEffect(() => {
  setLocation(window.location.hash);
}, []);
```

Applying active link on navigartion bar on scrolling can be done with defining id for each section and using intersectionObserver web API

```js
useEffect(() => {
  let sections = document.querySelectorAll("section");
  // console.log(sections);
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
}, []);
```

In this project i done experimentation with Next.js with CSS module for styling. This approach is great for custom styling rules without worried about naming class atribute.

### Continued Development

For future fix and update I can adding future project to put on this site and refine design and animation.
