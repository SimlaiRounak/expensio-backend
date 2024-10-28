const express = require('express');

const { validateRequest } = require('../middleware/validateSchema');
const authorizeRequest = require('../middleware/authMiddleware');

const AuthController = require('../controllers/authController');
const loginValidation = require('../validations/users/loginValidation');
const registerValidation = require('../validations/users/registerValidation');
const updateProfileValidation = require('../validations/users/updateProfileValidation');

const router = express.Router();

router.post('/login', validateRequest(loginValidation.body, 'body'), AuthController.login);
router.post('/register', validateRequest(registerValidation.body, 'body'), AuthController.register);
router.put('/update-profile', authorizeRequest, validateRequest(updateProfileValidation.body, 'body'), AuthController.updateProfile);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     ResponseLoginSuccess:
 *       type: object
 *       properties:
 *         status_code:
 *           type: string
 *           description: The HTTP status code.
 *         message:
 *           type: string
 *           description: Custom message sent from server.
 *         success:
 *           type: boolean
 *           description: Boolean value which determines API runtime success or failure.
 *         access_token:
 *           type: string
 *           description: The JWT token after succcessful login
 *       example:
 *         status_code: 200
 *         message: "Logged in Successfully!"
 *         success: true,
 *         access_token: "<JWT Token>"
 *
 *     ResponseLoginError401:
 *       type: object
 *       properties:
 *         status_code:
 *           type: string
 *           description: The HTTP status code.
 *         message:
 *           type: string
 *           description: Custom message sent from server.
 *         success:
 *           type: boolean
 *           description: Boolean value which determines API runtime success or failure.
 *       example:
 *         status_code: 401
 *         message: "Invalid Credentials"
 *         success: false,
 *
 *     ResponseLoginError404:
 *       type: object
 *       properties:
 *         status_code:
 *           type: string
 *           description: The HTTP status code.
 *         message:
 *           type: string
 *           description: Custom message sent from server.
 *         success:
 *           type: boolean
 *           description: Boolean value which determines API runtime success or failure.
 *       example:
 *         status_code: 404
 *         message: "User not found!"
 *         success: false,
 *
 *     ResponseRegistrationSuccess:
 *       type: object
 *       properties:
 *         status_code:
 *           type: string
 *           description: The HTTP status code.
 *         message:
 *           type: string
 *           description: Custom message sent from server.
 *         success:
 *           type: boolean
 *           description: Boolean value which determines API runtime success or failure.
 *       example:
 *         status_code: 201
 *         message: "User Registered Successfully"
 *         success: true
 *     ResponseRegistrationError:
 *       type: object
 *       properties:
 *         status_code:
 *           type: string
 *           description: The HTTP status code.
 *         message:
 *           type: string
 *           description: Custom message sent from server.
 *         success:
 *           type: boolean
 *           description: Boolean value which determines API runtime success or failure.
 *       example:
 *         status_code: 400
 *         message: "User already exists!"
 *         success: false
 *     ResponseProfileUpdateSuccess:
 *       type: object
 *       properties:
 *         status_code:
 *           type: string
 *           description: The HTTP status code.
 *         message:
 *           type: string
 *           description: Custom message sent from server.
 *         success:
 *           type: boolean
 *           description: Boolean value which determines API runtime success or failure.
 *       example:
 *         status_code: 200
 *         message: "Your profile has been updated successfully!"
 *         success: true
 *
 * tags:
 *   name: Authentication
 *   description: API endpoints for managing authentication of the application
 *
 * /auth/login:
 *   post:
 *     summary: API for a user to log-in to their account
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email id of attempting user
 *               password:
 *                 type: string
 *                 description: The password of attempting user
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/ResponseLoginSuccess'
 *       401:
 *         description: Invalid Credentials
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/ResponseLoginError401'
 *       404:
 *         description: User Not Found
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/ResponseLoginError404'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerResponseError'
 *
 * /auth/register:
 *   post:
 *     summary: API for a user to create a new account
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 description: The first name of the new user
 *               last_name:
 *                 type: string
 *                 description: The last name of the new user
 *               email:
 *                 type: string
 *                 description: The email id of the new user
 *               password:
 *                type: string
 *                description: The password of the new user
 *               phone_number:
 *                 type: string
 *                 description: The phone number of the new user
 *               image:
 *                type: string
 *                description: The image file in BLOB format.
 *     responses:
 *       200:
 *         description: User Registered Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseRegistrationSuccess'
 *       400:
 *         description: User Already Exists
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseRegistrationError'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerResponseError'
 *
 * /auth/update-profile:
 *   put:
 *     security:
 *       - ApiKeyAuth: []
 *     summary: API to update an existing user's profile
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                type: number
 *                description: The id of the user.
 *               first_name:
 *                 type: string
 *                 description: The first name of the existing user
 *               last_name:
 *                 type: string
 *                 description: The last name of the existing user
 *               email:
 *                 type: string
 *                 description: The email id of the existing user
 *               phone_number:
 *                 type: string
 *                 description: The phone number of the existing user
 *               image:
 *                type: string
 *                description: The image file in BLOB format.
 *     responses:
 *       200:
 *         description: User Updated Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponsePMEditSuccess'
 *       404:
 *         description: User Not Found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponsePMNotExists'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerResponseError'
 *
 */
