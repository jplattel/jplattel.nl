---
title: "Configuring Mainsail With Zerotier"
date: 2022-05-16
categories: ["technology"]
tags: ["3dprinting","mainsail","klipper","pi","ssh","klipper","zerotier"]
url: https://jplattel.nl/post/2022-05-16-configuring-mainsail-with-zerotier/
---


This blogpost mostly functions as a reminder to myself on how to configure [Mainsail](https://docs.mainsail.xyz/) to use [Zerotier](https://www.zerotier.com/). If you're unfamiliar with any of the two, the first one is a operating system made for running a 3D printer and the second one allows for a network layer for personal computing, connecting devices over SD-WAN & VPN. 

I was running Octoprint for a while, but after a tip by David from [Dato](https://dato.mu/) I went on to explore Mainsail. Mainsail is a better way to run your printer, and it's way faster then Octoprint. So far I've been running it for a week and I'm pretty happy about it! The only thing that was missing was the remote connection I had with Octoprint, made possible by Zerotier.

I couldn't find any details on how to setup Zerotier with Mainsail, but it's really easy:

1.  Flash Mainsail with the Raspberry Pi Imager _(be sure to configure a 2.4Ghz network, as my Pi 3B+, doesn't support the 5Ghz yet..)_.
2.  Follow the [setup guide of Mainsail](https://docs.mainsail.xyz/setup/) to configure your printer.
3.  Login with SSH to the Mainsail after it's finished installing on the printer
4.  Install Zerotier on the Pi through the [Linux install of Zerotier](https://www.zerotier.com/download/)
5.  Configure Zerotier to use your network by using: `sudo zerotier-cli join <network_id_here>`
6.  In my case I use Cloudflare to route a subdomain to my personal Zerotier network if you also add the IP to Cloudflare you'll need to configure `moonraker.conf` with a cors entry, allowing you to use a (sub)domain. You can do this my `vim ~/klipper_config/moonraker.conf` on the SSH connection of Mainsail and adding a CORS entry to `cors_domains`.

Restart the klipper/Mainsail instance and you should be good to go! (it might take a while for the DNS to resolve though!). That's it you can now use your printer everywhere as long as it's on!
