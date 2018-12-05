## Veg4Feb

To run locally, (see package.json scripts)
```
yarn dev
```

## Info
Used this starter https://github.com/LekoArts/gatsby-starter-portfolio-cara

### Adding new features/plugins

You can add other features by having a look at the official [plugins page](https://www.gatsbyjs.org/docs/plugins/).

### Building

```
npm run build
```
Copy the content of the ``public`` folder to your webhost or use a website like Netlify which automates that for you.

Make sure to use the right build command in your build settings e.g. if you use Netlify!
Per default Netlify sets it to `gatsby build` but you have to use `yarn run build` to run postcss before building the Gatsby site.

## Configuration

You have multiple options to configure this project.

1) Use the `config/website.js` to configure data passed to the SEO component and other parts of the Gatsby site:

2) Use the `tailwind.js` file to configure TailwindCSS. Their [documentation](https://tailwindcss.com/docs/configuration) explains it step-by-step.

3) Modify the files in the `src/styles` directory.

4) You can also place the icons somewhere else on the page, modify their animation and hide them on smaller screens:

```JSX
  <SVG icon="triangle" className={hidden} width={48} stroke={colors.orange} left="10%" top="20%" />
  <SVG icon="hexa" width={48} stroke={colors.red} left="60%" top="70%" />
  <SVG icon="box" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
```

- For `icon`, you have the options: `triangle, circle, arrowUp, upDown, box, hexa`
- If you want the SVG to be hidden on mobile view, add `className={hidden}` to the SVG component
- You can define the width via the TailwindCSS width [option](https://tailwindcss.com/docs/width)
- The colors get defined via the TailwindCSS color [option](https://tailwindcss.com/docs/colors)
    - Please note that you will either have to define the color in `stroke` **or** `fill` depending on the icon. For reference, have a look at the currently used SVGs
- The options `left` and `top` position the icon relatively to its parent container
- You can also wrap the SVGs with `<UpDown />` or `<UpDownWide />` to animate them

### Typography

Instead of relying on Google's CDN to host its fonts, this site self-hosts the fonts and therefore benefits from increased performance. The installed fonts can be found in `src/pages/index.jsx`:

```JSX
import 'typeface-cantata-one';
import 'typeface-open-sans';
```

This starter uses [typefaces](https://github.com/KyleAMathews/typefaces) by Kyle Mathews. Have a look at the repository if you want to install & use other fonts.

You'll also need to configure `fonts` in `tailwind.js` to reflect the changes. You then can use the fonts with `font-sans` and `font-serif`.
