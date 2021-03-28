const SYSTEM_FAILURE = "Internal server error!!!";

const MIDDLEWARE_AUTH_CONSTANTS = {
  ACCESS_DENIED: "Access denied. No authorization token provided",
  RESOURCE_FORBIDDEN: "You don't have access to the request resource.",
  INVALID_AUTH_TOKEN: "Invalid token",
};

const AUTH_CONSTANTS = {
  INVALID_CREDENTIALS: "Invalid email or password",
  INVALID_PASSWORD: "You have entered incorrect old password. Please try again with valid password.",
  INACTIVE_ACCOUNT: "Account is not active. please contact admin",
  INVALID_EMAIL: "The email provided is not registered. Please sign up to continue.",
  PASSWORD_CHANGE_SUCCESS: "Password changed succesfully"
};

const VERSION_CONSTANT = {
  SUBMIT_SUCCESS: "Version details added successfully",
  NO_UPDATE: "You are on latest version",
  VERSION_MANDATORY: "Query parameter v is mandatory",
  APPTYPE_MANDATORY: "Query parameter appType is mandatory",
};

const ADMIN_CONSTANTS = {
  INVALID_EMAIL: "Invalid username/password.",
  BLOCKED_ACCOUNT: "Your account is blocked. Please contact admin.",
};






module.exports.SYSTEM_FAILURE = SYSTEM_FAILURE;
module.exports.AUTH_CONSTANTS = AUTH_CONSTANTS;
module.exports.MIDDLEWARE_AUTH_CONSTANTS = MIDDLEWARE_AUTH_CONSTANTS;
module.exports.ADMIN_CONSTANTS = ADMIN_CONSTANTS;
module.exports.VERSION_CONSTANT = VERSION_CONSTANT;
