# 📋 Task CRUD API – Internship Assignment

This is a simple **Node.js + Express** REST API that supports basic CRUD operations for managing tasks using in-memory storage (array). It was built as part of an internship assignment.

---

## 🚀 How to Run

### 1. Install Dependencies

```bash
npm install


2. Set Up Environment Variables
Create a .env file in the root of the project and add the following:
PORT=3000



📮 API Endpoints
| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| POST   | `/tasks`     | Create a new task |
| GET    | `/tasks`     | Get all tasks     |
| GET    | `/tasks/:id` | Get task by ID    |
| PUT    | `/tasks/:id` | Update task       |
| DELETE | `/tasks/:id` | Delete task       |



📝 Sample Task Object
{
  "id": "uuid",
  "title": "Sample Task",
  "description": "Task description",
  "status": "PENDING",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
