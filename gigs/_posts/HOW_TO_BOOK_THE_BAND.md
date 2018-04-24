# Book us by pull-request

* Fork the repo
* Clone your fork
* Create a branch
* Create a markdown file here (in `gigs/_posts/`), named as `YYYY-MM-DD-this-bit-will-become-the-title.md`
* containing these fields:

```
---
# mandatory fields
location:    {whatever address}
time:        {24hr format, quoted because YAML is bad}
latitude:    {where in the world}
longitude:   {is your place located?}

# optional fields
price:       {just an amount}
currency:    {three-letter representation, but only if anything other than GBP}
facebook_id: {if you have an FB event}
other_bands:
  - name: {some other band appearing at the show}
    url:  {some other band's website}
venue_website:
  url:  {venue or event website}
  text: {text for link}
---
```

(The dashes top-and-bottom are __important__. See this [existing event](https://github.com/rawfunkmaharishi/rawfunkmaharishi.github.io/blob/master/gigs/_posts/2017-01-31-hoxton-underbelly.md) as a guide)

* `bundle`
* `jekyll serve`
* Look at [http://localhost:4000/gigs/](http://localhost:4000/gigs/)
* There should be a link to your event
* If that looks OK, push your branch and submit a PR onto our master

And then I guess we negotiate in the PR discussion and merge when everybody's happy

This will also embed some [JSON-LD](https://rawfunkmaharishi.uk//blog/2015/01/19/linking-data/) in the event page:

```
<script type="application/ld+json">
{
  "@context" : "http://schema.org",
  "@type" : "MusicEvent",
  "name" : "Raw Funk Maharishi live at Hoxton Underbelly",
  "description" : "Raw Funk Maharishi live at Hoxton Underbelly",
  "startDate" : "2017-01-31T20:30",
  "endDate" : "2017-01-31T22:30",
  "location" : {
    "@type" : "Place",
    "name" : "Hoxton Underbelly",

    "address" : {
      "@type": "PostalAddress",
      "addressCountry": "United Kingdom",
      "streetAddress": "Zigfrid von Underbelly, 11 Hoxton Square, N1 6NU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.527817",
      "longitude": "-0.08171"
    }
  },
  "performer" : {
    "@type" : "MusicGroup",
    "name" : "Raw Funk Maharishi",
    "sameAs" : "https://rawfunkmaharishi.uk/"
  },
  "image" : "https://rawfunkmaharishi.uk/assets/logos/social-image.png",
  "offers" : {
    "priceCurrency": "GBP",
    "price": "0",
    "availability": "Not relevant",
    "url": "https://rawfunkmaharishi.uk/gigs/2017/01/31/hoxton-underbelly/",
    "validFrom": "2017-01-31"
  }
}
</script>
```

Seriously, if you do this, you have a _very very good chance_ of us playing your show
