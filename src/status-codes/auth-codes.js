module.exports = {
  LOGIN200: {
    message: 'Logged in Successfully!',
    status_code: 200,
    success: true,
  },
  LOGIN401: {
    message: 'Invalid Credentials',
    status_code: 401,
    success: false,
  },
  LOGOUT200: {
    message: 'Logged out Successfully',
    status_code: 200,
    success: true,
  },
  OTP200: {
    message: 'OTP sent suceesfully',
    status_code: 200,
    success: true,
  },
  OTP400: {
    message: 'Invalid OTP',
    status_code: 404,
    success: false,
  },
  VOTP200: {
    message: 'OTP Verified Successfully',
    status_code: 201,
    success: true,
  },
  PRM200: {
    message: 'Password reset email sent successfully.',
    status_code: 200,
    success: true,
  },
  TOKEN400: {
    message: 'Invalid Token Object',
    status_code: 400,
    success: false,
  },
  TOKENEXP400: {
    message: 'Token Expired',
    status_code: 400,
    success: false,
  },
  TOKENUSR400: {
    message: 'Invalid User Data in Token',
    status_code: 400,
    success: false,
  },
  AUTH403: {
    message: 'Unauthorized access!',
    status_code: 403,
    success: false,
  },
  PSWDCHNG200: {
    message: 'Password Changed Successfully',
    status_code: 200,
    success: true,
  },
};
