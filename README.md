# 🐶 Dog Breed Gallery Web App

A simple, interactive web application that uses the [Dog CEO Dog API](https://dog.ceo/dog-api/) to fetch and display random dog images, including their breed names. Users can filter the displayed images by breed and reload the gallery with new dogs using a button.

---

## 🚀 Features

- 📷 Fetches 5 random dog images from the Dog CEO API
- 🐾 Displays breed name automatically (parsed from the image URL)
- 🔍 Real-time filtering by breed using a search input
- 🔄 "Load Dogs" button to refresh with new images
- 🎨 Clean, modern, and responsive UI with scrollable layout

---

## 🌐 API Used

### [Dog CEO Dog API](https://dog.ceo/dog-api/)
The app utilizes the following endpoint:


This endpoint returns a random dog image along with the image URL, from which the breed name is extracted dynamically.

#### Example Response:
```json
{
  "message": "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "status": "success"
}
