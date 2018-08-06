Monospaced jobs
=============

Experiment, displays jobs containing the keyword ‘anywhere’ from some popular web job boards.

Uses YQL to aggregate, filter, and convert the RSS feeds to JSON.

This process is intended to be run as a regular cron job, so the front-end can access the latest rss.json from cache without having to wait for processing to complete in real-time.
