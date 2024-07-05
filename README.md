# Help Find Missing People App

## Overview

You have been hired as a software engineer to develop an application that will help the FBI find missing people. The application uploads images to the FBI cloud database hosted in AWS. This allows the FBI to run facial recognition software on the images to detect a match. You will be developing a NodeJS server and deploying it on AWS Elastic Beanstalk.

## Backend and Frontend URLs

- **Backend URL on AWS Elastic Beanstalk**: [http://exercise-5-elastic-beanstalk-dev22.us-east-1.elasticbeanstalk.com](http://exercise-5-elastic-beanstalk-dev22.us-east-1.elasticbeanstalk.com)
- **Frontend App URL on AWS Elastic Beanstalk**: [http://frontend-dev2.us-east-1.elasticbeanstalk.com](http://frontend-dev2.us-east-1.elasticbeanstalk.com)

## Endpoints

### Filtered Image Endpoint

- **Endpoint**: `/images/filteredimage?image_url={{}}`
- **Method**: GET
- **Description**: This endpoint processes the image from a provided public URL, filters the image, and returns the filtered image.

### Example Request

```http
GET http://exercise-5-elastic-beanstalk-dev22.us-east-1.elasticbeanstalk.com/images/filteredimage?image_url=https://images.unsplash.com/photo-1667984390527-850f63192709?q=80%26w=3840%26auto=format%26fit=crop%26ixlib=rb-4.0.3%26ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
```

### Login Endpoint

- **Endpoint**: `/auth/token`
- **Method**: POST
- **Description**: This endpoint allows users to log in by providing their email and password. It returns a token upon successful authentication.

### Example Request

```
POST http://exercise-5-elastic-beanstalk-dev22.us-east-1.elasticbeanstalk.com/auth/token
```

## Request Body

```
{
    "email": "test@email.com",
    "password": "password"
}

```

### Deployment

## Screenshots and detailed steps for deploying the application are available in the `deployment_screenshot` directory. If you would like to check the screenshots, please check the `deployment_screenshot` directory.
