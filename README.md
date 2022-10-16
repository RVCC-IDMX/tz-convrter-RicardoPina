# Timezone Utility

This utility returns the current time at any city in the world!!

## Instructions:

Initialize node and the name of the utility followed by the timezone of interest in double quotations.

`node tz "<timezone>"`

The timezone format is the continent followed by the city of interest:

`"Continent/City_Of_Interest"

*Make sure to type the tz correctly*

Here is how it should look:

![Timezone format](img/time-zone-format.png)

This should return:

![Initial return of timezone](img/timezone-return-example.png)


To format the timezone, there's an optional **--format** flag that does exactly that! You can add this flag *after* the timezone.

![Format Flag](img/format-flag.png)

This should return:

![Format flag return example](img/format-flag-return.png)