const express = require('express');
const authRoutes = require('./auth-routes');

const router = express.Router();
router.use('/auth', authRoutes);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id
 *         email:
 *           type: string
 *           description: The email id of user
 *         secondary_email:
 *           type: string
 *           description: The alternate email id of user
 *         phone_number:
 *           type: string
 *           description: The phone number of the user
 *         type:
 *           type: string
 *           description: The type of the user (Admin -> A, Back-Office -> B, Customer -> C)
 *         first_name:
 *           type: string
 *           description: The first name of the user
 *         last_name:
 *           type: string
 *           description: The last name of the user
 *         password:
 *           type: string
 *           description: The encrypted password of the user. IT SHOULD NOT BE INCLUDED IN RESPONSE DATA, AS IT BECOMES A SECURITY RISK !
 *         address:
 *           type: string
 *           description: The address of the user
 *         image:
 *           type: string
 *           description: The URI leading to the user image.
 *         status:
 *           type: string
 *           description: The user account status (1 -> Active, 0 -> Inactive).
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the item was created
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the item was updated
 *         deletedAt:
 *           type: string
 *           format: date
 *           description: The date the item was deleted
 *       example:
 *         id: 1
 *         email: sample@mail.com
 *         secondary_email: null
 *         type: A
 *         first_name: Sample
 *         middle_name: null
 *         last_name: Name
 *         address: sample address
 *         image: sample/path/to/image
 *         status: 1
 *         createdAt: 2024-02-01T00:00:00.000Z
 *         updatedAt: null
 *         deletedAt: null
 *
 *     Expense:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id
 *         expense_date:
 *           type: string
 *           format: date
 *           description: The date of expenditure
 *         currency:
 *           type: string
 *           description: The currency of the expenditure
 *         category_id:
 *           type: number
 *           description: The id related to the category of expenditure
 *         description:
 *           type: string
 *           description: The description(if any) of the expenditure
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the item was created
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the item was updated
 *         deletedAt:
 *           type: string
 *           format: date
 *           description: The date the item was deleted
 *       example:
 *         id: 1
 *         expense_date: 2024-01-15
 *         currency: $
 *         category_id: 2
 *         description: Sample Desc
 *         createdAt: 2024-02-01
 *         updatedAt: null
 *         deletedAt: null
 *
 *     Category:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id
 *         name:
 *           type: string
 *           description: The name of the category
 *         user_id:
 *           type: number
 *           description: The id of the user who created the category (null for pre-defined categories)
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the item was created
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the item was updated
 *         deletedAt:
 *           type: string
 *           format: date
 *           description: The date the item was deleted
 *       example:
 *         id: 1
 *         name: sample cat
 *         user_id: 2
 *         createdAt: 2024-02-01
 *         updatedAt: null
 *         deletedAt: null
 */
