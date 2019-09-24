# Formerly: A WISYWIG Bootstrap Form Creator
Formerly allows easy, detailed creation and customization of Bootstrap Forms. [Try it out!](https://kaylathomas.github.io/Formerly-WYSIWYG-Bootstrap-Form-Creator/)

Table of Contents:
------------------
- Features
- Coming Soon
- Technologies
- File Structure
- Contribute
- Support

Features
--------

Formerly is meant to be useful to both the average non-technical employee needing to quickly make a form, or the more experienced developer . Forms can be created within seconds using the left toolbar. 

Create forms with almost every form input type available to Bootstrap 4:
- Text input fields
- Checkboxes
- Radio Buttons
- Select Fields
- Multiple Select Fields
- Text Areas
- Drag and drop created form elements

Other features/customization options include:

- Form background color
- Label font-weight and text-alignment
- Generation of usable, clean HTML Features
- Dark mode!

Coming Soon
--------

**Development Mode!**

Development Mode is a work in progress. It allows users to edit form input attributes in-browser, such as IDs, ARIA labels, maximum amount of characters, input type, etc.

Technologies
------------

Formerly was created with **HTML**, **CSS**, **JavaScript**, **jQuery**, and of course, **Bootstrap 4**.

File Structure
--------------

**Bootstrap 4** and **jQuery** have been imported via CDN.
  - **bootstrap-form-creatorJS/**
    - **jquery-ui/**
      - **jquery-ui.js** -> Contains sortable script that gives sorting functinoality to each form input.
    - **js/** 
      - **addInputs.js** -> All logic for adding and deleting each kind of input.
      - **formChanges.js** -> Logic for populating "Copy Your HTML" modal and changing form background color.
    - **css/**
      - **style.css** -> All custom styles not included with Bootstrap 4.
    - **index.html** -> All markup for the app.
    

Contribute
----------

If you would like to contribute to this project, feel free to read through the **File Structure** section to get an idea of where everything is, and take a look at the "Issues" tab. I plan on building a suite of similar apps assiting in the ease of use and customization of bootstrap in the future, so be sure to follow this account for updates if this is something that interests you.


Support
-------

If you are having any issues with the app, please let me know!
I can be contacted at kaylathomas.dev@gmail.com

License
-------

The project is licensed under the BSD license.
