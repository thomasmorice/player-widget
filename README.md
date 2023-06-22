# Player widget

This is a podcast player project bootstrapped with `create-t3-app`.

## The stack

I tried to keep this project as simple as possible, so the stack that I've used is failry simple.

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)

## Learn More

Almost all the code resides in the `index.tsx` page. Since the layout is straight forward, I've used Tailwind like a prototype tool, to be as efficient as possible. Whenever I get a complicated style, such as linear gradient, I've used the `global.css` file. Again, no need for SCSS here since it's a fairly simple project.

The `Button` component has been created, just to make it a bit more reusable, and for the sake of creating a component :D

I didn't make the player very dynamic, there is just a Tunnelbana jingle sound on loop when you press play, but using the [HTML Audio/Video properties](https://www.w3schools.com/tags/ref_av_dom.asp), we could use the `currentTime` and other things to make the scrubber and timer dynamic, not so complicated.

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!
