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
  - Base
  - Directives
  - HomeComp
  - tools   
- router
- store
- views
- App.vue
- main.js


### main.js
The main.js file builds the entry point to the Application imports the Vue App, router, store as well as the Copy Directive, which handles the Interaction with the ClipBoard API. On top of that it Inits the store and router as well as exposing the Copy directive to the App, before it gets mounted by Vue.


### app.vue
The app.vue file builds the main render field for the Application and holds the information to render the view as well as the Lopgic for deciding if a Desktop or Mobile view of the programm should be displayed. Since a Vue file is used iot can also hold the Main Styles for the App.

### assets:
The assets folder is in this case mostly empty and unused but there to be used if the Project is extended in the future and to have a full Vue.js structure.

### views & components:
The views folder holds the indevidual views of the Application. The components folder holds the Indevidual parts of the Application that are rather code intesive or reused in Multiple Instances. I choose to fisrst explaine the View and then the corisponding components to make the Documentation not to scattered.

#### HomeView.vue 
The Home view is tasked to handle the rendering of the Initial Matter.js component (src/components/HomeComp/matterJS.vue).

**matterJs.vue**
The matterJs.vue file holds the Main Logic for the Matter.js Physiks engine and handls the drawing of elements onto the Canvase as well as the Implementation of the Physiks based on the Matter.js Package.

Resources for this part of the Code:
- [Matter.js Docs](https://brm.io/matter-js/)
- [The Coding Train: Matter.js Physics on YT](https://www.youtube.com/watch?v=urR596FsU68&list=PLRqwX-V7Uu6bLh3T_4wtrmVHOrOEM1ig_)








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
