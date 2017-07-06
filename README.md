# DB DevOps Web App

>This app implemented a web console for a typical DB DevOps application.

## 1.0 Features

- The app uses LDAP and/or internal table to handle authentication
- Issues are ranked based on the number of views and last time of access
- File attachments for issues
- Issues are organized by user generated tags
- Markdown with live preview for issues
- Weighted full text search using PostgreSQL citext extension

## Prerequisites

You will need the following to compile and run the application:

* [JDK](http://www.azul.com/downloads/zulu)
* [Leiningen](https://leiningen.org/)
* [PostgreSQL](http://postgresql.org) - see [here](#configuring-postgresql) for configuration details
* [Redis](http://redis.org)
* [Kanban Remote Exec API](http://k.cmbchina.com)
