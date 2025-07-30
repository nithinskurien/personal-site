---
title: "Analytics Event Backend"
slug: "analytics-event-backend"
priority: 0
description: "An end to end data, analytics vendor agnostic product to Ingest analytics events from the client to Snowflake. Enable the possiblity for cross-platform tracking"
image: "/assets/usecase-1.jpg"
role: "Architect & Lead Engineer"
company: "Volvo Cars"
industry: "Automotive"
employees: "42,000+"
stats:
  - label: "Avg Daily Volume"
    value: "30M"
  - label: "Total Users"
    value: "5M"
challenge: |
  Volvo had to go through the process of changing the analytics solution provider for the App twice, once for the analytics vendor solution not being GDPR compliant. While the current solution did not allow for any cross platform tracking due to the inability to send any personal data of the user that would allow the aggregation of data. We also did not have the analytics data in any centralised place for any advanced custom analysis, agnostic of the analytics tooling. The over reliance of using the analytics providers tool in the pipeline meant that the cost of switching was too high due to difference in how data was collected and processed by each of the vendors. Also, there was not control of how the data was collected, how much was collected etc. The current analytics solution also did not meet the data requirements we had within the company of having the events of all data products within a data warehouse for later use.
results: |
  The analytics event backend pipeline was created where the events were collected by our own mobile client, sent to our own backend servers via our gateway. The events were then sent to a Kafka queue. A second backend service then took the events form the queue, batched it and sent it to the Azure container. A scheduled job then migrated the data to Snowflake. Amplitude the new analytics tooling provider then imported the data from Snowflake. The solution successfully moved the dependency of the third party to the end of the pipeline reducing the dependency on the vendor and allowing full control of the data that we collected and processed. Having all the data in a centralised place with essential personal information meant we could do cross platform tracking at the Snowflake level.
process:
  - title: "Analytics Research & Cost Estimation"
    description: "The current scale of the challenge had to be mapped so I looked into the various metrics of the previous analytics tooling trying to understand user behaviour like avg session length, total sessions per day, avg engagement time, daily user count, peak user count, users growth, event growth, etc. The intention being to figure out what would be the load on the backends, how often the client would have to send requests and what would be the cost in a few years.  This study gave us a good base for what protocols and technologies we could use."
  - title: "Understanding dependencies"
    description: "Given what we wanted to build, I had to look at what existing technologies and teams were within the organisation that could support and enable us to complete the solution. There had to be special consideration to reuse any of the existing technologies and not add cost unnecessary cost where possible."
  - title: "Gather Stakeholder Requirements"
    description: "All the various stakeholders had to be contacted ranging from data producers, data consumers, infra teams, data teams, analytics teams, project managers, product owners to understand what were the requirements and expectations of each of the functions. "
  - title: "Scope the MVP"
    description: "With all the functional and non-functional requirements in place it was time to move on to the scoping the features of the MVP so that the desired deadlines could be met and features could be tied to phased rollouts. This was also a perfect time to go back and validate the protocols and technology selection. An initial draft of the solution with presentations and documentations were done."
  - title: "POC"
    description: "A quick prototype of how the solution would work end to end was made to validate the complete solution to be ready for presenting to tech savvy stakeholders"
  - title: "Present The Solution"
    description: "The MVP and future plans were presented to key stakeholders and team members to discuss the details and iron out any outstanding requirements and uncertainties. This was done iteratively to make sure every one was on the same page before the execution of the project."
  - title: "Setting Expectations and Timelines"
    description: "Each of the dependent data teams were contacted for resources and the timelines were agreed upon, the expectations and timelines were then communicated with all stakeholders"
  - title: "Execution and Pivoting"
    description: "With the teams responsible for data migration between Azure Data Lake and Snowflake, it was time to implement the rest of the pipeline. During the testing it was found that one of the solutions we relied on to read from the Kafka queue had a bottleneck and would not work for our solution. We had to pivot to making our own solution."
  - title: "Feature Integration and Deployment"
    description: "With all the parts in place it was time to do integration tests and end to end tests to test the pipeline.Once the features were validated the feature was enabled and the analytics events were rolled out incrementally"
stack:
  - Java
  - Kafka
  - Spring
  - PostgresSQL
  - Android
  - Snowflake
  - Kubernetes
  - Azure
conclusion: |
  The analytics event backend solution was delivered on time and worked without any hiccups, all involved stakeholders were content with the outcome. The solution now makes the app analytics very robust and compliant. We have full control of the analytics data and can decide what we want to do with it. The option of having the analytics events in the Datawarehouse and Snowflake opens up endless possibility when it comes to user analytics and cross-platform tracking.
---