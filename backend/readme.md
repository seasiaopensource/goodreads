## Introduction

This project is the backend of Third Party Middleware to integrate with goodreads

## Setup

Make sure to follow all these steps exactly as explained below. Do not miss any steps or you won't be able to run this application.

### Install the Dependencies

Next, from the project folder, install the dependencies:

    npm i

### Start the Server

    node index.js

### (Optional) Environment Variables

If you look at config/default.json, you'll see a property called PrivateKey and port. This key is used to as token . So, for security reasons, it should not be checked into the source control. I've set a default value here to make it easier for you to get up and running with this project. For a production scenario, you should store this key as an environment variable.

On Mac:

    export token=yourSecureKey
    export app_port=yourport

On Windows:

    set token=yourSecureKey
    set app_port=yourport
