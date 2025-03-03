---
title: 'Digitizing the Lectionary: Navigating the Challenges of Biblical Translations'
date: 2025-03-03
category: Lectionary
summary: 'Exploring the challenges of digitizing the Revised Common Lectionary, from verse parts to translation differences.'
---

At its heart, the lectionary is a bridge between scripture and worship, pairing specific Bible passages with liturgical days or seasons.

## Goal

The goal is to take the references in the [Revised Common Lectionary](https://lectionary.library.vanderbilt.edu/) and create a digital version that allows for dynamic computation of the readings.

This requires knowledge of:

1. The specific liturgical day.
2. The readings that might apply to that day.
3. The specific translation of the Bible that is being used; this includes the very tricky issue of verse numbering as it relates to "verse parts," which we will explore in depth here and in future posts.

## Liturgical Days

The liturgical year is divided into several seasons, each with its own themes and readings. For example, Advent marks the beginning of the church year and focuses on anticipation and preparation for Christ’s coming. Lent, on the other hand, is a time of reflection and repentance leading up to Easter. Each season has a set of readings that reflect its themes, with specific passages assigned to particular days.

In the Roman Catholic tradition, we have access to a beautiful open-source project called [romcal](https://romcal.js.org/). This project provides a comprehensive list of liturgical days and the readings that are associated with them. It is already written in TypeScript and can be used to calculate what liturgical day it is, including taking into account complex prioritization issues that occur between the General Roman Calendar and their particular modifications in certain areas from historical and local traditions.

It makes sense, therefore, to build upon this great initiative to create a digital lectionary that can be used across different translations of the Bible. This project does not yet include the ability to calculate the readings for a given day, but already there is the ability to compute the [liturgical proper](<https://en.wikipedia.org/wiki/Proper_(liturgy)>), the Sunday cycle, and the weekday cycle.

## Readings that Apply to a Particular Day

This is where the Revised Common Lectionary comes in. The RCL is a three-year cycle of weekly readings used by many Christian denominations. It includes four readings for each Sunday and major feast day: an Old Testament reading, a Psalm, a New Testament reading, and a Gospel reading. These readings are chosen to complement each other thematically and theologically, creating a cohesive worship experience. There are more particulars that, as a Roman Catholic, I would be interested in, but starting from the RCL is easily accessible and is a good place to start.

### Digitizing the Lectionary

Parsing and formatting the RCL into a usable digital format is a fairly simple task. Many very robust Bible reference parsers exist, like [the one from Open Bible](https://github.com/openbibleinfo/Bible-Passage-Reference-Parser). What may be trickier, however, is the issue of verse parts, especially when considering various translations, but at the very least, adding parts to the verse reference JSON structure is a good start.

## Verse Parts

And so we come to what I perceive as the greatest area of difficulty in creating a digital lectionary that can be used across different translations of the Bible: the issue of verse parts.

### What Are Verse Parts?

Verse parts are the divisions of a verse into smaller parts. For example, Genesis 2:4 reads: "These are the generations of the heavens and the earth when they were created. In the day that the Lord God made the earth and the heavens." This verse is used at the end of the reading in the RCL for the Easter Vigil, Genesis 1:1-2:4a. Verse 4 appears at the end of the reading and... it ends with a comma. In Bibles that have titles, the second part of verse 4 is broken up by a title. Needless to say, we don’t want to end a lectionary reading with a comma. So, we need to be able to break up the verse into parts.

### Versification

The Bible exists in hundreds of translations, from the King James Version (KJV) to the New International Version (NIV), the English Standard Version (ESV), and beyond. These translations differ in ways that complicate efforts to split them into semantic or rhythmic parts:

1. **Wording Differences:** Even within the same language, translations vary widely in phrasing. A verse in the NAB, which is used in the American lectionary, might read differently in the NRSV, which is used in the Canadian lectionary, so we cannot rely on word matching to split verses into parts.
2. **Verse Numbering:** Some translations number verses or chapters differently. The Psalms, for example, can shift between translations or traditions (e.g., the Hebrew vs. Septuagint numbering), meaning Psalm 23 in one version might align with Psalm 22 in another.

These variations mean that a one-size-fits-all approach won’t work. A digital lectionary needs a flexible system to map readings across translations accurately, ensuring that users get the correct passage regardless of their preferred version.

## Copyright Concerns

Unlike ancient manuscripts, most modern Bible translations are protected by copyright law, adding a legal layer to the digitization process:

1. **Permissions:** Using translations like the NIV, ESV, or New Revised Standard Version (NRSV) requires securing licenses from publishers, who often impose strict usage terms.
2. **Restrictions:** Some licenses limit how much text can be reproduced, where it can be displayed, or whether it can be used commercially.

A digital lectionary serving multiple translations must comply with a patchwork of such rules.

Navigating this legal landscape is critical to avoid infringement and ensure the digital lectionary can be shared widely. It might also mean that a verse-splitting solution that includes the text itself might not be possible.

## Translation-Agnostic

Natural Language Processing (NLP) could help align readings across translations, identifying corresponding passages despite differences in wording or numbering. This approach would require a translation-agnostic framework that can parse and match verses based on their content, not just their form.

## Machine Learning for Text Alignment

For a more automated approach, machine learning could help align and format readings across translations:

- Train models on the RCL's default NRSV verse parts to identify corresponding passages despite differences in wording or numbering.
- Use natural language processing (NLP) to detect and format liturgical elements like introductions or refrains.
- Automate updates as new translations or revisions are added, reducing manual upkeep.

While complex, this method promises scalability and precision, harnessing AI to bridge the gap between human curation and digital efficiency.
