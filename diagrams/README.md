# Diagrams for Smart School Information System (SSIS)

## 1. Architecture Diagram
[ Students ]      [ Teachers ]     [ Parents ]     [ Admin ]
      \              |                |              /
       \             |                |             /
        --------- Internet / HTTPS ----------
                        |
                [ Web Application Server ]
                        |
              -------------------------
              |                       |
     [ Authentication System ]   [ Business Logic ]
              |                       |
              ----------- Database -----------
                      (SSIS DB)

## 2. Data Flow Diagram (DFD)
Students → SSIS → Results / Attendance / Fees
Teachers → SSIS → Marks / Attendance Entry
Admin → SSIS → Reports / User Management
Parents → SSIS → Student Progress

## 3. Entity-Relationship Diagram (ERD)
Entities:
👤 User
user_id (PK)
name
role (admin/teacher/student/parent)
email
password
🎓 Student
student_id (PK)
user_id (FK)
class
admission_no
📘 Results
result_id (PK)
student_id (FK)
subject
score
term
💰 Fees
fee_id (PK)
student_id (FK)
amount
status
date
📅 Attendance
attendance_id (PK)
student_id (FK)
date
status (Present/Absent)
