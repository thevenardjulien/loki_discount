<?php

    // vente de matériel d'occasion

//// Users
// Name : string
// Email : string
// Password : string
// Birthdate : date
// Phone : string
// Rating : integer

//// Addresses
// Country : string
// ZipCode : string
// City : string
// Street : string
// User : User - ForeignKey

//// Products
// Title : string
// Slug : string
// Description : string
// Image : string
// Price : integer
// Condition: enum('used', 'good', 'excellent', 'new')
// isSold : boolean
// Seller : User - ForeignKey

/// Table intermédiaire product_category
// Product : Product - ForeignKey
// Category : Category - ForeignKey

//// Categories
// Name : string
// Slug : string
// Description : string
// Image : string

//// Orders
// User : User - ForeignKey
// Status : enum('pending', 'paid', 'shipped', 'delivered', 'canceled')
// PaymentMethod : enum('credit card', 'paypal')

//// OrderItems
// Order : Order - ForeignKey
// Product : Product - ForeignKey
// Quantity : integer
// UnitPrice : integer

//// Carts
// User : User - ForeignKey

//// CartItems
// Cart : Cart - ForeignKey
// Product : Product - ForeignKey
// Quantity : integer