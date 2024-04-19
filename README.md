# **Installation**
### Using npm
``` $ npm install --save vue3-beautimodal ```
### Using yarn
``` $ yarn add vue3-beautimodal ```

# **Use**
To use this component is necesary import in your main or index
```
import beautimodal from 'vue3-beautimodal'
app.use(beautimodal)
```
### Basic
```
<b-modal v-model="show" title="My dialog" title-secondary="title optional" />
  <template v-slot:body>
    // Your content
  </template />
</b-modal>
```
*Note: It's necessary to define a &lt;template&gt; named 'body' to place the content; without this, practically nothing would be visible.

In addition to the 'body' slot, beautimodal also features the 'footer' slot. Therefore, if you wish to distribute your content, you can use both slots.
```
<b-modal v-model="show" title="My dialog" />
  <template v-slot:body>
    // Your body content
  </template />
<template v-slot:footer>
    // Your footer content
  </template />
</b-modal>
```
Slot:footer is optional, so you can use only slot:body to display your content.

### Set width and height

Beautimodal includes 'width' and 'height' attributes to set the size of the modal. Although they are optional values, sizing the modal helps to better organize your content.
The values of 'width' and 'height' are of type String, providing you the freedom to use your preferred unit of measurement.
```
<b-modal v-model="show" title="My dialog" width="300px" height="6rem" />
  <template v-slot:body>
    // Your content
  </template />
</b-modal>
```

### Using loader
To use a loader or loading state, we will assign two attributes to the &lt;b-modal&gt;.
```
// use v-model:loading and optionally you can use loader-color for set a color for the loader
<b-modal v-model="show" title="My dialog" v-model:loading="loading" loader-color="#fff" />
  <template v-slot:body>
    // Your content
  </template />
</b-modal>
```

### Using event **close-modal**
At times, it's necessary to execute some logic when the modal is closed. For this, use the custom event 'close-modal' to manage your functions.
```
const eventClose = () => {
  console.log('close modal')
}

<b-modal v-model="show" title="My dialog" v-on:close-modal="eventClose" />
  <template v-slot:body>
    // Your content
  </template />
</b-modal>
```

### Using no-close-button
'no-close-button' helps to hide the modal's close button. If not present, the component will display the button.
```
// Modal with close button hidden
<b-modal v-model="show" title="My dialog" no-close-button />
  <template v-slot:body>
    // Your content
  </template />
</b-modal>
```

### Using close-anywhere
Natively, the only ways to close the modal are by using the close button or by adding a function to a button inside the modal. Therefore, if one wishes to close the modal in another way, there is the possibility of clicking outside the modal's boundaries. Thus, we are not dependent on the other two alternatives.
```
// Now you can click outside the modal, and it will close.
<b-modal v-model="show" title="My dialog" close-anywhere />
  <template v-slot:body>
    // Your content
  </template />
</b-modal>
```

### Using mode dark
Beautimodal supports dark mode; simply add the 'dark' attribute, and the styles will change accordingly.
```
<b-modal v-model="show" title="My dialog" dark />
  <template v-slot:body>
    // Your content
  </template />
</b-modal>
```

# **API**
| Features | Type | Default | Description |
|-----------------|--------------|--------------|---------------------|
|      title      | String | "" | Specifies the title displayed on the modal.
| title-secondary | String | "" | Specifies an optional secondary title displayed on the modal, providing additional context or information.
| v-model:loading | Boolean | false | Controls the loading state of the modal. When set to true, the modal is in loading state and displays a loading indicator. When set to false, the modal exits the loading state.
|     v-model     | Boolean | false | Controls the visibility of the modal. When set to true, the modal is visible. When set to false, the modal is hidden.
| v-on:close-modal| Event | - | Binds a function to execute when the modal is closed.
|      width      | String | 300px | Specifies the width of the modal.
|      height     | String | auto | Specifies the height of the modal.
|   loader-color  | String | #be2626 | Assign the color of the loader displayed when the modal is in a loading state.
| no-close-button | Boolen | false | Prevents the display of the close button on the modal.
|  close-anywhere | Boolen | false | Enables the modal to close when clicking outside of its boundaries.
|  dark | Boolen | false | Specifies whether the modal has a dark theme.
