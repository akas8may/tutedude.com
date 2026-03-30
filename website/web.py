import urllib.request ,urllib.parse ,urllib.error
# from bs4 import BeautifulSoup


url = 'http://127.0.0.1:8003/hello/'
html = urllib.request.urlopen(url)
# .read()

for i in html:
    print(i.decode().strip())
# soup = BeautifulSoup(html, "html.parser")