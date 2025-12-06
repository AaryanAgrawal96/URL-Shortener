# 🔗 URL-SHORTENER

A robust, high-performance URL shortening service backend built with Node.js and Express, utilizing MongoDB for data persistence. This project is currently focused on core server functionality and API design, with plans for future expansion into a full-stack application.

---

## ✨ Project Status

| Component | Status | Details |
| :--- | :--- | :--- |
| **Frontend/UI** | **Planned** | Frontend is not yet implemented. The project currently functions as a pure backend API. |
| **Deployment** | **Localhost** | The application is currently configured to run locally on your machine. |
| **Core API** | **Complete** | Full functionality for shortening, redirection, and analytics is implemented. |

---

## 🛠️ Technology Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Runtime** | **Node.js** | JavaScript execution environment. |
| **Framework** | **Express.js** | Fast, unopinionated, minimalist web framework for Node.js. |
| **Database** | **MongoDB** | NoSQL database used to store URL mappings and click analytics. |
| **Tooling** | **NanoID** | Used for generating short, unique, and collision-resistant IDs. |

---

## 🚀 Getting Started

Follow these steps to get the server running on your local machine.

### Prerequisites

You must have the following installed:

* **Node.js** (LTS version recommended)
* **npm** (Node Package Manager)
* A running instance of **MongoDB** (local or remote connection).

### Installation and Setup

1.  **Clone the repository:**
    ```bash
    git clone <YOUR_REPO_URL_HERE>
    cd URL-SHORTENER
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment:**
    You will need to set up your MongoDB connection string. Create a file named **`.env`** in the project root and add your database URL:
    ```
    MONGO_URL="mongodb://localhost:27017/url_shortner_db" 
    # Replace with your actual MongoDB connection string
    ```

4.  **Start the server:**
    ```bash
    npm start
    # The server will typically run on port 8001 (or as configured in index.js)
    ```
    The server will now be running at `http://localhost:8001` (or your chosen port).

---

## 💻 API Endpoints

The server exposes the following endpoints for use. All requests should be made to your local server address (e.g., `http://localhost:8001`).

| Method | Endpoint | Description | Request Body Example |
| :--- | :--- | :--- | :--- |
| **POST** | `/url` | Creates a short ID for the provided long URL. | `{ "url": "https://www.example.com/very/long/path" }` |
| **GET** | `/url/:shortID` | **Redirects** the user to the original long URL. Increments the click count. | N/A (Accessed directly in browser) |
| **GET** | `/url/analytics/:shortID` | Retrieves the total clicks and all visited timestamps for a short ID. | N/A |

### Example API Flow

1.  **Shorten a URL:**
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"url":"[https://iitj.ac.in](https://iitj.ac.in)"}' http://localhost:8001/url
    # Response: {"id": "abcdef123"}
    ```
2.  **Access the Short URL (Redirection):**
    Open your browser and navigate to: `http://localhost:8001/abcdef123` (This will redirect you to `https://iitj.ac.in`).

3.  **View Analytics:**
    ```bash
    curl http://localhost:8001/url/analytics/abcdef123
    # Response: {"totalClicks": 1, "visitHistory": [{"timestamp": "2025-12-08T15:00:00.000Z"}]}
    ```

---

## 💡 Scope for Future Amendments

This project has significant potential for expansion. Planned future features include:

* **Custom Short Domains:** Allowing users to specify a custom string for their short ID (e.g., `/url/mycustom`).
* **User Interface (UI):** Development of a dedicated frontend for easy URL shortening and analytics viewing.
* **User Authentication:** Implementing user accounts to manage personal shortened URLs.
* **Deployment:** Setting up the application on a cloud provider (e.g., AWS, Render) for public access.
* **Rate Limiting:** Implementing protection against excessive API requests.

---

## 🤝 Credits

This project was developed by:

**Aaryan Agrawal**
* *CSE Undergrad @ IIT Jodhpur*