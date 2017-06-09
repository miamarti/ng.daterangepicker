# ngDaterangepicker
------------------------------------------------------------------------

## Date Range Picker for Bootstrap

![Improvely.com](http://i.imgur.com/LbAMf3D.png)

This date range picker component for Bootstrap creates a dropdown menu from which a user can
select a range of dates. I created it while building the UI for [Improvely](http://www.improvely.com), 
which needed a way to select date ranges for reports.

If invoked with no options, it will present two calendars to choose a start 
and end date from. Optionally, you can provide a list of date ranges the user can select from instead 
of choosing dates from the calendars. If attached to a text input, the selected dates will be inserted 
into the text box. Otherwise, you can provide a custom callback function to receive the selection.

### Implementation
```
<ng-date-range bind="modalDates" min="minRangeDate" max="maxRangeDate" limit="limitRangeDate" class="reportrange"></ng-date-range>
```
