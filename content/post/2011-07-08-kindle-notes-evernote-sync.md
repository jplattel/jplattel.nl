---
title: Sync Kindle notes and clippings to Evernote
date: 2011-07-08 12:11:46.000000000 +02:00
---

Since I got my Kindle I started reading a lot more books and articles. And one of the nice things you can do is add notes and clip certain pieces of text. The Kindle saves all those things into a text file for easy access, but I wanted those to be searchable as well in my system.

I wrote a small python script that extracts all notes and clippings from the text file and creates a new note in Evernote for each of them. It's quite crappy python, but at least my skills are improving a bit. You can find the [source-code on this gist](https://gist.github.com/1071682).

_The only thing you need to do is save this python script, put the "My Clippings.txt" in the same folder and run the script with Evernote open. It will create a new Evernote-note for each note on your Kindle with the tag Kindle._

Next version will be fully sync fully automatically and remember which notes are already synchronized. Stay tuned!