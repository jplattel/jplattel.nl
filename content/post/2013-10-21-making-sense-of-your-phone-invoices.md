---
title: Making sense of your phone invoices
date: 2013-10-21 10:02:44.000000000 +02:00
---
Telephone companies tend to have a lot of data about a user. This data includes some information that could help you decide whether you could pay for another subscription that fits more to your usage. To fix that problem I've build a dashboard which uses all the information available trough the invoices my current company (T-mobile) provides in a PDF. (FYI, I got a version running that's also working with receipts from Vodafone)

The first step was to extract the text from the invoice and turning it into something more useable like a database table. I used the [PyPDF](http://pybrary.net/pyPdf/) module and regex. Once it's in the database, building a simple dashboard with Bootstrap and Google Charts isn't that hard any more and you'll end up with something looking like this:

![Phone Invoice Dashboard](/img/Screenshot-2013-10-20-05.09.50-1024x657.png)

While building this small dashboard I had the chance to explore two libraries which found their way into my workflow: [Numpy](http://www.numpy.org/) and [Dataset](http://dataset.readthedocs.org). The first one helps with the histograms and other calculations and Dataset provides an easy method for saving data quickly into a database. I'm hoping to do more of these little dashboards!