---
title: "On solving annoying things"
date: 2016-01-29
url: https://jplattel.nl/post/2016-01-29-on-solving-annoying-things/
---


The dutch government and other (bigger) organisations seem to have a habit to annoy people. One of the reasons they do so is security by obscurity. It has it’s flaw as shown in this blogpost by [@levelsio](https://levels.io/gov-y-u-suck/).

He wrote a little script that fetches and forwards all the email, which everyone can do after loggin in with DigiD. As shown, this takes a lot of steps. Automating it can be done with less then 50 lines of code. Following his blogpost I also decided to open-source my script, which has the same functionality. I’ve uploaded the code on Github: [https://github.com/jplattel/berichtenbox-forwarder](https://github.com/jplattel/berichtenbox-forwarder). You still need a little knowledge of python to install it, but it’s one step closer to an easy life.  

![mijnoverheid.nl](/img/mijnoverheid.nl_-1024x811.png)

I do think it's troublesome that software is developed without any thoughts of the end-user. It seems that this trap is especially more common in bigger IT projects. The functionality of not forwarding important messages ruins the user-experience and thus the entire usage. This matters truly if you want the entire country to use it.

Any way, I wrote the script just to solve these little annoyances that companies throw at you, other things I automated are non-forwarding email inboxes, filling out forms and scripting (mail) replies. It all runs on my own computer or servers, which make the attack surface smaller but more specific. I haven’t decided yet if this truly means more security, but so far I think it does.
