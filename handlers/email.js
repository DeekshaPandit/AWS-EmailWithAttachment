const nodemailer = require('nodemailer');
const { sendEmail } = require('../helpers/email-sender');
const { parse } = require('../helpers/parse-multipart')

exports.handler = async function (event, context) {
  //  let buff = Buffer.from(event.body, 'base64');
 //    let buffString = buff.toString("utf-8");
   // console.log("buffer string:", buffString);
    //event.body = buffString;

    const result = await parse(event);

    try {
        await sendEmail(result.files[0]);
        return {
            statusCode: 200,
            headers: {'Access-Control-Allow-Origin': '*'},
            body: {message:"mail sent"}
        };
    }
    catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            headers: {'Access-Control-Allow-Origin': '*'},
            body: {message:"Could not send"}
        };
    }
};
