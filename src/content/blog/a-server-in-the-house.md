---
title: "A Server in the House: Catholic Social Teaching, Distributism and Home Server"
date: 2026-11-26
category: Domestic Church
summary: "Why the Domestic Church app has no sync server, and why the little 3D-printed house that replaces it is an argument about property, subsidiarity and the family."
---

For most of this year the [Domestic Church](https://domestic-church.app) app synced the way nearly every app does. My phone and my wife's phone talked to a server I ran in the cloud, and the server kept our family's plan in step: the rosary on Tuesday, whose turn it is to plan date night, the answers to our weekly check-in, the love notes.

This week I turned that off. The app no longer has accounts and no longer has a sync server. If you want two phones to share a plan, you plug in a small 3D-printed house on a shelf in your home. It is a bungalow with a terracotta roof and a gold cross on top, and inside is a little computer that keeps your family's devices in sync over your own Wi-Fi. We call it Home Server.

This could pass for an engineering preference or a privacy feature, and it is both. But the more I worked on it, the more I saw that it is really an argument the Church has been making for 135 years, about who should own things and at what level of society decisions should be made. This post is my attempt to lay that argument out.

## What the house actually does

First, the concrete part, because the principles mean nothing if the thing does not work.

The house holds an ordered log of encrypted records. Every change you make in the app, like adding a novena or finishing a check-in, is encrypted on your phone before it leaves, using a key that only your family's devices hold. The house stores those records and hands them to your other devices when they ask. It never has the key, so it cannot read what it is storing. Neither can I.

To join a phone to the house you have to be physically in the room. You press the button on the house and scan the code printed under its base. The code includes a key the house never sends over the network, so only someone who has handled the house can enrol a device. Sync happens at home and nowhere else.

The prototype runs on an ESP32 board that cost a few dollars. My phone, my wife's phone and our iPad sync through it today. It has room for a whole year of syncing in its flash memory before it has to compact.

That's the thing. Now, why.

## The family is a society, not a user

The Second Vatican Council called the family the _ecclesia domestica_, the domestic church (_Lumen Gentium_ 11). The Catechism builds on it: the Christian family "can and should be called a domestic church" (CCC 2204). That's where the app's name comes from, and it isn't a metaphor that stops at the front door. The family is a real society, with its own life, its own authority and its own prayer.

Leo XIII made the same point in 1891 in _Rerum Novarum_, the encyclical that began modern Catholic social teaching. He described the family as a true society that comes before the State, with rights and duties of its own that don't depend on the State's permission (RN 12–13). If that's true of the State, I think it's true of software.

Cloud software has no category for a family. It has _users_ and _accounts_, and a family is at best a group of accounts that share a subscription. The family's shared life (its plans, its prayers, its honest answers to "what was hard for you this week?") lives on infrastructure owned by someone else, under terms that someone else writes and can change. The family isn't a society in that arrangement. It is a tenant.

## Subsidiarity, or: why sync belongs in the living room

In 1931 Pius XI gave the principle of subsidiarity its classic form in _Quadragesimo Anno_. It's wrong, he wrote, for a larger and higher association to take over what a smaller one can do for itself; doing so is "a grave evil and disturbance of right order" (QA 79). Higher bodies exist to _help_ lower ones (_subsidium_ means help), not to absorb them.

It's a principle about the right order of any society, and it applies cleanly to software architecture. Ask the question honestly: what is the smallest body that can keep two phones in a family in sync?

For a long time the answer really was "a data centre." Phones were too weak, home networks too unreliable and the tooling too immature. That's no longer true. A chip that costs less than a coffee can run an encrypted sync log for a family for a whole year. The household can now do this job for itself. Once a lower body can do the work, subsidiarity says the higher body should hand it back.

So the house isn't a nostalgic gesture against the cloud. It's what you get when you take subsidiarity seriously at a moment when the technology finally allows it.

## Distributism and the problem of the landlord

Leo XIII wrote that the law "should favor ownership, and its policy should be to induce as many as possible of the people to become owners" (RN 46). In the early twentieth century, G. K. Chesterton and Hilaire Belloc took that sentence and built a movement around it, a movement I'm following today with the Domestic Church app.

The distributists defend private property passionately. Their complaint about industrial capitalism is that it concentrates property in very few hands, leaving most people with nothing to own but their labour. As Chesterton put it, too much capitalism does not mean too many capitalists, but too few capitalists. The remedy isn't to abolish property but to spread it widely: the family farm, the small shop, the craftsman's own tools.

Belloc's darkest book, _The Servile State_ (1912), predicted where concentrated ownership would lead. He did not foresee a revolution. He foresaw a comfortable arrangement in which most people would trade freedom for security, fed and housed and looked after, but owning nothing and depending entirely on those who owned everything.

It is hard to read that today without thinking of the cloud. We rent our music, our films, our documents and our photo libraries. Our software is a subscription. Our memories sit on someone else's computer, and our access to them lasts exactly as long as our payments and their business model. It's convenient. It's secure, mostly. And we own almost none of it. Some economists have started calling this "techno-feudalism," and the word lands because the structure is familiar. A small number of lords own the land, and everyone else farms it in exchange for the right to live there.

The house is a very small attempt at distributism for the digital age. It's a piece of real property. You buy it once, and then it's yours. It sits in your home, on your network, holding your family's data, and it keeps working whether or not my company still exists. No monthly rent, no landlord, nothing to cancel. Three acres and a cow, scaled down to a bungalow on a bookshelf.

## Privacy is a property question

Most privacy talk is about secrecy: who can see what. Catholic social teaching suggests a deeper frame, which is ownership and stewardship.

The Church teaches that private property has a twofold character, personal and social. It serves the owner's freedom and dignity, and it is also ordered to the good of others (QA 45–46; _Compendium_ 176–178). Your family's plans and prayers are a kind of property in that sense. They belong to your household, and your household is responsible for them.

When those things live on a company's server, ownership drifts. In practice the company decides how long they're kept, who can be compelled to see them, and what happens to them when the company is sold. Encryption helps. But the strongest privacy guarantee isn't a promise in a policy. It's an architecture where the promise doesn't need to be kept, because the data is never in my hands in the first place. Home Server is that architecture. I don't run your sync server, so I couldn't hold your check-in answers if I tried.

## A new industrial revolution

When Pope Leo XIV chose his name in 2025, he explained that he was thinking of Leo XIII, who wrote _Rerum Novarum_ in the face of the first industrial revolution. The Church, he said, now faces another one, driven by artificial intelligence, and has to bring the same social teaching to bear on it.

I think he's right. A lot of that work will happen in documents and policy. But some of it can happen in the ordinary decisions of people who build software: where the data lives, who owns the machine it lives on, and whether the design treats a family as a society or as a revenue stream.

Rerum Novarum asked for as many people as possible to become owners. In 2026 that can mean something small and literal: a family owning the little computer that holds the schedule of its spiritual life together. It sits on a shelf, glows in the window, and rings a bell when it's time to pray.

Your data lives at home, where it belongs.
