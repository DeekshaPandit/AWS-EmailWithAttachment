# Lambda function to send emails with attachments
An AWS Lambda function that sends an email attachments.
Request should be configured using content-type : multipart/form-data.
If any gateway has been setup then please make BinaryMediaTypes setting available with multipart/form-data. if one or more gateways are there, each gateway should have same setting to pass correct content to lambda.

# How to use
1. Run `npm install` to install dependencies.
2. Compress the project directory and upload as a zip to a new (or existing) Lambda function.
