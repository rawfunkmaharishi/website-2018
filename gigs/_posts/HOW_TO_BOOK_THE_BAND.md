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

This will also embed some [JSON-LD](http://rawfunkmaharishi.uk/blog/2015/01/19/linking-data/) in the event page:

```
<script type="application/ld+json">
[{
  "@context" : "http://schema.org",
  "@type" : "MusicEvent",
  "name" : "Raw Funk Maharishi live at The Comedy",
  "startDate" : "2014-10-22 00:00:00 +0000T20:00",
  "location" : {
    "@type" : "Place",
    "name" : "The Comedy",
    "address" : "The Comedy, Oxendon St, SW1"
  },
  "performer" : [{
    "@type" : "MusicGroup",
    "name" : "Raw Funk Maharishi",
    "sameAs" : "http://rawfunkmaharishi.uk/"
  }]
}]
</script>
```

Seriously, if you do this, you have a _very very good chance_ of us playing your show
