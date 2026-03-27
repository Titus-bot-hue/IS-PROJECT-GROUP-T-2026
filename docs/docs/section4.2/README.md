# 4.2 System Design

## 🧩 System Architecture
The SSIS follows a 3-tier architecture:

1. Presentation Layer
   - User interfaces (Admin, Teacher, Student, Parent dashboards)

2. Application Layer
   - Business logic (attendance, grading, fee processing)

3. Data Layer
   - Database storing all school data

---

## 👥 User Roles
- Admin
  - Manage users, system settings, reports

- Teachers
  - Record attendance
  - Upload grades

- Students
  - View results, attendance

- Parents
  - Monitor student performance and fee status

---

## 🔄 Data Flow
- Data is entered by teachers/admin
- Stored in a centralized database
- Processed by system logic
- Displayed to users via dashboards

---

## 🗄️ Database Design (ERD Overview)
Main entities:
- Students
- Teachers
- Classes
- Fees
- Attendance
- Results

Relationships:
- One student → many results
- One teacher → many classes
