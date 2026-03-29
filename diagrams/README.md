# Diagrams for Smart School Information System (SSIS)

## 1. Architecture Diagram
[ Students ]          [ Teachers ]        [ Parents ]        [ Admin ]
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


Parents → SSIS → Student Progress## 3. Entity-Relationship Diagram (ERD)
Entities:


                    │        USER        │
                    │────────────────────│
                    │ user_id            │
                    │ full_name          │
                    │ email              │
                    │ password           │
                    │ role               │
                    └─────────┬──────────┘
                              │
            ┌─────────────────┴─────────────────┐
            │                                   │
┌────────────────────┐               ┌────────────────────┐
│      STUDENT       │               │      TEACHER       │
│────────────────────│               │────────────────────│
│ student_id         │               │ teacher_id         │
│ user_id            │               │ user_id            │
│ admission_no       │               │ department         │
│ class              │               │ phone              │
│ dob                │               └────────────────────┘
└─────────┬──────────┘
              │
              │     
              │
     ┌────────┴─────────┬──────────────────┬──────────────────┐
     │                  │                  │                  │
     ▼                  ▼                  ▼                  ▼

┌────────────────┐ ┌────────────────┐ ┌────────────────┐ ┌────────────────────┐
│    RESULTS     │ │  ATTENDANCE    │ │      FEES      │ │   NOTIFICATION     │
│────────────────│ │────────────────│ │────────────────│ │────────────────────│
│ result_id       ││ attend_id      │ │ fee_id         │ │notif│_id           │
│ student_id     │ │ student_id     │ student_id       │ user_id              │
│ subject        │ │ date           │ │ amount_due     │ │ message            │
│ marks          │ │ status         │ │ amount_paid    │  │ date_sent         │
│ term           │ │                │ │ balance        │ │                    │
│ grade          │ │                │ │ payment_date   │ │                    │
└────────────────┘ └────────────────┘ └────────────────┘ └────────────────────┘




