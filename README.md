# Disaster Response Coordination Platform

## Overview
This platform is designed to help in disaster response by providing real-time disaster reporting, volunteer coordination, and AI-powered analysis. The system uses Google Maps for geolocation, integrates with AI to classify disaster severity, and supports crowdsourced volunteer management and communication.

### Key Features
- **Real-Time Disaster Reporting:** Users can report disasters with location and severity.
- **AI Classification:** Uses machine learning to assess the severity of disasters from images or text.
- **Live Volunteer Management:** Volunteers can sign up, and their locations can be tracked to help victims.
- **SMS & Email Alerts:** Real-time alerts to users in nearby areas when disasters occur.
- **Heatmap Risk Prediction:** AI predicts and visualizes high-risk areas based on past data and weather conditions.
- **Voice-to-Text Disaster Reporting:** Users can report disasters by voice, making it accessible to more people.
- **Chat System:** A live chat system for communication between victims, responders, and volunteers.

## Technologies Used
- **Frontend:** React, Google Maps API, TensorFlow.js (for AI)
- **Backend:** Firebase (for authentication, real-time data)
- **APIs:** Google Vision API, Twilio (SMS), SendGrid (Email)
- **Other:** Firebase Hosting, Google Cloud Functions (for AI-based processing)

## How to Run the Project Locally

1. **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/disaster-response-platform.git
    cd disaster-response-platform
    ```

2. **Install Dependencies**
    - Install Node.js and npm from [here](https://nodejs.org/).
    - Install required packages:
      ```bash
      npm install
      ```

3. **Setup Firebase**
    - Create a Firebase project [here](https://console.firebase.google.com/).
    - Replace the `firebase.js` configuration file with your Firebase credentials.

4. **Run the App**
    ```bash
    npm start
    ```

    Open your browser and go to `http://localhost:3000` to see the app in action.

## Challenges Faced
- Integrating AI models for disaster severity classification in real-time.
- Handling real-time geolocation data and ensuring updates happen quickly.
- Implementing SMS/email alerts with minimal delay during critical events.

## What's Next
- Expanding AI capabilities for predicting disasters based on historical data.
- Adding offline functionality for users in remote or disaster-stricken areas.
- Implementing a more sophisticated volunteer management system with skill matching.

## Contributing
We welcome contributions to improve the platform. Please feel free to fork the repo and submit pull requests.

## License
This project is licensed under the MIT License.
