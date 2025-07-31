---
title: "API Gateway"
slug: "mobile-api-gateway"
priority: 4
description: "A cross region gateway for mobile app traffic, with user-market specific routing to meet data compliance"
image: "/assets/usecase-1.jpg"
role: "Backend/Infra Engineer"
company: "Volvo Cars"
industry: "Automotive"
employees: "42,000+"
stats:
  - label: "Saved Time"
    value: "10X"
  - label: "Multi Region"
    value: "4"
  - label: "User Base"
    value: "5M"
challenge: |
  The mobile clients called the backend services directly, causing issues like delayed updates, lack of security, poor observability, and cross-region routing problems based on user region. This made it hard to manage API changes, enforce data compliance, and monitor usage. I supported the lead engineer in addressing these challenges through improved routing and implementation.
results: |
  We successfully deployed the gateway and the cross-routing functionality. We are currently onboarding teams to the integrate to the gateway
process:
  - title: "Design Details & Automation"
    description: "Supported the lead engineer in the discovery phase of the project. The integration step for teams mainly involved istio based configurations. Teams would have to merge custom edits of the base template to the network configuration. I initiated the automation of the process using Github Actions to simplify and validate the changes the teams were making. Teams wanting to integrate to the gateway could run a workflow which would then add the configurations automatically bringing down the integration time for the teams from an hour to a few minutes for each integration."
  - title: "User Market Service"
    description: "The second phase of the gateway implementation was the cross-routing based on user market. This needed a backend service that could give the market of the user based on the id of the user. The design of the service and the databases were done by me. After the design phase the spring boot application to handle the requests were implemented. The service was then tested with the gateway across the multiple regions and then deployed to production."
  - title: "Onboarding & Monitoring"
    description: "We are currently onboarding more teams to integrate their services to the gateway. We are also prioritising the teams that have the cross-routing feature of the gateway for compliance. We also have extensive dashboards on Grafana to monitor the system behaviour when the onboarding is ongoing."
stack:
  - Java
  - Spring
  - istio
  - Postgres
  - Kubernetes
  - Azure
  - Grafana
  - Kibana
conclusion: |
  The API Gateway was successfully integrated to the Volvo ecosystem. The project has achieved what it set out to do. We are currently onboarding more teams to use the gateway. We are gathering feedback and hope to improve on the developer experience.
---
