+function ($) {

    $('body').append('<div id="toTop" class="btn">&nbsp</div>');
    $(window).scroll(function () {
	if ($(this).scrollTop() != 0) {
	    $('#toTop').fadeIn();
	} else {
	    $('#toTop').fadeOut();
	}
    });
    $('#toTop').click(function () {
	$("html, body").animate({scrollTop: 0}, 600);
	return false;
    });


    $('.subscribe .form-control').focus(function () {
	$('.subscribe .btn').prop("disabled", false);
    });


    Chart.plugins.register({
	afterDatasetsDraw: function (chart) {
	    if (chart.tooltip._active && chart.tooltip._active.length) {
		var activePoint = chart.tooltip._active[0],
			ctx = chart.ctx,
			y_axis = chart.scales['y-axis-0'],
			x = activePoint.tooltipPosition().x,
			topY = y_axis.top,
			bottomY = y_axis.bottom;
		// draw line
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(x, topY);
		ctx.lineTo(x, bottomY);
		ctx.lineWidth = 1;
		ctx.strokeStyle = '#B3BDD1';
		ctx.stroke();
		ctx.restore();
	    }
	}
    });

    var ctx = document.getElementById('chartStatus').getContext('2d');

    var gradientFill = ctx.createLinearGradient(0, 500, 0, 0);
    gradientFill.addColorStop(0, "rgba(239, 244, 255, 0)");
    gradientFill.addColorStop(1, "#f0f5ff");

    var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'line',

	// The data for our dataset
	data: {
	    labels: ['March 1', 'March 2', 'March 3', 'March 4', 'March 5', 'March 6', 'March 7', 'March 8', 'March 9', 'March 10', 'March 11', 'March 12', 'March 13', 'March 14', 'March 15', 'March 16', 'March 17', 'March 18', 'March 19'],
	    datasets: [{
		    //barThickness: 6,
		    lineTension: 0,
		    borderWidth: 2,
		    //  label: '',
		    backgroundColor: gradientFill,
		    borderColor: '#3580fb',
		    data: [31000, 26000, 40000, 43000, 33000, 31000, 22000, 26000, 38000, 45000, 41000, 31000, 26000, 20000, 39000, 31000, 49000, 55000, 60000],
		}]
	},

	// Configuration options go here
	options: {
	    responsive: true,
	    maintainAspectRatio: false,
	    legend: {
		display: false
	    },
	    scales: {
		yAxes: [{
			ticks: {
			    fontColor: "#939EAE",
			    fontSize: 12,
			    stepSize: 10000,
			    beginAtZero: true
			}
		    }],
		xAxes: [{
			ticks: {
			    fontColor: "#939EAE",
			    fontSize: 12,
			    stepSize: 5,
			    beginAtZero: true
			}
		    }]
	    },
	    tooltips: {
		mode: 'x-axis',
		intersect: false
	    },
	    hover: {
		mode: 'x-axis',
		intersect: false
	    },
	    elements: {
		point: {
		    radius: 0
		}
	    }
	}

    });


}(jQuery);
