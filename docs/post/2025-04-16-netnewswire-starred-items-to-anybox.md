---
title: "Syncing Netnewswire starred items to Anybox"
date: 2025-04-16
categories: ["technology"]
tags: ["sqlite","mac","python"]
url: https://jplattel.nl/post/2025-04-16-netnewswire-starred-items-to-anybox/
---


I've been migrating my online feedreading to [Netnewswire](https://netnewswire.com/) on my mac. Being in control of how stuff works becomes more and more a trend (and a must in some occasions). A thighly knit web isn't really transfered that easily so I had a small thing that I wanted to solve and that is starring items for reading them later. In my case, my read it later list is stored in [Anybox](https://anybox.app/).

I know of other extensible rss readers like [miniflux](https://github.com/miniflux/), but didn't want the maintanence, thus I settled on Netnewswire. Netnewswire stores it database in a SQLite database and Anybox has a applescript interface. With the help of [Cursor](https://www.cursor.com/) it took me a bit over 30 minutes to get everything together. The script uses the python `dbm` module as a small db to keep track of what is synced so it doesn't add any that's already been added. 

The script runs every 5 minutes with the `launchd` deamon, configured trough [Launch Control](https://www.soma-zone.com/LaunchControl/). Here it is: 

```python
import sqlite3
import subprocess
import dbm

DB_PATH = "/Users/<your_username>/Library/Containers/com.ranchero.NetNewsWire-Evergreen/Data/Library/Application Support/NetNewsWire/Accounts/<some_more_user_folder>/DB.sqlite3"
DMB_PATH = "/<absolute_path_to_the_folder_where_you_put_the_script>/cache"

def get_starred_articles(db_path):
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    query = """
    SELECT articles.articleID, COALESCE(articles.url, articles.externalUrl), articles.datePublished as article_url
    FROM articles
    JOIN statuses ON articles.articleID = statuses.articleID
    WHERE statuses.starred = 1 
    LIMIT 100
    """
    
    cursor.execute(query)
    starred_articles = cursor.fetchall()
    
    conn.close()
    return starred_articles


def load_urls():
    with dbm.open(DMB_PATH, 'c') as db:
        return db['urls'].decode('utf-8').split("|")
    
def save_urls(urls):
    with dbm.open(DMB_PATH, 'c') as db:
        db['urls'] = "|".join(urls).encode('utf-8')


def main():
    starred_articles = get_starred_articles(DB_PATH)
    synced_urls = load_urls()
    
    for article in starred_articles:
        id = article[0]
        url = article[1]
        date = article[2]
        
        if url in synced_urls:
            print(f'{url} already synced, skipping')
            continue
        
        anybox_script = f'''
        tell application id "cc.anybox.Anybox"
            set input to "{url}"
            save input
        end tell
        '''
        synced_urls.append(url)
        subprocess.run(['osascript', '-e', anybox_script])
        
    save_urls(synced_urls)
        
    
if __name__ == "__main__":
    main()  
```

Here is how that looks in Launch Control:

![Launch Control configuration for the script](https://files.jplattel.nl/2025/04/Cj5Fwt.png)

I'm looking forward to integrating more things just like I had previously, but having access to local sqlite databases is quite nice ✌️.
