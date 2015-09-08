import React from 'react';
import { Flag, Body, Image, Img } from 'react-flag-object';

var App = React.createClass({
  render () {
    return (
      <div>
        <section>
          <h2> Defaults </h2>

          <Flag>
            <Image>
              <Img src="http://0.gravatar.com/avatar/d56966cb85dc4153ceeec7ca0bdb568e" alt="chantastic" />
            </Image>

            <Body>
              I've spent most of my career focused on taming styles in CSS. I saw it as a problem that would never be solved. Then, #reactjs happened.
    @chantastic 7 hours ago
            </Body>
          </Flag>
        </section>

        <section>
          <h2> top </h2>

          <Flag>
            <Image bottom>
              <Img src="http://0.gravatar.com/avatar/d56966cb85dc4153ceeec7ca0bdb568e" alt="chantastic" />
            </Image>

            <Body top>
              I've spent most of my career focused on taming styles in CSS. I saw it as a problem that would never be solved. Then, #reactjs happened.
    @chantastic 7 hours ago
            </Body>
          </Flag>
        </section>

        <section>
          <h2> bottom </h2>

          <Flag>
            <Image bottom>
              <Img src="http://0.gravatar.com/avatar/d56966cb85dc4153ceeec7ca0bdb568e" alt="chantastic" />
            </Image>

            <Body bottom>
              I've spent most of my career focused on taming styles in CSS. I saw it as a problem that would never be solved. Then, #reactjs happened.
    @chantastic 7 hours ago
            </Body>
          </Flag>
        </section>

        <section>
          <h2> reverse </h2>

          <Flag>
            <Body>
              I've spent most of my career focused on taming styles in CSS. I saw it as a problem that would never be solved. Then, #reactjs happened.
    @chantastic 7 hours ago
            </Body>

            <Image reverse>
              <Img src="http://0.gravatar.com/avatar/d56966cb85dc4153ceeec7ca0bdb568e" alt="chantastic" />
            </Image>
          </Flag>
        </section>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
