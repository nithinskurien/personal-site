---
title: "Image Analysis Based Network Auditing"
slug: "image-analysis-based-auditing"
priority: 1
description: "An innovative way to audit customer network for interference, based on image analysis methodology"
image: "/assets/usecase-1.jpg"
role: Architect & Lead Engineer"
company: "Ericsson"
industry: "Telecommunication"
employees: "100,000"
stats:
  - label: "productivity"
    value: "20X"
challenge: |
  A customer wanted help auditing their network for network interference. The system we had in place for auditing the network was very rudimentary (Std deviation of spectrum RSSI) and manual. The process involved doing manual operations on excel sheet having more than a million rows which would take more than 6 hrs to complete. The result also was not very conclusive with a lot of false positives and negatives.
results: |
  I automated the whole auditing process and used image analysis to stitch together data points into an image. The image then could be looked at to make analysis on the data. This method helped draw out very detailed conclusions about the network. The customer with the data available were able to make informed purchasing decision about the NBIR (Narrow Band Interference Rejection) feature Ericsson sold.
process:
  - title: "Manual Auditing"
    description: "The project started by me manually doing the audit for the customer network by looking at the data shared by the customer. This was taking very long and was frustrating specially if a mistake was done in one of the steps. Each step took more than 30 mins."
  - title: "Automating The Audit"
    description: "The first step was using Python, pandas, numpy, OpenCV and PyQt to make a desktop application that could automate the manual steps. This drastically cut down the auditing time to 15 mins. The results were then exported into an excel sheet"
  - title: "Better Algorithm"
    description: "The previous algorithm just looked at the sensor value reading at one point of time to understand if the sensor reading meant an interference or not. After expanding on the desktop tool to visualise the spectrum in 3d it was very obvious that there were many false readings by the standard deviation method. This gave me the idea of using Image Analysis, the main premise of the idea being that the sensor readings for a site could be stitched together for a longer time duration and then normalised and then converted to a black and white image. Where the width and height was time and frequency while the pixel was the power reading of the sensor. Now edge detection algorithms could be used to find edges along the time axis."
  - title: "POC"
    description: "A quick proof of concept was done showing the viability of the solution and was presented to the stakeholders and colleagues. The solution was unanimously accepted as a replacement for the auditing process."
  - title: "ImplementationS"
    description: "The POC implementation was further worked on with smaller algorithms developed to detect moving interference and filtering edge cases. The solution could give much more detailed report of the interference in the whole network."
  - title: "Presentation"
    description: "The solution and results were presented to the customer and the wider organisation. It was highly appreciated by everyone."
stack:
  - Python
  - Pandas
  - Numpy
  - OpenCV
  - Matplotlib
conclusion: |
  The new way of auditing interference in then network has been very popular within my organisation. I was highly commended for the ingenuity and relevance of the solution. The detailed results helped the customer make a very informed decision about the real need for them to buy the NBIR solution that Ericsson was providing.
---
