# UFOS 

## Project Overview
I have been tasked with transforming a provided .js dataset, displaying it in a table format, allowing for a filter, and making this available in a HTML page for easy sharing.

## Resources
- static/js/data.js

## Purpose
This HTML page is intented to neatly display a collected dataset of UFO sightings, while allowing users to filter the dataset for certain peramaters. The Challenge portion furthers the utility of the filters, adding in options for city, state, country, and shape.

## Results
Filtering is made possible with the sidebar on the left, which takes user input and displays only the datapoints that match the given parameters. The matching data is updated automatically once new filter parameters are provided.
![image](https://user-images.githubusercontent.com/90879979/145691158-6617dd74-375b-48c3-9c46-fa51957bab4b.png)
![image](https://user-images.githubusercontent.com/90879979/145691194-b4fd16cd-e7e1-4377-936d-b6451c4a8d00.png)

## Summary
- We do recognize that we are working with a limited dataset, containing sightings for the month of January 2010, and mostly in the US. A larger dataset would provide much more robust information, providing for further potential use and educational value.
- As the filter is currently set up, it only allows you to filter for results that exactly match. Any typos in the filter parameters return a blank dataset. The filter could be improved by recognizing potential typos and suggesting alternate spellings or parameters.
- The filter could also be improved by allowing users to filter by keywords in the "Comments" column of the dataset. For example, users could search for all observations that mention the word "moon."
