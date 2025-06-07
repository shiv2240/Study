# 🎧 Spotify-Type Audio Platform - Documentation

## 1. 📘 System Overview

This project is a full-stack audio streaming platform inspired by Spotify. It includes two separate portals:

* **Creator Portal**: Artists or creators can upload songs and listen to their own tracks.
* **User Portal**: General users can browse songs uploaded by all creators, listen to them, like them, and create custom playlists.

### 📦 Tech Stack

* **Frontend**: React.js (with context or Zustand for state management)
* **Backend**: Node.js, Express.js
* **Database**: MongoDB with GridFS for audio file storage
* **Authentication**: JWT
* **File Upload**: Multer + GridFSBucket (native MongoDB)

---

## 2. 👥 User Roles and Permissions

| Role    | Capabilities                                                                                                   |
| ------- | -------------------------------------------------------------------------------------------------------------- |
| Creator | Upload songs, View their own songs, Stream own songs, Edit song metadata, Create albums, Edit profile with bio |
| User    | Browse all songs, Stream any song, Like songs, Create and manage playlists, Edit profile                       |

---

## 3. 🔐 Authentication & Authorization Flow

* JWT tokens are used for session management.
* On login/register, token is issued and stored in frontend (localStorage/cookies).
* Middleware (`auth.js`) checks the token and decodes the user role.
* Routes are protected using role checks:

  * `creatorOnly` middleware allows only creators to upload songs
  * `userOnly` middleware allows only users to like or add songs to playlists

---

## 4. 🧱 Database Schema Design

### User Schema

```js
{
  username: String,
  email: String,
  password: String,
  role: { type: String, enum: ["creator", "user"] },
  bio: String, // only for creators, optional for users
  likedSongs: [ObjectId], // Song references
  playlists: [ObjectId]    // Playlist references
}
```

### Song Schema

```js
{
  title: String,
  artist: String,
  filename: String, // stored in GridFS
  uploader: ObjectId, // references User
  uploadDate: Date,
  album: ObjectId, // optional, references Album
  isPublic: Boolean
}
```

### Playlist Schema

```js
{
  name: String,
  user: ObjectId, // references User
  songs: [ObjectId] // Song references
}
```

### Album Schema

```js
{
  title: String,
  description: String,
  creator: ObjectId, // references User
  songs: [ObjectId], // Song references
  createdAt: Date
}
```

---

## 5. 🗂 File Upload & Storage with GridFS

* **Why GridFS**: To store audio files larger than MongoDB's 16MB limit.
* **How it works**:

  * `multer.memoryStorage()` collects uploaded file into memory buffer.
  * GridFS splits the file into chunks and saves in `songs.chunks` & metadata in `songs.files`
  * You access and stream files via `GridFSBucket`

---

## 6. 🎤 Creator Portal - Detailed Flow

### 1. ✅ Registration as Creator

* Creator visits the platform
* Clicks on “Register”
* Fills: Name, Email, Password, Role = Creator
* Clicks Submit → Backend saves user info & assigns “creator” role

### 2. 🔑 Login as Creator

* Enters Email + Password
* Clicks “Login”
* Backend verifies → Returns a JWT token (secure login key)
* This token is stored in localStorage (in browser)

### 3. 🏠 Creator Dashboard

* Creator is taken to their dashboard
* Options:

  * Upload a New Song
  * View My Songs
  * Create Album
  * Edit Profile

### 4. 🎵 Upload Song

* Creator clicks “Upload Song”
* Upload form appears: Title, Artist Name, and audio file
* Creator selects file → clicks Submit
* Backend:

  * Validates audio file
  * Saves song in GridFS
  * Stores metadata in MongoDB
  * Success message shown

### 5. ✏️ Edit Song Metadata

* In "My Songs" section, creator selects a song to edit
* Fields editable: Title, Artist Name, Tags, Visibility
* Backend updates metadata in MongoDB (PATCH `/api/songs/:id/edit`)

### 6. 📁 Create Album

* Creator clicks on “Create Album”
* Fills Album Title and Description → Submit
* Album saved in `albums` collection with creator ID

### 7. ➕ Add Songs to Album

* Creator views uploaded songs
* Selects one or more songs → Adds to selected album
* Backend updates song documents with album reference

### 8. 🎷 Listen to My Songs

* Creator goes to “My Songs”
* Backend filters songs by uploader ID
* List of uploaded songs is shown
* Each has Play button → streams audio using GridFS

### 9. 📝 Edit Profile (New Feature)

* Creator clicks on “Edit Profile”
* Form with current details appears: Name, Email, Bio
* Creator can update any field → submits
* Backend validates and saves changes in user document

### 10. 📊 Analytics (Future Enhancement)

