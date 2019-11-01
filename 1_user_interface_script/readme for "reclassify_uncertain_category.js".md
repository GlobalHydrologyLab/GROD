# Instructions for using script "reclassify_uncertain_category.js"

The purpose of this script is to reclassify structures that were labeled as "Uncertain". The UI of the script will allow you to
quickly look through these structures and while at each structure we would like you to help identify and classify strutures in the satellite image.

## To set up the script
1. copy and paste the entire [script](https://github.com/GlobalHydrologyLab/GROD/blob/master/1_user_interface_script/reclassify_uncertain_category.js) into an empty GEE script and save the file;
2. assign the variable NAME your first name;
3. run the script will generate a control panel at the bottom of the map;
4. input your starting index in the text box and hit enter;
5. the map will move to the structure with that index;

## Start classifying
6. similar to identifying and classifying structures for GROD, identify and classify structures that indicated by a red point at the center of the map;
7. please put new point down even if the you think the structure should be classified as "Uncertain";
8. you can jump to the next structure without adding a new point if you think the current structure does not belong to any of the 7 categories presented (for example, if the current structure is a bridge, then you should skip it and jump to the next structure);
9. when finished classifying current structure, click next will move the map view to the next structure;
10. when exit, take note of the current index, save the script, click run again, and export the data as csv.

If any questions arise, please email yangxiao@live.unc.edu for clarification.
