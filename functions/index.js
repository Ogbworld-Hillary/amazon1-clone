const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51JUphgJUtNyhKe52fjPB4ttth6m9xsDYnRMWUhNbw6NSvGmDwfOrMKp2mV9rRSjflyks1VzNOivkhREpx1wrVgKa00HkB5PNPW");

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        payment_method_types: ['card'],
        amount: total, // subunits of the currency
        currency: "MYR",
        application_fee_amount: 123,
        transfer_data: {
        destination: '{{CONNECTED_STRIPE_ACCOUNT_ID}}',
        },
    });
    
    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-c7456/us-central1/api
