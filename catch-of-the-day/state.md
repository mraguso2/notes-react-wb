## Discuss State in React

State is representation of all the data in the application

Each comp can have it's own state but should think about it like one object that holds
all the data

You store all data in master object, state, and whenever you want to change anything on 
the page you edit your state and let react handle the HTML for you.

--You edit the data and react will edit the html--

State is always tied to a component

When you want to update state:
 best practice is to take a copy of your current state and then make changes to it
