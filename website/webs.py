import requests

# url = 'http://127.0.0.1:8003/hello/'
# # html = urllib.request.urlopen(url)

# print(dir(requests.get(url)))

url ='https://youtu.be/D70tiPgSbyM'

print(requests.get(url).content)
# f=open("vedo.","wb")
# f.write(requests.get(url).content)
# f.close()

# <iframe width="640" height="360" src="https://www.youtube.com/embed/D0EdEe4q6Ow" title="Balika Vadhu In First Day Of School - Beti vs Bahu | Saas Bahu aur Beti | MyMissAnand" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>