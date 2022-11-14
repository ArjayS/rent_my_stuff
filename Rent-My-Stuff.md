# Rent-My-Stuff

Is a site that allows you to rent your items to other members.

## User Stories

-> A User can register an account
-> A User can login an account
-> A User can store their item for rent with details (name, descritption, image, price, location, status (rented or ready for renting (qr code)))
-> A User can generate a QR code for renting the item (This QR code is sent to a link that immediately rents the item)
-> A User can rent an item
-> A User can allow a renter to immediately rent their product by generating a qr code
-> A User can set an item price

## ERD Details

-> The app will have **users**, **items**, **reservations (rent)**, and **item review**

-> A _user_ will have a name, email address, and password

-> An _item_ will have a title, description, costperhour, status (rent or not)
-> An _item_ will have an image
-> An _item_ will need a location (including country, street, city, province, postal code)
-> An _item_ can be either rented or free
-> An _item_ will have an owner which will be one of the registered users.

-> A _reservation_ will have a start date and an end date
-> A _reservation_ will be made by a quest and will be associated with a single reservation

-> A _item_ review will have a message and a rating from 1 to 5
-> A _item_ review will be made by a guest

-> A _user_ can own many _items_

-> An _item_ belongs to one _owner_

-> A _user_ can make many _reservations_

-> A _reservation_ belongs to one _guest_

-> A _user_ can be reviewed by many _guest_

### ERD Chart
