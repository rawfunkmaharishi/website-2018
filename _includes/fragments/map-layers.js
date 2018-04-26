L.tileLayer('//stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}', {
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 20,
	ext: 'png'
}).addTo(map)

L.tileLayer('//stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.{ext}', {
  attribution: `
    Map tiles by <a href='http://stamen.com'>Stamen Design</a>,
    <a
      href='//creativecommons.org/licenses/by/3.0'
      >CC BY 3.0</a>
    <br />
    Map data &copy;
    <a
      href='//www.openstreetmap.org/copyright'
      >OpenStreetMap</a>
			{% if include.show_larger %}
			|
    <a
      href='//www.openstreetmap.org/?mlat={{ include.latitude }}&amp;mlon={{ include.longitude }}#map=16/{{ include.latitude }}/{{ page.longitude }}'
      >View larger map</a>
			{% endif %}
  `,
  subdomains: 'abcd',
  minZoom: 1,
  maxZoom: 20,
  ext: 'png'
}).addTo(map)

var marker = L.VectorMarkers.icon({
  prefix: 'fa',
  extraClasses: 'fas',
  icon: 'music'
});
