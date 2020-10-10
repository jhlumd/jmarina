# <img src="./public/favicon.ico" alt="Boat Icon" width="55" align="center"> Marina — a mini Rails/React (Hooks) app

## Table of Contents

* [Getting Started](#getting-started)
* [Demo Gif](#demo-gif)
* [Initial Approaches and Decisions](#initial-approaches-and-decisions)
* [Features](#features)
* [Future Directions](#future-directions)

## Getting Started

* Clone the repo
* `bundle install`
* `npm install`
* `rails db:setup`
* `npm start`
* `rails server`

## Demo Gif

![demo][demo_gif]

## Initial Approaches and Decisions

* Models: My first thought was to create separate Models for Boats and Spots. However, thinking about the belongs_to association made me realize that this particular problem did not warrant more than the Boat model.
* Redux: I also considered Redux to manage frontend state, but decided against it since there is only one view. I managed by organizing the code with modular components and passing the props through manually.

## Features

* Backend
  * Boat controller handles updates where two boats swap places if there is already a boat at the spot you want to move it to.
  * Thorough Model validations for `Boat` attributes to make meaningful errors for the UI.
* Front end
  * Uses only function components with React Hooks.
  * Responsive interface and toggleable forms.
  * Boats are dynamically styled with length as the width of the html element along with color.

## Future Directions

* Display model validation errors in the frontend.
* Drag-and-drop interface for moving boats with visual transitions (like Trello).

-[Jaehyuk Lee](mailto:jhlumd@gmail.com)

[demo_gif]: ./app/assets/images/marina_demo.gif "Marina demo gif"
