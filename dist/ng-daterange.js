/*
 * autor: Miller Augusto S. Martins
 * e-mail: miller.augusto@gmail.com
 * github: miamarti
 * */
(function(window, document) {
    "use strict";
    (angular.module('ng.daterange', [ 'ng' ])).directive('ngDateRange', [ function() {
	var container = function(scope, element, attrs) {
	    var html = '';
	    html += '<div class="btn btn-circle blue">';
	    html += '	<i class="fa fa-calendar"></i> &nbsp; <span> ' + moment().subtract('days', 29).format('D MMMM, YYYY') + ' - ' + moment().format('D MMMM, YYYY') + ' </span> <b class="fa fa-angle-down"></b>';
	    html += '</div>';
	    $(element).html(html);
	    var divContainer = $(element).find('div').get(0);

	    var config = {
		opens : (Metronic.isRTL() ? 'left' : 'right'),
		startDate : moment().subtract('days', 29),
		endDate : moment(),
		minDate : scope[attrs.min],
		maxDate : scope[attrs.max],
		dateLimit : {
		    days : scope[attrs.limit]
		},
		showDropdowns : true,
		showWeekNumbers : false,
		timePicker : false,
		timePickerIncrement : 1,
		timePicker12Hour : true,
		ranges : {
		    'Hoje' : [ moment(), moment() ],
		    'Ontem' : [ moment().subtract('days', 1), moment().subtract('days', 1) ],
		    'Últimos 7 Dias' : [ moment().subtract('days', 6), moment() ],
		    'Últimos 30 Dias' : [ moment().subtract('days', 29), moment() ],
		    'Esse mês' : [ moment().startOf('month'), moment().endOf('month') ],
		    'Último mês' : [ moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month') ]
		},
		buttonClasses : [ 'btn' ],
		applyClass : 'green-jungle',
		cancelClass : 'red-intense',
		format : 'MM/DD/YYYY',
		separator : ' até ',
		locale : {
		    applyLabel : 'Aplicar',
		    cancelLabel : 'Limpar',
		    fromLabel : 'De',
		    toLabel : 'Até',
		    customRangeLabel : 'Selecionar período',
		    daysOfWeek : [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ],
		    monthNames : [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'July', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
		    firstDay : 1
		}
	    };

	    var callback = function(start, end) {
		scope[attrs.bind].startDate = start.format('D/MM/YYYY');
		scope[attrs.bind].endDate = end.format('D/MM/YYYY');
		$($(divContainer).find('span').get(0)).html(start.format('D MMMM, YYYY') + ' - ' + end.format('D MMMM, YYYY'));
	    };

	    $(divContainer).daterangepicker(config, callback);
	};
	return {
	    restrict : 'E',
	    link : container
	};
    } ]);
})(window, document);