* View most played songs
* Plays by location (state, city, country)
* Most liked/saved songs

---

## 7. 🎧 User Portal - Detailed Flow

### 1. ✅ Registration as User

* User visits platform
* Clicks “Register”
* Fills: Name, Email, Password, Role = User
* Backend saves user with role = “user”

### 2. 🔑 Login as User

* Enters Email + Password
* Clicks Login → Gets JWT token
* Taken to User Dashboard

### 3. 🏠 User Dashboard

* Options:

  * Browse All Songs
  * Liked Songs
  * My Playlists
  * Edit Profile

### 4. 🔍 Search Songs

* User clicks “Search”
* Frontend calls GET `/api/songs/all`
* Backend returns all songs
* UI shows:

  * Title
  * Artist
  * Play button
  * Like button

### 5. ▶️ Play a Song

* User clicks “Play”
* Request sent to `/api/songs/stream/:filename`
* Backend streams audio from GridFS
* Song plays in browser

### 6. ❤️ Like a Song

* User clicks “Like”
* API call: POST `/api/songs/:id/like`
* Song ID added to `likedSongs[]`

### 7. 📂 View Liked Songs

* User clicks on “Liked Songs”
* Frontend sends request
* Shows songs from user's `likedSongs[]`

### 8. 🎶 Create a Playlist

* User clicks “Create Playlist”
* Enters name → clicks Create
* Playlist is saved in `playlists[]`

### 9. ➕ Add Song to Playlist

* User chooses song → clicks “Add to Playlist”
* API: POST `/api/playlists/:playlistId/add/:songId`

### 10. 📜 View or Edit Playlists

* User visits “My Playlists”
* Lists all playlists
* Expand playlist → view songs
* Can play, remove, reorder songs

### 11. 📝 Edit Profile (New Feature)

* User clicks “Edit Profile”
* Form with current info appears: Name, Email
* User can update info → clicks Submit
* Backend updates data in `users` collection

### 12. 📊 Analytics (Future Enhancement)

* Track time spent in app
* Song play history (weekly/monthly/yearly)
* Top played artists/songs

---

## 8. 💽 Playlist & Favorites Management

### Likes

* Stored in `user.likedSongs` array
* Like: Add song ID to this array
* Unlike: Remove it

### Playlist

* Create: `POST /api/playlists` with name
* Add song: `POST /api/playlists/:playlistId/add/:songId`
* Remove song: `DELETE /api/playlists/:playlistId/remove/:songId`

---

## 9. 🔌 API Routes

### Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### Songs

* `POST /api/songs/upload` (creator only)
* `GET /api/songs/all`
* `GET /api/songs/stream/:filename`
* `POST /api/songs/:id/like` (user only)
* `PATCH /api/songs/:id/edit` (creator only)

### Playlists

* `POST /api/playlists`
* `POST /api/playlists/:playlistId/add/:songId`
* `DELETE /api/playlists/:playlistId/remove/:songId`

### Albums

* `POST /api/albums` (creator only)
* `POST /api/albums/:albumId/add/:songId` (creator only)

### Profile

* `PATCH /api/users/edit-profile` (authenticated user/creator)

---

## 10. 🧩 Frontend Data Flow

* On login → JWT stored and user info saved in state/context
* On dashboard:

  * Fetch songs: display as cards/list
  * Stream: send fetch to `GET /stream/:filename`
  * Like button: toggles API call
  * Playlist UI: form to create + select song to add/remove
  * Album management: create albums and assign songs
  * Profile edit: pre-fill form → on submit → PATCH API

---

## 11. 🔒 Security & Access Control

* JWT auth middleware for all protected routes
* `creatorOnly` and `userOnly` middleware
* File validation via `mimetype` check (only allow `audio/*`)
* Limit max file size in `multer`

---

## 12. 🚀 Future Enhancements

* Comments on songs
* Followers/following between users and creators
* Song recommendations via ML
* Realtime streaming stats with Socket.io
* Notifications (new song from followed creator)

---

## 13. 📦 Dependencies

```json
"dependencies": {
  "bcryptjs": "^3.0.2",
  "dotenv": "^16.5.0",
  "express": "^5.1.0",
  "jsonwebtoken": "^9.0.2",
  "mongodb": "^6.17.0",
  "mongoose": "^8.15.1",
  "multer": "^2.0.1",
  "nodemon": "^3.1.10"
}
```

---

## 14. 🛠 Optional Features

* **Reset Password Flow**

  * User requests reset → sends email via `nodemailer`
  * Tokenized link expires in X minutes
  * User clicks → resets password → confirmation
  * Scheduled cleanup using `cron`

**Dependencies**:

* `nodemailer`
* `cron`
