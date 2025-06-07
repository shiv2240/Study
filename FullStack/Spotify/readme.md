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

| Role    | Capabilities                                                               |
| ------- | -------------------------------------------------------------------------- |
| Creator | Upload songs, View their own songs, Stream own songs                       |
| User    | Browse all songs, Stream any song, Like songs, Create and manage playlists |

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
  uploadDate: Date
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

---

## 5. 🗂 File Upload & Storage with GridFS

* **Why GridFS**: To store audio files larger than MongoDB's 16MB limit.
* **How it works**:

  * `multer.memoryStorage()` collects uploaded file into memory buffer.
  * GridFS splits the file into chunks and saves in `songs.chunks` & metadata in `songs.files`
  * You access and stream files via `GridFSBucket`

---

## 6. 🎤 Creator Portal - Data Flow

1. **Login/Register** as Creator
2. Access dashboard → Upload new song (form with title, artist + audio file)
3. Submit POST request to `/api/songs/upload`
4. File is stored in GridFS; metadata saved in `songs` collection
5. Creator can view their uploaded songs
6. Stream any of their own songs via `/api/songs/stream/:filename`

---

## 7. 🎧 User Portal - Data Flow

1. **Login/Register** as User
2. Fetch and view list of all songs from all creators (GET `/api/songs/all`)
3. Stream any song from `/api/songs/stream/:filename`
4. Like a song (POST `/api/songs/:id/like`)
5. Create playlist (POST `/api/playlists`) and add songs to it
6. View liked songs and custom playlists

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

### Playlists

* `POST /api/playlists`
* `POST /api/playlists/:playlistId/add/:songId`
* `DELETE /api/playlists/:playlistId/remove/:songId`

---

## 10. 🧩 Frontend Data Flow

* On login → JWT stored and user info saved in state/context
* On dashboard:

  * Fetch songs: display as cards/list
  * Stream: send fetch to `GET /stream/:filename`
  * Like button: toggles API call
  * Playlist UI: form to create + select song to add/remove

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
