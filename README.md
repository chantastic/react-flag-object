# WIP WARNING

This is such a niave implementation, it's shameful. It works but like, there's a good chance you don't want to use it. Consider yourself warned.

One of the biggest shortcoming is that modifiers can't be set on the root component and trickle down to child (not-owned) components. This will be resolved in a React@0.14 release.

# React Flag Object

A React.js Flag Object implementation, using inline styles.

The Flag Object was engineered by Harry Roberts (@csswizardry) and detailed here: http://csswizardry.com/2013/05/the-flag-object/

## Demo & Examples

Live demo: [chantastic.github.io/react-flag-object](http://chantastic.github.io/react-flag-object/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-flag-object is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-flag-object.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-flag-object --save
```


## Usage

__EXPLAIN USAGE HERE__

```
import { Flag, Body, Image, Img } from 'react-flag-object';

var App = React.createClass({
  render () {
    return (
      <Flag>
        <Image>
          <Img src="http://0.gravatar.com/avatar/d56966cb85dc4153ceeec7ca0bdb568e" alt="chantastic" />
        </Image>

        <Body>
          I've spent most of my career focused on taming styles in CSS. I saw it as a problem that would never be solved. Then, #reactjs happened.
@chantastic 7 hours ago
        </Body>
      </Flag>
    );
  }
});
```

### Notes

One of the biggest shortcoming is that modifiers can't be set on the root component and trickle down to child (not-owned) components. This will be resolved in a React@0.14 release.

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

__PUT LICENSE HERE__

Copyright (c) 2015 Michael Chan.

