# Code Pattern: Atlas Database Server 

This code sample provides an example of an express server connecting with Atlas.

The code provides a pattern for least recently used (lru) caching strategy for handling multiple (and expensive) database connections on a high traffic platform

## Usage
* Register an account on Mongo Atlas
* Note that the db and collection needs to be defined in advance on the platform. This can be done via the cluster menu option > collections > create db
* Create an .env file with relevant information and keys. Note that the database name is embedded in the uri string that you
* Create a password and username on the Atlas Platform via the 'Database Access' menu option
* For testing purposes, specify an universal ip address (0.0.0.0/0) via the 'Network Access' address option
* Obtain the uri string for accessing the db via the clusters menu option > connect
* Update the .env file with uri string. The password and username must be inserted into the uri string per the instructions

## LICENSE
MIT


## Strategic Machines
The conversational platform firm. Connecting business to customer engagement