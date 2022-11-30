# Shape Css
<hr/>

### Video Demo:  *url here* 
### GitHub Pages Version: *url here*
### Description:

#### Core Project Idea:
The main Project Idea is a set of tools for creating CSS effects in a visual way and easy to use whay. The app can then retuen a String back to the user that containes the Apropiate code  snipped. As an added Bonuse I build a fun litle Physik effect for a catchier Presentastion into the Landing / frontpage of the App.

#### Overall Project Layout
The Implememnted tooles are a Visual Transfrom tool that allows the user to Apply a 3D transform to a shape. 
(See: https://joelstorr.github.io/shape-css-gp/tools/threed-transform)

The Seconde tool  I build is a Shadow generator that can applie the Box Shadow Property on an element. 
(See: https://joelstorr.github.io/shape-css-gp/tools/drop-shadow)

Both of the Tools contain the Ability to not only represent the current Properties on the screen, when they are changed but also to Interact with the Clipboard API.

The Landing Page for the Project containes a Libary called Matter JS that allows you to draw shapes into a HTML Canvas and to calculate there Phisical behavior on set canvas. 
(See: https://joelstorr.github.io/shape-css-gp/)

In Termes of Mobile Responsivness, the Page will detect Devices outside the Desktop realm and will tell the prompt the user to use a Desktop to access the Application. On the Screen I provide a Link to the Page, that can be copied over to the CLipBoard to be send to your computer.


## Project Structure

```
Note: Since this Project used Vue.js as its core FrontEnd Libary I can't go over all of the Files that are added into
the Project through the Vue Libaray,
but I will provide an overview through the Project and I will do my best,
to highlight and explain the Files that live inside the src folder and that I created.
```

Entry Point to the Project:

src

- assets
- components
- router
- store
- views
- App.vue
- main.js


### main.js


# Clone and Setup Guide 

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
