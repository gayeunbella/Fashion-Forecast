from requests_html import HTMLSession
import json

s = HTMLSession()

query = 'waterloo'
url = f'https://www.google.com/search?q=weather+{query}'

r = s.get(url, headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15'})

currenttemp = r.html.find('span.wob_t', first = True).text

high = r.html.find('div.gNCp2e span.wob_t', first = True).text

low =  r.html.find('div.QrNVmd.ZXCv8e span.wob_t', first = True).text

print(currenttemp+"°c", high+"°c", low+"°c")

with open("python webscraping/temperature.json", "w") as f:
    f.write(json.JSONEncoder().encode({
        "high": high,
        "low": low
    }))

    print(json.JSONEncoder().encode({
        "high": high,
        "low": low
    }))