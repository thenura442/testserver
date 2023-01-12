const register = require( "../Service/register-service" );
const RegisterService = new register();

module.exports = { createUser };

/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async function createUser ( req, res ) {
  try {
    // We only pass the body object, never the req object
    const createdCord = await RegisterService.create( req.body );
    return res.send( createdCord );
  } catch ( err ) {
    res.status( 500 ).send( err );
  }
}