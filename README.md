# Shape Css
<hr/>

### Video Demo:  [YT Video Link](https://youtu.be/nARfDWGxfzs) 
### Video Link Clear Text: https://youtu.be/nARfDWGxfzs

### GitHub Pages Version: [Shape CSS GitHub Pages](https://joelstorr.github.io/shape-css-gp/)
### GitHub Pages Link Clear Text: https://joelstorr.github.io/shape-css-gp/


## Description:

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
Note: Since this Project used Vue.js as its core FrontEnd Library I can't go over all of the Files that are added into
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

#### MenueView.vue
This file handles the Disply of the Menue and Dynamically Loads the right amount of Tool Cards into the View

**BaseCardComponent.vue**

This file handles the Dispaly of the Tool Cards and loads the Relevant Icons that get passed into the file via the *MenueView.vue* as well as pointing the Button to the Correct Application Route.

#### ToolView.vue
Dispalys the Tool itself and can loade the needed tool Component based on the Selected Route (router-view). It also contaqines the Logic to point back to the Main Aplication Menue.

It can load any of the Tools that are inside the (src/components/tools/ ... .vue)

**dropShadow.component.vue**

This file containes the Logic to dispaly the Dropshadow Tool and uses the Copy component to hook into the ClipBoard API of the Browser.

**threedtransform.component.vue**

Holds the Logic for the 3D Transform Tool and Loads in the Copy Component to hook into the ClipBoard API of the Browser.

**BaseCopy.component.vue**

 This component uses Copy directive which allows you to copy any peace of String and pass it to be used through the ClipBoard API. Its task is to show the Copy Overlay over the Code Block
 
 **Directives/copy.js**
 Creats a selected aria of screen that can be used via the Clipboard API. i


#### MobileHome.component.vue
This file gets rendered when the user visites the Page from a non Desktop device. The Device Checking is done through the HomeView.vue file.


### Router (index.js)
The router manages the Routing of the SPA application and allows for a more Software like feel.

### Store (index.js)
The store file would allow the user to share properties like color or other info throughout the App. The Structure for that is there but it is not Implemented because there isn't a usecase jet. Intend to add that beond the Scope of the final Project.



## Design
For the Project I choose to have a High Contrast minimalistic design, which would not only allow the user to see the Shape and Shadow propperly inside the Tool section, but also make the Physiks effect stand out more on the Landing Page.





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
