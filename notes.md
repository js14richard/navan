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
