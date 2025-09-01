# Project Estimation Timeline App

A bilingual (ID/EN) project estimation and scheduling app for Indonesian project managers, featuring accurate timelines, overtime projections, compliance with Indonesian labor regulations, and clear stakeholder communication.

## Vision Statement

A bilingual (ID/EN) project estimation and scheduling app that converts man-hour inputs, role dependencies, and working-hour rules into accurate timelines, overtime (lembur) projections, and compensation—so project managers can hit deadlines confidently, stay compliant with Indonesian labor regulations, and communicate plans clearly to stakeholders.

## Key Goals

- **Fast, Accurate Estimation**: Enable quick "what-if" estimation with finish-by-date vs. normal-hours finish-date scenarios
- **Automated Scheduling**: Generate schedules with role dependencies and individual capacity limits
- **Indonesian Labor Compliance**: Calculate overtime (lembur) hours and compensation per Indonesian regulations
- **Localized Communication**: Provide clear, bilingual (ID/EN) outputs including Gantt charts, cost breakdowns, and exportable reports
- **Error Reduction**: Minimize planning errors via constraints, validations, and contextual error messages
- **Enterprise Ready**: Ensure data privacy, security, and auditability for enterprise use

## Main Functional Requirements

### Core Features
- **Project & Workspace Setup**: Create projects with timezone (Asia/Jakarta), currency (IDR), and language (ID/EN) settings
- **Role & People Management**: Define roles (Product, Designer, Engineer) with hourly rates and assign people with individual schedules
- **Task Modeling**: Create tasks with dependencies, man-hour requirements, and precedence rules
- **Dual Scheduling Modes**:
  - *Deadline-driven*: Calculate required overtime to meet target finish dates
  - *Capacity-driven*: Project finish dates using normal working hours
- **Indonesian Overtime (Lembur) Engine**: Automated calculation with configurable rules, caps, and multipliers
- **Interactive Gantt Charts**: Visual timeline with drag-drop editing and overtime highlighting
- **Scenario Planning**: Create and compare multiple project scenarios
- **Reporting & Exports**: Generate PDF/Excel reports with compliance summaries

### Technical Features
- **Bilingual Interface**: Full UI support for Bahasa Indonesia and English
- **Validation & Error Handling**: Comprehensive constraint checking with localized error messages
- **Import/Export**: CSV import for people, roles, and tasks; holiday calendar integration
- **Security & Audit**: Role-based access control, SSO support, and comprehensive audit logging
- **Performance**: Handle up to 1,000 tasks and 200 people with sub-2-second response times

## Full Product Requirements Document

For complete technical specifications, user stories, acceptance criteria, and implementation details, please refer to the [Full Product Requirements Document (PRD)](https://chatgpt.com/canvas/shared/68b5ca5a0db08191bb5486695e55a62a).

## Getting Started

*Coming soon - Development roadmap and setup instructions will be added as the project progresses.*

## Contributing

This is an open-source project optimized for collaboration. Contributions are welcome! Please refer to our contribution guidelines (to be added) for more information.

## License

*License information will be added during initial development phase.*
