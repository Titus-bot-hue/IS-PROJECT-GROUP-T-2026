# 4.5 Cyber-Resilience

## ⚠️ Potential Threats
- Data breaches
- Unauthorized access
- System downtime

---

## 🛡️ Mitigation Strategies

### 1. Backup Systems
- Regular automated backups

### 2. Access Control
- Role-based permissions

### 3. Monitoring & Logging
- Track system activity

### 4. Incident Response Plan
- Identify → Contain → Recover

---

## 🔄 Recovery Plan
- Restore system from backups
- Notify stakeholders
- Fix vulnerabilities
# Section 4.5 - Cyber-Resilience

The Smart School Information System (SSIS) is designed to remain operational and secure even under adverse conditions. 

---

## 1. Data Backup & Recovery
- Daily incremental backups, weekly full backups  
- Stored on encrypted cloud storage and local offsite server  
- Backup encryption: AES-256  
- Recovery Time Objective (RTO): 2 hours  
- Recovery Point Objective (RPO): 15 minutes  

---

## 2. Network Security Controls
- Firewalls at network edge and internal segments  
- DMZ configuration for web-facing services  
- Network segmentation between admin and student zones  
- VPN access for remote staff  
- TLS 1.3 enforced on all communication  
- DNS security with monitoring for anomalies  

---

## 3. Intrusion Detection & Prevention (IDS/IPS)
- Anomaly-based detection for unusual traffic  
- Signature-based detection for known threats  
- Real-time alerts to IT administrator  
- Escalation procedure for critical intrusions  

---

## 4. System Monitoring & Logging
- Continuous monitoring of servers and applications  
- Logs captured for: login events, data access, failed attempts  
- Log retention: 90 days  
- Security Information and Event Management (SIEM) integration for real-time alerts  

---

## 5. Risk Mitigation & Response
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Data breach | Medium | High | MFA, encryption, RBAC |
| Server downtime | Low | High | Redundant servers, backups |
| Unauthorized access | Medium | Medium | Firewalls, account lockout, VPN |
| Phishing attacks | High | Medium | Staff training, email filtering |
| Malware infection | Medium | Medium | Anti-virus, IDS, sandboxing |

**Incident Response Plan:**
1. Detect and alert  
2. Contain threat  
3. Notify stakeholders  
4. Restore systems from backup  
5. Review and improve security controls
