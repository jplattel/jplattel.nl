---
title: "GeoTracking: streaming GPS locations"
date: 2010-08-31
tags: ["appengine","GPS","location","python","QS","Quantified Self"]
url: https://jplattel.nl/post/2010-08-31-geotracking-streaming-gps-locations/
---

_I am trying to publish my blogposts in English to reach a wider public. However since English is my second language please forgive me my spelling errors._

Since reading about self-tracking I was fascinated by GPS location and geospatial analysis. As it turns out …. experiments had been done before and I wanted to experience what you could do with the data.

{{< vimeo id="8545134" >}}

I wondered if it were possible for me recreate this, using my less then basic programming skills and no more utilities then my iPhone. So I ventured into python and after reading [Eric Blue’s blog](http://eric-blue.com/2010/08/28/geolocation-gps-and-self-tracking/) I came up with a solution.  

After learning the basics of python and starting with Google App Engine I developed an app that aggregates my location from the Instamapper API to Google App Engine(GAE) and stores it in the datastore. GAE will then generate an image of my location (with some delay). The reason i chose for GAE is the portability of the data generated, so i can move between services without losing older data and having the ability to manipulate it.

_At the moment I’m figuring out how to work with cron-jobs to poll for the location automatically and make the application more robust(with raising errors etc)._

I want to share my (crappy) coding work so you can have an idea how it works. It is not advisable to use this code and I am still figuring out Git(to share) so bear with me… if this does not work for you…

```python
import cgi
import datetime
import os
import urllib

from django.utils import simplejson
from google.appengine.api import users
from google.appengine.ext.webapp import template
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.api import urlfetch
from google.appengine.ext import db

class FrontPage(webapp.RequestHandler):
    def get(self):
        user = users.get_current_user()
        self.redirect(users.create_login_url('/map/'))

class GeoLocation(db.Model):
    longitude = db.StringProperty()
    latitude = db.StringProperty()
    timestamp = db.StringProperty()
    device_key = db.StringProperty()
    device_label = db.StringProperty()
    altitude = db.StringProperty()
    speed = db.StringProperty()
    heading = db.StringProperty()
    date = db.DateTimeProperty(auto_now_add=True)

class Fetch(webapp.RequestHandler):
    def get(self):
        message = '...'
        url = 'http://www.instamapper.com/api?action=getPositions&key=###ENTER YOUR DEVICE_KEY HERE###&num=10&format=json'
        d = urlfetch.fetch(url)
        if d.status_code == 200:
            locations = dict(simplejson.loads(d.content))
            locations = locations['positions']
            for location in locations:
                location = dict(location)

                geo_location = GeoLocation()
                geo_location.longitude = str(float(location['longitude']))
                geo_location.latitude = str(float(location['latitude']))
                geo_location.timestamp = str(location['timestamp'])
                geo_location.device_key = location['device_key']
                geo_location.device_label = location['device_label']
                geo_location.altitude = str(location['altitude'])
                geo_location.speed = str(location['speed'])
                geo_location.heading = str(location['heading'])
                geo_location.put()

            message = locations
        else: 
            message = 'Something went wrong'
        self.response.out.write(message)   

class Map(webapp.RequestHandler):
    def get(self):
        message = 'Not working yet'
        d = db.GqlQuery('SELECT * FROM GeoLocation ORDER BY date DESC') 
        d = d.get()
        if d:
            message = '![](/img/staticmap?zoom=14&size=512x512&maptype=roadmap&markers=color:blue|label:S|' + d.latitude + ',' + d.longitude + '&sensor=false)'
        self.response.out.write(message) 

application = webapp.WSGIApplication(
                                     [('/', FrontPage),
                                      ('/map/', Map),
                                      ('/map/fetch/', Fetch),

                                      ],
                                     debug=True)

def main():
    run_wsgi_app(application)

if __name__ == "__main__":
    main()
```

When i got the cronjobs figured out i can let Instamapper run on my jailbroken iPhone 4 during the day as this does not lower battery life significantly. At the moment of typing I've tracked 2 days worth of points every 2 minutes.
