var chart;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'container',
			type: 'column',
			margin: [ 50, 50, 100, 80]
		},
		title: {
			text: 'World\'s largest cities per 2008'
		},
		xAxis: {
			categories: [
				'Tokyo',
				'Jakarta',
				'New York',
				'Seoul',
				'Manila',
				'Mumbai',
				'Sao Paulo',
				'Mexico City',
				'Dehli',
				'Osaka',
				'Cairo',
				'Kolkata',
				'Los Angeles',
				'Shanghai',
				'Moscow',
				'Beijing',
				'Buenos Aires',
				'Guangzhou',
				'Shenzhen',
				'Istanbul'
			],
			labels: {
				rotation: -45,
				align: 'right',
				style: {
					font: 'normal 13px Verdana, sans-serif'
				}
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Population (millions)'
			}
		},
		legend: {
			enabled: false
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.x +'</b><br/>'+
					'Population in 2008: '+ Highcharts.numberFormat(this.y, 1) +
					' millions';
			}
		},
			series: [{
			name: 'Population',
			data: [34.4, 21.8, 20.1, 20, 19.6, 19.5, 19.1, 18.4, 18,
				17.3, 16.8, 15, 14.7, 14.5, 13.3, 12.8, 12.4, 11.8,
				11.7, 11.2],
			dataLabels: {
				enabled: true,
				rotation: -90,
				color: '#FFFFFF',
				align: 'right',
				x: -3,
				y: 10,
				formatter: function() {
					return this.y;
				},
				style: {
					font: 'normal 13px Verdana, sans-serif'
				}
			}
		}]
	});
});
