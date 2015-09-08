## CHANGELOG

### 0.0.1

Niave first implementation. All styles are from Harry's (@csswizardry) post on the [Flag Object](http://csswizardry.com/2013/05/the-flag-object/).

Things work as expected with one obvious shortcoming, modifiers cannot be applied to root element and passed down as to the child elements. This is largely due to React 0.13s strange context implementation. In 0.14, parent-based context should allow for the `Flag` root component to take modifier props for all child elements.
