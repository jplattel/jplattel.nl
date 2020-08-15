---
title: My server got hacked, this is what I did
date: 2014-11-10 09:18:36.000000000 +01:00
---
On friday evening local time (GMT+1) around 21:00 hours my server got hacked, it's CPU immediately shot up towards 100% and my provider removed the box from it's hypervisor node around 18 hours later. Just a few minutes later I got a call from a friend who uses one of my developed applications that it doesn't seem to work anymore.

After trying SSH-ing into the server (which failed), I logged on to the dashboard for managing my VPS, looking at the CPU usage:

![My server got hacked: CPU-usage of a hacked server](/img/Screen-Shot-2014-11-08-at-4.24.59-PM.png)

That isn't looking too good... I switched my VPS towards another hypervisor and changed it root password, then I rebooted it in recovery mode. The next step is figuring out what to do... I've tailed the /var/log/secure file and could see that there where still SSH requests coming in. I blocked out the remote IP's by adding them to etc/hosts.deny and booted out of recovery mode. That got me back up and running with SSH access. My first mission: backing up data, second: finding out what happened. First one done, the second is currently in progress!

For now looking backwards, there is a lot to learn about an event like this for me:

Possible attack vectors might be:

*   Shellshock or Heartbleed bug, while I patched the update, I'm not entirely sure whether I've done a correct job. I've patched Heartbleed quite early, but some of the patches didn't work.
*   I didn't disable the debug mode of some of the Django apps that I'm running on that server, that's fixed now!
*   Apache was configured out of the box with no "Options -Indexes", meaning it would server a directory index if there is no wsgi file configure correctly for a Django app

After gaining back control of the server I executed the following things:

*   Removed all debug modes for all Django apps
*   Configured apache so it doesn't show folder indexes: "Options -Indexes"
*   Installed fail2ban for limiting SSH attempts into the server.
*   Updated bash on all servers