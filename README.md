# Static File Server using Node.js

This repository contains a simple **HTTP static file server** built using Node.js. The server dynamically serves HTML, CSS, JavaScript, and image files, making it ideal for testing and hosting static websites locally.

## Features

- **File Handling with `fs`**: Reads and serves files from the local filesystem.
- **Path Handling with `path`**: Dynamically resolves file paths and serves the appropriate content.
- **MIME Type Support**: Supports common file types including `.html`, `.css`, `.js`, and `.png`.
- **Error Handling**: Responds with a custom `404: File Not Found` message for non-existent files.
- **Lightweight and Efficient**: Runs on a specified port and serves files with minimal overhead.

## How to Use

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repository.git
