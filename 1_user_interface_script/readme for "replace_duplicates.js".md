# Instructions for using script "replace_duplicates.js"

The purpose of this script is to reclassify structures that have been classify as at least two different categories in our current dataset. 
We have grouped points that are within 200m distance to each other and assign each group a group id. The UI of the script will allow you to
quickly look through these groups and while at each group we would like you to identify and classify strutures in the satellite image.

With your reclassified points and categories, we will then remove all the duplicates from the dataset then add the all the new points you help
add into our dataset.

## To set up the script
1. copy and paste the entire [script](https://github.com/GlobalHydrologyLab/GROD/blob/master/1_user_interface_script/replace_duplicates.js) into an empty GEE script and save the file;
2. assign the variable NAME your first name;
3. run the script will generate a control panel at the bottom of the map;
4. input your starting index in the text box and hit enter;
5. the map will move to the group of points that share that index;

## Start classifying
6. similar to identifying and classifying structures for GROD, identify and classify structures that covered by the duplicated points (those in red);
7. note to add one and only one point for one structure;
8. when finished, click next will move the map view to the next group;
9. when exit, take note of the current index, save the script, click run again, and export the data as csv.

If any questions arise, please email yangxiao@live.unc.edu for clarification.
