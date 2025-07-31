---
title: "Relationship Based Authorisation"
slug: "relationship-based-authorisation"
priority: 4
description: "Improving the reliability, observability and accountability of the existing Relationship based authorisation system"
image: "/assets/usecase-1.jpg"
role: "Fullstack Engineer"
company: "Kry"
industry: "Healthcare"
employees: "900+"
stats:
  - label: "Users"
    value: "6M+"
  - label: "Practitioners"
    value: "3,000"
  - label: "req/s"
    value: "1,500"
challenge: |
  It is critical that the practitioner has access to patient data if he is authorised to do so. This is a critical component when it comes to the system as all the practitioner patient interaction goes through the authorisation service. If this system does not work properly the practitioner will not have access to the patients or worse the practitioner might have access to patients, they should not have access to.
results: |
  In my time in the project, I worked with a lot of features improving the reliability of the authorisation system. From building extensive dashboards, to improving the onboarding experience for practitioners by redesigning the UI. The biggest improvement being the back population service that can rectify authorisation links during system failure.
process:
  - title: "Stakeholder Meetings & Gathering Requirements"
    description: "Very often when developing new features, the product descriptions were fuzzy. It was very common to have to talk to the stakeholders to understand what is that they really wanted and how it would fit into the current solution. The stakeholders ranged from practitioners, product managers, admin staff and other teams."
  - title: "Observability"
    description: "Our services were lacking observability to the services we owned. I built extensive dashboards to monitor the system functioning."
  - title: "Redesigning Practitioner Onboarding"
    description: "I was responsible to revamp the practitioner onboarding webapp. There was a new content delivery system that had different resources based on which type of practitioner was being onboarded. I was also responsible of co-ordinating the implementation of the webapp with the delivery of the new content. Made sure the UI reflected the new changes, modified the content schema and documented and educated the admin on how to create the new content using the schema. The project was completed well within the deadline."
  - title: "Back Population Service"
    description: "Sometimes there was a system outage in one of the main microservices handling the meetings. This would sometimes cause meetings to be created but the relationship building side effects to fail. This meant the practitioners could not see the patients. I built a service that would reconnect the broken links so that the practitioners could access the patients."
stack:
  - Java
  - JavaScript
  - Spring
  - React
  - MySQL
  - DataDog
  - Kibana
  - Docker
  - AWS
conclusion: |
  During my time in the authorisation team I helped with the reliability of the critical microservice ensuring smooth operation after a system failure. I also helped a lot with the observability and monitoring of the owned services. Also carried out the design revamp of the onboarding webapp and content delivery system.
---
