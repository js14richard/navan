# Notes
*****

## CSS 
****

### 1. Set 1rem value as 10x.

  a. with this we can avoid the math calculations to convert pixels to rem each time. (Ref: https://youtube.com/shorts/ajjIo7C1ylI?si=X35tLkfTK6I1OOg6).
  
  b. Default font size in the browser is 16px. 

  ``` css
  :root {
        font-size: 62.5%; /* Set root font size to 10px (62.5% of 16px) */
      }
  body {
    font-size: 1.6rem; /* Set body font size to 16px. (This is to recover the browser default font size which was overrode in last step) */
  }
  ```

### 2. Create CSS variables

  ``` css
    :root {
    --main-color: #007bff;
  }

  .example {
    color: var(--main-color);
    background-color: var(--main-color);
  }

  ```

### 3. Multiple ways of including SVG in a website. 
  #### Inline SVG:
  ``` html
  <svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  </svg>

  ```

  #### Using the <img> Tag: 
  ``` html
  <img src="image.svg" alt="SVG Image">
  
  ```

  #### Background Image in CSS: 
  ``` css
  .svg-background {
    background-image: url('image.svg');
    /* Additional styling properties */
  }
  
  ```

  #### Object Tag: 
  ``` html
  <object type="image/svg+xml" data="image.svg">
    Your browser does not support SVG
  </object>
  
  ```


### 4. Import css styles from another css files

``` css
@import url(css/utilities.css);
@import url(css/variables.css);

```

### 5. Convert a color image/svg to white or black

  * brightness(0) --> will change the image to black
  * invert(1) --> will convert the colors of image, (black to white and white to black).

  ``` css
  filter: brightness(0) invert(1);
  ```

