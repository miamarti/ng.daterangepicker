# ngDaterangepicker
------------------------------------------------------------------------

## Date Range Picker for Bootstrap

<p>
  <a href="https://gitter.im/miamarti/ng.daterangepicker" target="_blank"><img src="https://img.shields.io/gitter/room/nwjs/nw.js.svg"></a>
  <img src="https://img.shields.io/badge/ng.daterangepicker-release-green.svg">
  <img src="https://img.shields.io/badge/version-1.0.2-blue.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
  <a href="https://github.com/miamarti/ng.daterangepicker/tarball/master"><img src="https://img.shields.io/github/downloads/atom/atom/latest/total.svg"></a>
  <img src="https://img.shields.io/bower/v/bootstrap.svg">
  <a href="http://waffle.io/miamarti/ng.daterangepicker"><img alt='Stories in Ready' src='https://badge.waffle.io/miamarti/ng.daterangepicker.svg?label=ready&title=Ready' height="21" /></a>
</p>

![Improvely.com](http://i.imgur.com/LbAMf3D.png)

This date range picker component for Bootstrap creates a dropdown menu from which a user can
select a range of dates. I created it while building the UI for [Improvely](http://www.improvely.com), 
which needed a way to select date ranges for reports.

If invoked with no options, it will present two calendars to choose a start 
and end date from. Optionally, you can provide a list of date ranges the user can select from instead 
of choosing dates from the calendars. If attached to a text input, the selected dates will be inserted 
into the text box. Otherwise, you can provide a custom callback function to receive the selection.

This is a project based at http://www.daterangepicker.com/

### Implementation
```
<ng-date-range bind="modalDates" min="minRangeDate" max="maxRangeDate" limit="limitRangeDate" class="reportrange"></ng-date-range>
```
## Bower install de dependency
```
$ bower install ng.daterangepicker-bootstrap --save
```

## NPM install
```
$ sudo npm install ng.daterangepicker --save
```

## Metrics

[![Throughput Graph](https://graphs.waffle.io/miamarti/ng.daterangepicker/throughput.svg)](https://waffle.io/miamarti/ng.daterangepicker/metrics/throughput)
