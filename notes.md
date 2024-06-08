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

### 6. Anitmation fill mode property
  * The animation-fill-mode property in CSS specifies how an element should be styled before and after the animation is executed. 

  #### none: 
  * This is the default value. The element will not retain any styles from the animation before or after it is executed. It will revert to its original state.

  #### forwards:
  * After the animation ends (or the last keyframe is reached), the styles of the element will be retained as they were at the last keyframe. In other words, the final keyframe's styles will persist on the element.

  #### backwards:
  * Before the animation begins (or before the first keyframe is reached), the styles of the element will be set to the values specified in the first keyframe. This can help ensure that the initial state of the animation is visible even before the animation starts playing.

  #### both:
  * This combines the effects of both forwards and backwards. The element will retain the styles of the first keyframe before the animation starts and the styles of the last keyframe after the animation ends.


### 7. Display : none 
  * If a image/video.. are set to {display: none} , that elements won't be rendered/downloaded from network. 
  * Ex: If a large is image is set to {display:none} for smaller screens, the larger image won't be downloaded when the webpage is loaded. 


### 8. rel = "preload"
  * rel="preload" in HTML is like telling the browser to grab certain files before they're officially requested, making your website faster. 
  * Use preload for critical resources that are necessary for the current page's rendering or functionality.

  ``` html
  <link rel="preload" href="styles.css" as="style" crossorigin>

  <link rel="preload" href="script.js" as="script" crossorigin>

  <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" as="style" crossorigin>
  ```

### 9. Crossorigin
  * The crossorigin attribute in HTML is used with certain elements, like script and link, to specify how the resource should be handled if it's loaded from a different origin (domain) than the one serving the HTML document.
  * If crossorigin is not specified, or if its value is an empty string, the resource is treated as same-origin, meaning it must come from the same domain as the HTML document.
  #### anonymous: 
    * Indicates that the resource should be fetched without sending any credentials along with the request, such as cookies or HTTP authentication. This is useful for resources that are intended to be publicly accessible.
  #### use-credentials:
    * Indicates that the resource request should include credentials like cookies, client certificates, or HTTP authentication credentials. This is typically used for resources that require authentication or authorization.

  ``` html
  <script src="https://example.com/script.js" crossorigin="anonymous"></script>

  <img src="https://cdn.example.com/protected-image.jpg" alt="CDN Protected Image" crossorigin="use-credentials">
  ```

### 10. rel = "prefetch"  
  * Prefetching in HTML uses the <link> element with rel="prefetch". It fetches resources like images or stylesheets before they're needed, improving page load times.
  * Use prefetch for non-critical resources that might be needed for subsequent pages or user interactions, improving the overall browsing experience by reducing latency. 
  * Mostly used to get the resources from same domain.

  ``` html
  <link rel="prefetch" href="styles.css">
  ```



